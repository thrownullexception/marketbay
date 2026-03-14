import * as v from "valibot";

const OtpVerificationIdSchema = v.pipe(
	v.string(),
	v.cuid2(),
	v.brand("OtpVerificationId"),
);
export const OtpVerificationId = v.custom<OtpVerificationId>((val) => {
	return v.safeParse(OtpVerificationIdSchema, val).success;
});
export type OtpVerificationId = v.InferOutput<typeof OtpVerificationIdSchema>;
