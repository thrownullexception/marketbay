import { eq, type InferSelectModel } from "drizzle-orm";
import * as v from "valibot";
import type {
	CreateStoreRequestSchema,
} from "@/schemas/store";
import { StoreRole } from "@/schemas/store-role";
import { type Database, db } from "@/server/database";
import { withPagination } from "@/server/database/pagination";
import type { UserId } from "@/server/modules/identity/users/types";
import { NotFoundRequestError } from "@/server/shared/errors";
import { type StoreTeamMembersService, storeTeamMembersService } from "../store-team-members/service";
import { StoreEntity } from "./entity";
import type { StoreId } from "./types";

const CACHE_PREFIX = "stores";

const CACHE_TAG = {
	SHORT_DETAILS: (storeId: StoreId) =>
		`${CACHE_PREFIX}:short_details:${storeId}`,
	FULL_DETAILS: (storeId: StoreId) => `${CACHE_PREFIX}:full_details:${storeId}`,
};

export class StoresService {
	constructor(
		private readonly db: Database,
		private readonly storeTeamMembersService: StoreTeamMembersService,
	) {}

	async getStoresList() {
		return await withPagination(this.db.select().from(StoreEntity).$dynamic(), {
			page: 1,
			take: 10,
		});
	}

	async getUserStores(userId: UserId) {
		const myStores = await this.storeTeamMembersService.getMyStores(userId);

		const storeDetails = await Promise.all(
			myStores.map(async (store) => {
				const foo = await this.getShortDetails(store.storeId);
				return { ...foo, roleId: store.roleId };
			}),
		);

		return storeDetails;
	}

	async createStore(
		input: v.InferInput<typeof CreateStoreRequestSchema>,
		userId: UserId,
	) {
		const store = await this.db
			.insert(StoreEntity)
			.values({
				name: "",
				slug: input.slug,
				tagline: input.tagline,
				description: input.description,
				logoUrl: input.logoUrl,
				coverUrl: input.coverUrl,
				city: input.city,
				state: input.state,
				country: input.country,
				zip: input.zip,
				email: input.email,
				phone: input.phone,
				website: input.website,
				instagram: input.instagram,
				twitter: input.twitter,
				// warranty: input.warranty,
				// returnPolicy: input.returnPolicy,
				primaryCategoryId: v.parse(CategoryId,input.primaryCategoryId),
				secondaryCategoryId: v.parse(CategoryId, input.secondaryCategoryId),
				isVerified: false,
				legalBusinessName: "",

			})
			.returning({
				id: StoreEntity.id,
			});

            await this.storeTeamMembersService.createStoreMember({
                storeId: store[0].id,
                userId: userId,
                roleId: StoreRole.Owner,
            });

		return store[0].id;
	}

	async getShortDetails(storeId: StoreId) {
		const store = (
			await this.db
				.select({
					id: StoreEntity.id,
					name: StoreEntity.name,
					slug: StoreEntity.slug,
					logoUrl: StoreEntity.logoUrl,
					coverUrl: StoreEntity.coverUrl,
					status: StoreEntity.status,
					primaryCategoryId: StoreEntity.primaryCategoryId,
					secondaryCategoryId: StoreEntity.secondaryCategoryId,
					avgRating: StoreEntity.avgRating,
					reviewCount: StoreEntity.reviewCount,
					totalSales: StoreEntity.totalSales,
					isVerified: StoreEntity.isVerified,
				})
				.from(StoreEntity)
				.where(eq(StoreEntity.id, storeId))
				.limit(1)
				.$withCache({
					tag: CACHE_TAG.SHORT_DETAILS(storeId),
				})
		)[0];

		if (!store) {
			throw new NotFoundRequestError("Store not found", {
				storeId: storeId,
			});
		}

		return store;
	}

	async getFullDetails(storeId: StoreId) {
		const store = (
			await this.db
				.select({
					id: StoreEntity.id,
					name: StoreEntity.name,
					slug: StoreEntity.slug,
					logoUrl: StoreEntity.logoUrl,
					coverUrl: StoreEntity.coverUrl,
					tagline: StoreEntity.tagline,
					description: StoreEntity.description,
					status: StoreEntity.status,
					primaryCategoryId: StoreEntity.primaryCategoryId,
					secondaryCategoryId: StoreEntity.secondaryCategoryId,
					avgRating: StoreEntity.avgRating,
					reviewCount: StoreEntity.reviewCount,
					totalSales: StoreEntity.totalSales,
					isVerified: StoreEntity.isVerified,
					email: StoreEntity.email,
					phone: StoreEntity.phone,
					website: StoreEntity.website,
					instagram: StoreEntity.instagram,
					twitter: StoreEntity.twitter,
				})
				.from(StoreEntity)
				.where(eq(StoreEntity.id, storeId))
				.limit(1)
				.$withCache({
					tag: CACHE_TAG.FULL_DETAILS(storeId),
				})
		)[0];

		if (!store) {
			throw new NotFoundRequestError("Store not found", {
				storeId: storeId,
			});
		}

		return store;
	}

	async updateStore(input: {
		storeId: StoreId;
		store: Partial<InferSelectModel<typeof StoreEntity>>;
	}) {
		await this.db
			.update(StoreEntity)
			.set(input.store)
			.where(eq(StoreEntity.id, input.storeId));

		await this.db.$cache.invalidate({
			tags: [
				CACHE_TAG.SHORT_DETAILS(input.storeId),
				CACHE_TAG.FULL_DETAILS(input.storeId),
			],
		});
	}
}

export const storesService = new StoresService(db, storeTeamMembersService);