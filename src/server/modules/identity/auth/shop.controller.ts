import { Elysia } from "elysia";
import {
	ChangePasswordRequestSchema,
	LoginRequestSchema,
	RegisterRequestSchema,
	ResendVerificationEmailRequestSchema,
	ResetPasswordRequestSchema,
	SendPasswordResetEmailRequestSchema,
	VerifyEmailRequestSchema,
} from "@/schemas/auth";
import { authenticatedUserMiddleware } from "@/server/middlewares/auth";
import { BadRequestError } from "@/server/shared/errors";
import { IdentityModule } from "..";
import { UserIdTransformer } from "../users/types";
import {
	AUTH_COOKIE_NAME,
	COOKIE_OPTIONS,
	OTP_EXPIRATION_TIME,
	UN_AUTHENTICATED_USER_COOKIE_NAME,
} from "./constants";
import { AuthenticatedUserTransformer } from "./types";

export const authShopController = new Elysia({
	prefix: "/auth",
})
	.post(
		"/signup",
		async ({
			body,
			cookie: { [UN_AUTHENTICATED_USER_COOKIE_NAME]: userHashCookie },
		}) => {
			const user = await IdentityModule.services.auth.signup(body);

			const userHash = UserIdTransformer.toPublicHash(user.userId);

			userHashCookie.set(
				COOKIE_OPTIONS({ value: userHash, maxAge: OTP_EXPIRATION_TIME }),
			);

			return {
				userHash,
			};
		},
		{
			body: RegisterRequestSchema,
		},
	)
	.post(
		"/signin",
		async ({
			body,
			cookie: {
				[AUTH_COOKIE_NAME]: authCookie,
				[UN_AUTHENTICATED_USER_COOKIE_NAME]: userHashCookie,
			},
		}) => {
			const response = await IdentityModule.services.auth.signin(body);
			if (response.type === "not_verified") {
				const userHash = UserIdTransformer.toPublicHash(response.userId);
				userHashCookie.set(
					COOKIE_OPTIONS({ value: userHash, maxAge: OTP_EXPIRATION_TIME }),
				);
				return {
					type: "not_verified",
					userHash,
				} as const;
			}

			authCookie.set(COOKIE_OPTIONS({ value: response.token }));

			return {
				type: "authenticated",
				token: response.token,
			} as const;
		},
		{
			body: LoginRequestSchema,
		},
	)
	.post(
		"/verify-email",
		async ({
			body,
			cookie: {
				[AUTH_COOKIE_NAME]: authCookie,
				[UN_AUTHENTICATED_USER_COOKIE_NAME]: userHashCookie,
			},
		}) => {
			if (!userHashCookie.value) {
				throw new BadRequestError(
					"User not provided, Please signin and try again",
				);
			}
			const userId = UserIdTransformer.toDbId(String(userHashCookie.value));
			const token = await IdentityModule.services.auth.verifyEmail(
				userId,
				body,
			);

			authCookie.set(COOKIE_OPTIONS({ value: token.token }));

			return token;
		},
		{
			body: VerifyEmailRequestSchema,
		},
	)
	.post(
		"/reset-password",
		async ({
			body,
			cookie: { [UN_AUTHENTICATED_USER_COOKIE_NAME]: userHashCookie },
		}) => {
			if (!userHashCookie.value) {
				throw new BadRequestError(
					"User not provided, Please reset your password and try again",
				);
			}
			const userId = UserIdTransformer.toDbId(String(userHashCookie.value));
			await IdentityModule.services.auth.resetPassword(userId, body);
		},
		{
			body: ResetPasswordRequestSchema,
		},
	)
	.post(
		"/send-reset-password",
		async ({
			body,
			cookie: { [UN_AUTHENTICATED_USER_COOKIE_NAME]: userHashCookie },
		}) => {
			const user =
				await IdentityModule.services.auth.sendPasswordResetEmail(body);

			const userHash = UserIdTransformer.toPublicHash(user.userId);

			userHashCookie.set(
				COOKIE_OPTIONS({ value: userHash, maxAge: OTP_EXPIRATION_TIME }),
			);

			return {
				userHash,
			};
		},
		{
			body: SendPasswordResetEmailRequestSchema,
		},
	)
	.post(
		"/resend-verification-email",
		async ({
			cookie: { [UN_AUTHENTICATED_USER_COOKIE_NAME]: userHashCookie },
		}) => {
			if (!userHashCookie.value) {
				throw new BadRequestError(
					"User not provided, Please signin and try again",
				);
			}
			const user = await IdentityModule.services.auth.resendVerificationEmail(
				UserIdTransformer.toDbId(userHashCookie.value as string),
			);

			const userHash = UserIdTransformer.toPublicHash(user.userId);

			userHashCookie.set(
				COOKIE_OPTIONS({ value: userHash, maxAge: OTP_EXPIRATION_TIME }),
			);

			return {
				userHash,
			};
		},
		{
			body: ResendVerificationEmailRequestSchema,
		}
	)
	.use(authenticatedUserMiddleware)
	.get("/me", async ({ authenticatedUserId }) => {
		const user =
			await IdentityModule.services.users.getFieldsFromUserIdOrFail({
				userId: authenticatedUserId,
				fields: ["firstName", "lastName"],
			});
		return {...new AuthenticatedUserTransformer({
			id: authenticatedUserId,
			firstName: user.firstName,
			lastName: user.lastName,
		})};
	})
	.post(
		"/change-password",
		async ({ authenticatedUserId, body }) => {
			await IdentityModule.services.auth.changePassword(
				authenticatedUserId,
				body,
			);
		},
		{
			body: ChangePasswordRequestSchema,
		},
	)
	.post("/signout", async ({ authenticatedUserId, cookie }) => {
		const authCookie = cookie[AUTH_COOKIE_NAME].value as string;

		delete cookie[AUTH_COOKIE_NAME];
		await IdentityModule.services.auth.signOut({
			userId: authenticatedUserId,
			authCookie,
		});
	});
