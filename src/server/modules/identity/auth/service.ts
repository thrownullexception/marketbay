import { differenceInMilliseconds } from "date-fns";
import { and, desc, eq, isNull } from "drizzle-orm";
// import { OAuth2Client } from "google-auth-library";
import * as DisposableMailchecker from "mailchecker";
import ms, { type StringValue } from "ms";
import type * as v from "valibot";
import normalizeEmail from "validator/es/lib/normalizeEmail";
import {
	type ChangePasswordRequestSchema,
	type LoginRequestSchema,
	OTP_LENGTH,
	type RegisterRequestSchema,
	type ResetPasswordRequestSchema,
	type VerifyEmailRequestSchema,
} from "@/schemas/auth";
import { type Database, db } from "@/server/database";
import { type CacheService, cacheService } from "@/server/services/cache";
import { type MailService, mailService } from "@/server/services/mail";
import { type RandomService, randomService } from "@/server/services/random";
import { BadRequestError } from "@/server/shared/errors";
import { AuthSessionEntity } from "../auth-session/entity";
import { OtpVerificationEntity } from "../otp-verifications/entity";
import { OtpScopes } from "../otp-verifications/types";
import { type UsersService, usersService } from "../users/service";
import type { UserId } from "../users/types";
import { OTP_EXPIRATION_TIME } from "./constants";
import {
	constantTimeEqual,
	hashPassword,
	hashSecret,
	verifyPassword,
} from "./utils";

// TODO
// https://github.com/dropbox/zxcvbn

// 11. Missing Audit Logging
// No logging of auth events (login attempts, password changes, etc.)
// Fix: Add comprehensive audit logging

const inactiveSessionExpirationTime: StringValue = "14 days";
const sessionUpdateAge: StringValue = "1 day";

export class AuthService {
	constructor(
		private readonly db: Database,
		private readonly cacheService: CacheService,
		private readonly usersService: UsersService,
		private readonly mailService: MailService,
		private readonly randomService: RandomService,
	) {}

	// const googleOauthClient = new OAuth2Client();

	async signup(input: v.InferOutput<typeof RegisterRequestSchema>) {
		if (!DisposableMailchecker.isValid(input.email)) {
			throw new BadRequestError("Invalid email");
		}

		const hashedPassword = await hashPassword(input.password);

		const normalizedEmail = normalizeEmail(input.email) || "";

		const existingUserId = await this.usersService.getUserIdFromField({
			field: "normalizedEmail",
			value: normalizedEmail,
		});

		if (existingUserId !== "null") {
			throw new BadRequestError("Email already exists");
		}

		const userId = await this.usersService.createUser({
			email: input.email.toLowerCase(),
			normalizedEmail,
			firstName: input.firstName,
			lastName: input.lastName,
			password: hashedPassword,
		});

		const otp = await this.createOtp({
			userId,
			scope: OtpScopes.EMAIL_VERIFICATION,
		});

		console.log("otp", otp);

		return {
			userId,
		};

		// await this.mailService.send({
		// 	to: input.email,
		// 	params: { otp: otp, firstName: input.firstName },
		// 	type: "verification",
		// });
	}

	async signin(
		input: v.InferOutput<typeof LoginRequestSchema>,
	): Promise<
		| { type: "not_verified"; userId: UserId }
		| { type: "authenticated"; token: string }
	> {
		const userId = await this.usersService.getUserIdFromField({
			field: "email",
			value: input.email.toLowerCase(),
		});

		if (userId === "null") {
			throw new BadRequestError("Invalid login credentials");
		}

		const user = await this.usersService.getFieldsFromUserIdOrFail({
			userId: userId,
			fields: ["password", "emailVerified", "id", "banned"],
		});

		if (user.banned) {
			throw new BadRequestError("Account has been banned");
		}

		if (!user.emailVerified) {
			return { type: "not_verified", userId: user.id };
		}

		const isValidPassword = await verifyPassword({
			password: input.password,
			hash: user.password ?? "",
		});

		if (!isValidPassword) {
			throw new BadRequestError("Invalid login credentials");
		}

		const authToken = await this.createAuthSession({
			userId: user.id,
		});

		return {
			type: "authenticated",
			token: authToken.token,
		};
	}

