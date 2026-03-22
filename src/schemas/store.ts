import * as v from "valibot";
import { encodeHashId } from "@/server/services/hashid";
import type { CategoryId } from "./category";

export const StoreIdSchema = v.pipe(v.number(), v.brand("StoreId"));
export const StoreId = v.custom<StoreId>((val) => {
	return v.safeParse(StoreIdSchema, val).success;
});
export type StoreId = v.InferOutput<typeof StoreIdSchema>;

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
	primaryCategoryId: v.pipe(v.string(), v.minLength(1)),
	secondaryCategoryId: v.optional(v.pipe(v.string())),
	state: v.pipe(v.string(), v.minLength(1)),
	city: v.pipe(v.string()),
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

export class StoreResponseTransformer {
	id: string;
	name: string;
	slug: string;
	logoUrl?: string | null;
	coverUrl?: string | null;
	status: StoreStatus;
	primaryCategoryId: CategoryId;
	secondaryCategoryId: CategoryId | null;
	avgRating: string;
	reviewCount: number;
	totalSales: number;
	isVerified: boolean;

	constructor(
		readonly store: {
			id: number;
			name: string;
			slug: string;
			logoUrl?: string | null;
			coverUrl?: string | null;
			status: StoreStatus;
			primaryCategoryId: CategoryId;
			secondaryCategoryId: CategoryId | null;
			avgRating: string;
			reviewCount: number;
			totalSales: number;
			isVerified: boolean;
		},
	) {
		this.id = encodeHashId(store.id);
		this.name = store.name;
		this.slug = store.slug;
		this.logoUrl = store.logoUrl;
		this.coverUrl = store.coverUrl;
		this.status = store.status;
		this.primaryCategoryId = store.primaryCategoryId;
		this.secondaryCategoryId = store.secondaryCategoryId;
		this.avgRating = store.avgRating;
		this.reviewCount = store.reviewCount;
		this.isVerified = store.isVerified;
		this.totalSales = store.totalSales;
	}
}
