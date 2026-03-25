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
import { AUTH_COOKIE_NAME } from "./constants";

export const authShopController = new Elysia({
	prefix: "/auth",
})
	.post(
		"/signin",
		async ({ body, cookie: { [AUTH_COOKIE_NAME]: authCookie } }) => {
			const token = await IdentityModule.services.auth.signin(body);
			if (token === "not_verified") {
				throw new BadRequestError("Account not verified");
			}

			authCookie.set({
				value: token.token,
				httpOnly: true,
				// domain:
			});

			return token;
		},
		{
			body: LoginRequestSchema,
		},
	)
	.post(
		"/signup",
		async ({ body }) => {
			await IdentityModule.services.auth.signup(body);
		},
		{
			body: RegisterRequestSchema,
		},
	)
	.post(
		"/verify-email",
		async ({ body, cookie: { [AUTH_COOKIE_NAME]: authCookie } }) => {
			const token = await IdentityModule.services.auth.verifyEmail(body);

			authCookie.set({
				value: token.token,
				httpOnly: true,
				// domain:
			});

			// cookie
			return token;
		},
		{
			body: VerifyEmailRequestSchema,
		},
	)

	.post(
		"/reset-password",
		async ({ body }) => {
			await IdentityModule.services.auth.resetPassword(body);
		},
		{
			body: ResetPasswordRequestSchema,
		},
	)
	.post(
		"/send-reset-password",
		async ({ body }) => {
			await IdentityModule.services.auth.sendPasswordResetEmail(body);
		},
		{
			body: SendPasswordResetEmailRequestSchema,
		},
	)
	.post(
		"/resend-verification-email",
		async ({ body }) => {
			await IdentityModule.services.auth.resendVerificationEmail(body);
		},
		{
			body: ResendVerificationEmailRequestSchema,
		},
	)
	.use(authenticatedUserMiddleware)
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