	async createAuthSession(input: { userId: UserId }) {
		const sessionId = this.randomService.generateSecureRandomString({
			length: 24,
		});

		const secret = this.randomService.generateSecureRandomString({
			length: 24,
		});
		const secretHash = await hashSecret(secret);

		const token = `${sessionId}.${secret}`;

		await this.deleteAuthSession({ userId: input.userId });

		await this.db.insert(AuthSessionEntity).values({
			userId: input.userId,
			sessionId,
			secretHash,
			lastVerifiedAt: new Date(),
		});

		return {
			token,
		};
	}

	async validateAuthSessionToken(authCookie: string | undefined): Promise<
		| {
				userId: UserId;
		  }
		| "not-authorized"
	> {
		const validationResult =
			await this.validateAuthSessionTokenFromCookie(authCookie);

		if (validationResult === "not-authorized") {
			return "not-authorized";
		}

		const { sessionId, sessionSecret } = validationResult;

		return await this.cacheService.remember({
			namespace: "auth-sessions",
			key: sessionId,
			ttl: "10 minutes",
			fetch: async () => {
				const [secretHash, session] = await Promise.all([
					hashSecret(sessionSecret),
					this.getAuthSession({ sessionId }),
				]);

				if (session === "not-authorized") {
					return "not-authorized";
				}

				if (!constantTimeEqual(session.secretHash, secretHash)) {
					return "not-authorized";
				}

				if (
					differenceInMilliseconds(new Date(), session.lastVerifiedAt) >=
					ms(sessionUpdateAge)
				) {
					await this.db
						.update(AuthSessionEntity)
						.set({ lastVerifiedAt: new Date() })
						.where(eq(AuthSessionEntity.sessionId, session.sessionId));
				}

				return { userId: session.userId };
			},
		});
	}

	private async validateAuthSessionTokenFromCookie(
		authCookieToken: string | undefined,
	) {
		if (!authCookieToken) {
			return "not-authorized";
		}

		const tokenParts = authCookieToken.split(".");

		if (tokenParts.length !== 2) {
			return "not-authorized";
		}

		const [sessionId, sessionSecret] = tokenParts;

		return {
			sessionId,
			sessionSecret,
		};
	}

	async getAuthSession(input: { sessionId: string }) {
		const authSession = await this.db
			.select({
				userId: AuthSessionEntity.userId,
				sessionId: AuthSessionEntity.sessionId,
				secretHash: AuthSessionEntity.secretHash,
				lastVerifiedAt: AuthSessionEntity.lastVerifiedAt,
			})
			.from(AuthSessionEntity)
			.where(
				and(
					eq(AuthSessionEntity.sessionId, input.sessionId),
					isNull(AuthSessionEntity.deletedAt),
				),
			)
			.limit(1);
		// TODO: check if user is banned
		if (authSession.length === 0) {
			return "not-authorized";
		}

		const session = authSession[0];

		if (
			differenceInMilliseconds(new Date(), session.lastVerifiedAt) >=
			ms(inactiveSessionExpirationTime)
		) {
			await this.deleteAuthSession({ userId: session.userId });

			return "not-authorized";
		}

		return {
			userId: session.userId,
			sessionId: session.sessionId,
			secretHash: session.secretHash,
			lastVerifiedAt: session.lastVerifiedAt,
		};
	}

	async resetPassword(
		userId: UserId,
		input: v.InferOutput<typeof ResetPasswordRequestSchema>,
	) {
		await this.verifyOtp({
			otp: input.otp,
			userId,
			scope: OtpScopes.RESET_PASSWORD,
		});

		const passwordHash = await hashPassword(input.password);

		await this.usersService.updateUser({
			userId,
			user: { password: passwordHash },
		});
	}

