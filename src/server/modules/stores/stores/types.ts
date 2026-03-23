import type { StoreStatus } from "@/schemas/store";
import { HashIdTransformer } from "@/server/services/hashid";
import type { CategoryId } from "../../catalog/categories/types";

export const StoreIdTransformer = new HashIdTransformer("StoreId");

export type StoreId = ReturnType<typeof StoreIdTransformer.toDbId>;
export type StoreIdHash = ReturnType<typeof StoreIdTransformer.toPublicHash>;

export class StoreListItemTransformer {
	id: StoreIdHash;
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
		 store: {
			id: StoreId;
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
		this.id = StoreIdTransformer.toPublicHash(store.id)
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
