import { createEntityId } from "packages/api/database/create-id";
import * as v from "valibot";

const OtpVerificationIdSchema = v.pipe(
	v.string(),
	v.cuid2(),
	v.brand("OtpVerificationId"),
);
export const OtpVerificationId: OtpVerificationId = v.parse(OtpVerificationIdSchema, createEntityId());
export type OtpVerificationId = v.InferOutput<typeof OtpVerificationIdSchema>;
