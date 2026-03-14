import { differenceInMilliseconds } from "date-fns";
import { and, desc, eq, isNull } from "drizzle-orm";
// import { OAuth2Client } from "google-auth-library";
import * as DisposableMailchecker from "mailchecker";
import ms from "ms";
import type * as v from "valibot";
import normalizeEmail from "validator/es/lib/normalizeEmail";
import type { Database } from "@/api/database";
import type { UsersService } from "@/api/modules/identity/users/service";
import type { CacheService } from "@/api/services/cache";
import type { MailService } from "@/api/services/mail";
import type { RandomService } from "@/api/services/random";
import { BadRequestError } from "@/api/shared/errors";
import {
	type LoginRequestSchema,
	OTP_LENGTH,
	type RegisterRequestSchema,
	type ResetPasswordRequestSchema,
	type VerifyEmailRequestSchema,
} from "@/shared/schemas/auth";
import type { UserId } from "@/shared/schemas/users";
import { AuthSessionEntity } from "../auth-session/entity";
import { OtpVerificationEntity } from "../otp-verifications/entity";
import { OtpScopes } from "../otp-verifications/types";
import {
	AUTH_COOKIE_NAME,
	IN_ACTIVE_SESSION_EXPIRATION_TIME,
	OTP_EXPIRATION_TIME,
	SESSION_UPDATE_AGE,
} from "./constants";
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

		const existingUserId = await this.usersService.getUserIdFromFieldOrNull({
			field: "normalizedEmail",
			value: normalizedEmail,
		});

		if (existingUserId) {
			throw new BadRequestError("Email already exists");
		}

		await this.usersService.createUser({
			email: input.email.toLowerCase(),
			normalizedEmail,
			firstName: input.firstName,
			lastName: input.lastName,
			password: hashedPassword,
		});

		const otp = await this.createOtp({
			email: input.email,
			scope: OtpScopes.EMAIL_VERIFICATION,
		});

		console.log("otp", otp);

		await this.mailService.send({
			to: input.email,
			params: { otp: otp, username: input.firstName },
			type: "verification",
		});
	}

	async signin(input: v.InferOutput<typeof LoginRequestSchema>) {
		const userId = await this.usersService.getUserIdFromFieldOrNull({
			field: "email",
			value: input.email.toLowerCase(),
		});

		if (!userId) {
			throw new BadRequestError("Invalid login credentials");
		}

		const user = await this.usersService.getFieldsFromUserIdOrDie({
			userId: userId,
			fields: ["password", "emailVerified", "id"],
		});

		if (!user.emailVerified) {
			return "not_verified";
		}

		const isValidPassword = await verifyPassword({
			password: input.password,
			hash: user.password ?? "",
		});

		if (!isValidPassword) {
			throw new BadRequestError("Invalid login credentials");
		}

		return await this.createAuthSession({
			userId: user.id,
		});
	}

	async createAuthSession(input: { userId: UserId }) {
		const sessionId = this.randomService.generateSecureRandomString({
			length: 24,
			input: "alphanumeric",
		});

		const secret = this.randomService.generateSecureRandomString({
			length: 24,
			input: "alphanumeric",
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

	async validateAuthSessionToken(input: {
		headers: Headers | undefined;
	}): Promise<
		| {
				userId: UserId;
		  }
		| "not-authorized"
	> {
		const validationResult =
			await this.validateAuthSessionTokenFromCookie(input);

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
					ms(SESSION_UPDATE_AGE)
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

	private async validateAuthSessionTokenFromCookie(input: {
		headers: Headers | undefined;
	}) {
		if (!input.headers) {
			return "not-authorized";
		}

		const cookieToken = input.headers.get(AUTH_COOKIE_NAME);

		if (!cookieToken) {
			return "not-authorized";
		}

		const tokenParts = cookieToken.split(".");

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

		if (authSession.length === 0) {
			return "not-authorized";
		}

		const session = authSession[0];

		if (
			differenceInMilliseconds(new Date(), session.lastVerifiedAt) >=
			ms(IN_ACTIVE_SESSION_EXPIRATION_TIME)
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

	async resetPassword(input: v.InferOutput<typeof ResetPasswordRequestSchema>) {
		await this.verifyOtp({
			otp: input.otp,
			email: input.email,
			scope: OtpScopes.RESET_PASSWORD,
		});

		const [userId, passwordHash] = await Promise.all([
			this.usersService.getUserIdFromFieldOrFail({
				field: "email",
				value: input.email,
			}),
			hashPassword(input.password),
		]);

		await this.usersService.updateUser({
			userId,
			user: { password: passwordHash },
		});
	}

	async verifyEmail(input: v.InferOutput<typeof VerifyEmailRequestSchema>) {
		await this.verifyOtp({
			otp: input.otp,
			email: input.email,
			scope: OtpScopes.EMAIL_VERIFICATION,
		});

		const userId = await this.usersService.getUserIdFromFieldOrFail({
			field: "email",
			value: input.email,
		});

		await this.usersService.updateUser({
			userId,
			user: { emailVerified: true },
		});

		return await this.createAuthSession({
			userId: userId,
		});
	}

	async verifyOtp(input: { otp: string; email: string; scope: OtpScopes }) {
		const otpResult = await this.db
			.select({
				id: OtpVerificationEntity.id,
				hash: OtpVerificationEntity.hash,
				createdAt: OtpVerificationEntity.createdAt,
			})
			.from(OtpVerificationEntity)
			.where(
				and(
					eq(OtpVerificationEntity.email, input.email),
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

	async createOtp(input: { email: string; scope: OtpScopes }) {
		const otp = this.randomService.generateSecureRandomString({
			length: OTP_LENGTH,
			input: "numeric",
		});

		await this.db
			.delete(OtpVerificationEntity)
			.where(
				and(
					eq(OtpVerificationEntity.email, input.email),
					eq(OtpVerificationEntity.scope, input.scope),
				),
			);

		const otpHash = await hashSecret(otp);

		await this.db.insert(OtpVerificationEntity).values({
			email: input.email,
			hash: otpHash,
			scope: input.scope,
		});

		return otp;
	}

	async getAuthenticatedUser(input: { userId: UserId }) {
		return await this.usersService.getFieldsFromUserIdOrDie({
			userId: input.userId,
			fields: ["firstName", "lastName", "id", "image", "email"],
		});
	}

	async signOut(input: { userId: UserId; headers: Headers | undefined }) {
		const validationResult = await this.validateAuthSessionTokenFromCookie({
			headers: input.headers,
		});

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

	async deleteAuthSession(input: { userId: UserId }) {
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

	async changePassword(input: {
		userId: UserId;
		currentPassword: string;
		newPassword: string;
	}) {
		const user = await this.usersService.getFieldsFromUserIdOrDie({
			userId: input.userId,
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
			userId: input.userId,
			user: { password: newPasswordHash },
		});
	}

	async resendVerificationEmail(input: { email: string }) {
		const userId = await this.usersService.getUserIdFromFieldOrNull({
			field: "email",
			value: input.email,
		});

		if (!userId) {
			return;
		}

		const otp = await this.createOtp({
			email: input.email,
			scope: OtpScopes.EMAIL_VERIFICATION,
		});

		await this.mailService.send({
			to: input.email,
			params: { otp: otp, username: input.email },
			type: "verification",
		});
	}

	async sendPasswordResetEmail(input: { email: string }) {
		const userId = this.usersService.getUserIdFromFieldOrNull({
			field: "email",
			value: input.email,
		});

		if (!userId) {
			return;
		}

		const otp = await this.createOtp({
			email: input.email,
			scope: OtpScopes.RESET_PASSWORD,
		});

		await this.mailService.send({
			to: input.email,
			params: { otp: otp, username: input.email },
			type: "passwordReset",
		});
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