	async verifyEmail(
		userId: UserId,
		input: v.InferOutput<typeof VerifyEmailRequestSchema>,
	) {
		await this.verifyOtp({
			otp: input.otp,
			userId,
			scope: OtpScopes.EMAIL_VERIFICATION,
		});

		await this.usersService.updateUser({
			userId,
			user: { emailVerified: true },
		});

		return await this.createAuthSession({
			userId: userId,
		});
	}

	private async verifyOtp(input: {
		otp: string;
		userId: UserId;
		scope: OtpScopes;
	}) {
		const otpResult = await this.db
			.select({
				id: OtpVerificationEntity.id,
				hash: OtpVerificationEntity.hash,
				createdAt: OtpVerificationEntity.createdAt,
			})
			.from(OtpVerificationEntity)
			.where(
				and(
					eq(OtpVerificationEntity.userId, input.userId),
					eq(OtpVerificationEntity.scope, input.scope),
				),
			)
			.limit(1)
			.orderBy(desc(OtpVerificationEntity.createdAt));

		if (otpResult.length === 0) {
			throw new BadRequestError("Invalid OTP");
		}

		const otp = otpResult[0];

		if (!constantTimeEqual(otp.hash, await hashSecret(input.otp))) {
			throw new BadRequestError("OTP expired");
		}

		if (
			differenceInMilliseconds(new Date(), otp.createdAt) >=
			ms(OTP_EXPIRATION_TIME)
		) {
			throw new BadRequestError("OTP expired");
		}

		await this.db
			.delete(OtpVerificationEntity)
			.where(eq(OtpVerificationEntity.id, otp.id));
	}

	private async createOtp(input: { userId: UserId; scope: OtpScopes }) {
		const otp = this.randomService.generateSecureRandomNumber({
			length: OTP_LENGTH,
		});

		await this.db
			.delete(OtpVerificationEntity)
			.where(
				and(
					eq(OtpVerificationEntity.userId, input.userId),
					eq(OtpVerificationEntity.scope, input.scope),
				),
			);

		const otpHash = await hashSecret(String(otp));

		await this.db.insert(OtpVerificationEntity).values({
			userId: input.userId,
			hash: otpHash,
			scope: input.scope,
		});

		return otp;
	}

	async getAuthenticatedUser(input: { userId: UserId }) {
		return await this.usersService.getFieldsFromUserIdOrFail({
			userId: input.userId,
			fields: ["firstName", "lastName", "id", "image", "email"],
		});
	}

	async signOut(input: { userId: UserId; authCookie: string }) {
		const validationResult = await this.validateAuthSessionTokenFromCookie(
			input.authCookie,
		);

		if (validationResult === "not-authorized") {
			return "not-authorized";
		}

		const { sessionId } = validationResult;

		await this.cacheService.delete({
			namespace: "auth-sessions",
			key: sessionId,
		});

		await this.deleteAuthSession({ userId: input.userId });
	}

	private async deleteAuthSession(input: { userId: UserId }) {
		return await this.db
			.update(AuthSessionEntity)
			.set({ deletedAt: new Date() })
			.where(
				and(
					eq(AuthSessionEntity.userId, input.userId),
					isNull(AuthSessionEntity.deletedAt),
				),
			);
	}

	async changePassword(
		userId: UserId,
		input: v.InferOutput<typeof ChangePasswordRequestSchema>,
	) {
		const user = await this.usersService.getFieldsFromUserIdOrFail({
			userId: userId,
			fields: ["password"],
		});

		const isValidPassword = await verifyPassword({
			password: input.currentPassword,
			hash: user.password ?? "",
		});

		if (!isValidPassword) {
			throw new BadRequestError("Invalid password");
		}

		const newPasswordHash = await hashPassword(input.newPassword);

		await this.usersService.updateUser({
			userId: userId,
			user: { password: newPasswordHash },
		});
	}

