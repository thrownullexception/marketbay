import * as v from "valibot";
import { createEntityId } from "@/api/database/create-id";

const OtpVerificationIdSchema = v.pipe(
	v.string(),
	v.cuid2(),
	v.brand("OtpVerificationId"),
);
export const OtpVerificationId: OtpVerificationId = v.parse(
	OtpVerificationIdSchema,
	createEntityId(),
);
export type OtpVerificationId = v.InferOutput<typeof OtpVerificationIdSchema>;
