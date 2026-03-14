import * as v from "valibot";
import { emailSchema, nameSchema, nonEmptyStringSchema } from "@/schemas/base";

export const OTP_LENGTH = 6;

const otpSchema = v.pipe(
        v.string(),
        v.minLength(OTP_LENGTH),
        v.check((value) => /[0-9]/.test(value), `Valid OTPs contain only numbers`),
    )

export const AuthenticatedUserResponseSchema = v.object({
});

const passwordInsertSchema = v.pipe(
        v.string(),
        v.minLength(8),
        v.maxLength(32),
        v.check((value) => /[A-Z]/.test(value), "Must contain an uppercase letter"),
        v.check((value) => /[a-z]/.test(value), "Must contain a lowercase letter"),
        v.check((value) => /\d/.test(value), "Must contain a number"),
        v.check((value) => /[^A-Za-z0-9]/.test(value), "Must contain a symbol"),
    )

export const LoginRequestSchema = v.object({
    email: emailSchema,
    password: v.pipe(v.string(), v.minLength(32)),
    remember: v.optional(v.boolean()),
});

export const SignInResponseSchema = v.object({
	token: nonEmptyStringSchema
});

export const RegisterRequestSchema = v.object({
    firstName: nameSchema,
    lastName: nameSchema,
    email: emailSchema,
    password: passwordInsertSchema,
    agreed: v.pipe(
        v.boolean(),
        v.check((value) => value, "You must agree to the terms and privacy policy"),
    ),
});

export const ResendVerificationEmailRequestSchema = v.object({
	email: emailSchema,
});

export const SendPasswordResetEmailRequestSchema = v.object({
	email: emailSchema,
});

export const ChangePasswordRequestSchema = v.object({
	currentPassword: nonEmptyStringSchema,
	newPassword: passwordInsertSchema,
});

export const ResetPasswordRequestSchema = v.object({
	email: emailSchema,
	otp: otpSchema,
	password: passwordInsertSchema,
});

export const VerifyEmailRequestSchema = v.object({
	email: emailSchema,
	otp: otpSchema,
});

export enum SocialProviders {
	GOOGLE = "google",
	FACEBOOK = "facebook",
}

export const SocialSignInRequestSchema = v.object({
	provider: v.enum(SocialProviders),
	accessToken: nonEmptyStringSchema
});

export const SocialSignInResponseSchema = v.object({
	token: nonEmptyStringSchema,
	isNewUser: v.boolean(),
});
