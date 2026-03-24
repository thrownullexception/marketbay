import * as v from "valibot";
import { Categories } from "./category";

export enum StoreStatus {
	Active = "active",
	InActive = "in-active",
	Suspended = "suspended",
	Closed = "closed",
}

export const CreateStoreRequestSchema = v.object({
	name: v.pipe(
		v.string(),
		v.minLength(1),
		v.maxLength(32),
		v.regex(/[A-za-z0-9-_ ]+$/, "Special characters are not allowed"),
	),
	slug: v.pipe(
		v.string(),
		v.minLength(1),
		v.maxLength(32),
		v.regex(
			v.SLUG_REGEX,
			"Only lowercase letters, numbers, and hyphens are allowed",
		),
	),
	tagline: v.optional(v.pipe(v.string(), v.maxLength(60))),
	description: v.optional(v.pipe(v.string(), v.maxLength(500))),
	primaryCategoryId: v.pipe(v.enum(Categories)),
	secondaryCategoryId: v.optional(v.enum(Categories)),
	state: v.pipe(v.string(), v.minLength(1)),
	city: v.pipe(v.string()),
	street: v.pipe(v.string()),
	zip: v.pipe(v.string(), v.maxLength(7)),
	country: v.pipe(v.string()),
	// logo: v.pipe(v.file(), v.maxSize(2 * 1024 * 1024)),
	// coverImage: v.pipe(v.file(), v.maxSize(2 * 1024 * 1024)), // TODO: add to 5MB
	email: v.pipe(v.string(), v.minLength(1), v.email()),
	phone: v.pipe(v.string(), v.minLength(1)),
	website: v.union([v.literal(""), v.pipe(v.string(), v.url())]),
	instagram: v.union([
		v.literal(""),
		v.pipe(
			v.string(),
			v.regex(
				v.SLUG_REGEX,
				"Only lowercase letters, numbers, and hyphens are allowed",
			),
		),
	]),
	twitter: v.union([
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