	async resendVerificationEmail(userId: UserId) {
		const user = await this.usersService.getFieldsFromUserIdOrFail({
			userId,
			fields: ["firstName", "email"],
		});

		const otp = await this.createOtp({
			userId,
			scope: OtpScopes.EMAIL_VERIFICATION,
		});

		await this.mailService.send({
			to: user.email,
			params: { otp: otp, firstName: user.firstName },
			type: "verification",
		});

		return {
			userId,
		};
	}

	async sendPasswordResetEmail(input: { email: string }) {
		const userId = await this.usersService.getUserIdFromField({
			field: "email",
			value: input.email,
		});

		if (userId === "null") {
			return {
				userId: randomService.generateSecureRandomNumber({
					length: 6,
				}) as UserId,
			};
		}

		const user = await this.usersService.getFieldsFromUserIdOrFail({
			userId,
			fields: ["firstName"],
		});

		const otp = await this.createOtp({
			userId,
			scope: OtpScopes.RESET_PASSWORD,
		});

		await this.mailService.send({
			to: input.email,
			params: { otp: otp, firstName: user.firstName },
			type: "passwordReset",
		});

		return {
			userId,
		};
	}

	// async socialSignIn(input: z4.infer<typeof SocialLoginRequestSchema>) {
	// 	const socialUser = await SocialProviderTokenVerificationConfig[
	// 		input.provider
	// 	].fn(input.accessToken);

	// 	const existingUserId = await this.usersService.getUserIdFromFieldOrNull({
	// 		field: "email",
	// 		value: socialUser.email,
	// 	});

	// 	const userId = existingUserId ?? (await this.createSocialUser(socialUser));

	// 	const session = await this.createAuthSession({
	// 		userId,
	// 	});
	// 	return { ...session, isNewUser: !existingUserId };
	// }

	// async verifyGoogleToken(accessToken: string) {
	// 	const ticket = await this.googleOauthClient.verifyIdToken({
	// 		idToken: accessToken,
	// 		audience: envVariables.GOOGLE_AUTH.AUDIENCE.split(","),
	// 	});

	// 	const payload = ticket.getPayload();

	// 	if (!payload) {
	// 		throw new ORPCError("UNAUTHORIZED", {
	// 			message: "Invalid Google payload",
	// 		});
	// 	}

	// 	return {
	// 		email: payload.email ?? "",
	// 		name: payload.name ?? "",
	// 		image: payload.picture ?? "",
	// 		providerId: "google",
	// 	};
	// }

	// async verifyFacebookToken(accessToken: string) {
	// 		const data: {
	// 			email: string;
	// 			name: string;
	// 			picture?: { data: { url: string } };
	// 		} = yield* Effect.tryPromise({
	// 			try: () =>
	// 				fetch(
	// 					`https://graph.facebook.com/me?fields=id,name,email,picture&access_token=${accessToken}`,
	// 				).then((res) => {
	// 					if (!res.ok) {
	// 						throw new Error("Invalid Facebook token");
	// 					}
	// 					return res.json();
	// 				}),
	// 			catch: () =>
	// 				new UnauthorizedError({ message: "Invalid Facebook token" }),
	// 		});

	// 		return {
	// 			email: data.email,
	// 			name: data.name,
	// 			image: data.picture?.data.url,
	// 			providerId: "facebook",
	// 		};
	// 	}

	// SocialProviderTokenVerificationConfig = {
	// 	[SocialProviders.GOOGLE]: { fn: this.verifyGoogleToken },
	// 	[SocialProviders.FACEBOOK]: { fn: this.verifyFacebookToken },
	// };

	async createSocialUser(input: {
		email: string;
		name: string;
		image?: string;
		providerId: string;
	}) {
		const userId = await this.usersService.createUser({
			email: input.email.toLowerCase(),
			normalizedEmail: normalizeEmail(input.email) || "",
			firstName: input.name,
			lastName: input.name,
			password: "",
			// providerId: input.providerId,
			image: input.image,
			emailVerified: true,
		});

		return userId;
	}
}

export const authService = new AuthService(
	db,
	cacheService,
	usersService,
	mailService,
	randomService,
);
