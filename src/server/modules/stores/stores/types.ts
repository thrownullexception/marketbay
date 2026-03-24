import type { Categories } from "@/schemas/category";
import { HashIdTransformer } from "@/server/services/hashid";

export const StoreIdTransformer = new HashIdTransformer("StoreId");

export type StoreId = ReturnType<typeof StoreIdTransformer.toDbId>;
export type StoreIdHash = ReturnType<typeof StoreIdTransformer.toPublicHash>;

interface StoreListItemInput {
	id: StoreId;
	name: string;
	slug: string;
	logoUrl?: string | null;
	coverUrl?: string | null;
	isVerified: boolean;
	primaryCategoryId: Categories;
	secondaryCategoryId: Categories | null;
	tagline: string | null;
	avgRating: string;
	productsCount: number;
	ratingsCount: number;
	followersCount: number;
}

export class StoreListItemTransformer {
	id: StoreIdHash;
	name: string;
	slug: string;
	logoUrl?: string | null;
	coverUrl?: string | null;
	isVerified: boolean;
	primaryCategoryId: Categories;
	secondaryCategoryId: Categories | null;
	tagline: string | null;
	avgRating: string;
	ratingsCount: number;
	productsCount: number;
	followersCount: number;

	constructor(store: StoreListItemInput) {
		this.id = StoreIdTransformer.toPublicHash(store.id);
		this.name = store.name;
		this.slug = store.slug;
		this.logoUrl = store.logoUrl;
		this.coverUrl = store.coverUrl;
		this.tagline = store.tagline;
		this.isVerified = store.isVerified;
		this.primaryCategoryId = store.primaryCategoryId;
		this.secondaryCategoryId = store.secondaryCategoryId;
		this.avgRating = store.avgRating;
		this.ratingsCount = store.ratingsCount;
		this.productsCount = store.productsCount;
		this.followersCount = store.followersCount;
	}
}

export class StoreDetailsTransformer extends StoreListItemTransformer {
	email: string | null;
	phone: string | null;
	website: string | null;
	instagram: string | null;
	twitter: string | null;
	description: string | null;
	createdAt: Date;

	constructor(store: StoreListItemInput & {
		email: string | null;
		phone: string | null;
		website: string | null;
		instagram: string | null;
		twitter: string | null;
		description: string | null;
		createdAt: Date;
	}) {
		super(store);
		this.email = store.email;
		this.phone = store.phone;
		this.website = store.website;
		this.instagram = store.instagram;
		this.twitter = store.twitter;
		this.description = store.description;
		this.createdAt = store.createdAt;
	}
}
