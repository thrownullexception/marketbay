import { HashIdTransformer } from "@/server/services/hashid";

export enum OtpScopes {
	RESET_PASSWORD = "reset-password",
	EMAIL_VERIFICATION = "email-verification",
}

export const OtpVerificationIdTransformer = new HashIdTransformer(
	"OtpVerificationId",
);

export type OtpVerificationId = ReturnType<
	typeof OtpVerificationIdTransformer.toDbId
>;
export type OtpVerificationIdHash = ReturnType<
	typeof OtpVerificationIdTransformer.toPublicHash
>;
