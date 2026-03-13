import * as v from "valibot";
import { emailSchema, longStringSchema } from "./strings";
// TODO use strings/schemas
export const CreateStoreRequestSchema = v.object({
	name: v.pipe(
		v.string(),
		v.minLength(1),
		v.regex(/[A-za-z0-9-_ ]+$/, "Special characters are not allowed"),
	),
	handle: v.pipe(
		v.string(),
		v.minLength(1),
		v.regex(
			v.SLUG_REGEX,
			"Only lowercase letters, numbers, and hyphens are allowed",
		),
	),
	description: longStringSchema,
	primaryCategory: v.pipe(v.string(), v.minLength(1)),
	state: v.pipe(v.string(), v.minLength(1)),
	city: v.pipe(v.string()),
	// logo: v.pipe(v.file(), v.maxSize(2 * 1024 * 1024)),
	// coverImage: v.pipe(v.file(), v.maxSize(2 * 1024 * 1024)), // TODO: add to 5MB
	businessEmail: emailSchema,
	phoneNumber: v.pipe(v.string(), v.minLength(1)),
	websiteURL: v.union([v.literal(""), v.pipe(v.string(), v.url())]),
	instagramURL: v.union([
		v.literal(""),
		v.pipe(
			v.string(),
			v.regex(
				v.SLUG_REGEX,
				"Only lowercase letters, numbers, and hyphens are allowed",
			),
		),
	]),
	xURL: v.union([
		v.literal(""),
		v.pipe(
			v.string(),
			v.regex(
				v.SLUG_REGEX,
				"Only lowercase letters, numbers, and hyphens are allowed",
			),
		),
	]),
	warranty: v.pipe(v.string()),
	returnPolicy: v.pipe(v.string()),
	agreed: v.pipe(
		v.boolean(),
		v.check((value) => value, "Required"),
	),
	// minimumOrderAmount: v.pipe(v.number(), v.min(0)),

	// freeShippingThreshold: v.pipe(v.number(), v.min(0)),
	// standardShippingDays: v.pipe(v.number(), v.min(0)),
	// expressShippingDays: v.pipe(v.number(), v.min(0)),
	// freeShipping: v.pipe(
	// 	v.boolean(),
	// 	v.transform((value) => value === true),
	// ),
	// standardShipping: v.pipe(
	// 	v.boolean(),
	// 	v.transform((value) => value === true),
	// ),
});
