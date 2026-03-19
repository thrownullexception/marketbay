import * as v from "valibot";

const OtpVerificationIdSchema = v.pipe(
	v.number(),
	v.brand("OtpVerificationId"),
);
export const OtpVerificationId = v.custom<OtpVerificationId>((val) => {
	return v.safeParse(OtpVerificationIdSchema, val).success;
});
export type OtpVerificationId = v.InferOutput<typeof OtpVerificationIdSchema>;
