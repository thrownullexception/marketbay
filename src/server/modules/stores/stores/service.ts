import { and, eq, type InferSelectModel, inArray } from "drizzle-orm";
import type * as v from "valibot";
import { type CreateStoreRequestSchema, StoreStatus } from "@/schemas/store";
import { StoreRole } from "@/schemas/store-role";
import { type Database, db } from "@/server/database";
import { withPagination } from "@/server/database/pagination";
import type { UserId } from "@/server/modules/identity/users/types";
import { NotFoundRequestError } from "@/server/shared/errors";
import {
	type StoreTeamMembersService,
	storeTeamMembersService,
} from "../store-team-members/service";
import { StoreEntity } from "./entity";
import type { StoreId } from "./types";

const CACHE_PREFIX = "stores";

const CACHE_TAG = {
	DETAILS: (storeId: StoreId) => `${CACHE_PREFIX}:de:${storeId}`,
};

export class StoresService {
	constructor(
		private readonly db: Database,
		private readonly storeTeamMembersService: StoreTeamMembersService,
	) {}

	async getStoresList() {
		const stores = await withPagination(
			this.db
				.select({
					id: StoreEntity.id,
				})
				.from(StoreEntity)
				.where(
					inArray(StoreEntity.status, [
						StoreStatus.Active,
						StoreStatus.InActive,
					]),
				)
				.$dynamic(),
			{
				page: 1,
				take: 10,
			},
		);

		return await Promise.all(
			stores.map(async (store) => {
				return await this.getFullDetails(store.id);
			}),
		);
	}

	async getUserStores(userId: UserId) {
		const myStores = await this.storeTeamMembersService.getMyStores(userId);

		const storeDetails = await Promise.all(
			myStores.map(async (store) => {
				const foo = await this.getFullDetails(store.storeId);
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
				logoUrl: "input.logoUrl TODO",
				coverUrl: "input.coverUrl TODO",
				city: input.city,
				state: input.state,
				country: input.country,
				zip: input.zip,
				email: input.email,
				street: input.street,
				phone: input.phone,
				website: input.website,
				instagram: input.instagram,
				twitter: input.twitter,
				// warranty: input.warranty,
				// returnPolicy: input.returnPolicy,
				primaryCategoryId: input.primaryCategoryId,
				secondaryCategoryId: input.secondaryCategoryId,
				isVerified: false,
				legalBusinessName: "",
			})
			.returning({
				id: StoreEntity.id,
			});

		// await this.storeTeamMembersService.createStoreMember({
		// 	storeId: store[0].id,
		// 	userId: userId,
		// 	roleId: StoreRole.Owner,
		// });

		return store[0].id;
	}

	async getStoreIdBySlug(slug: string) {
		const store = (
			await this.db
				.select({
					id: StoreEntity.id,
				})
				.from(StoreEntity)
				.where(eq(StoreEntity.slug, slug))
				.limit(1)
		)[0];

		if (!store) {
			throw new NotFoundRequestError("Store not found", {
				storeSlug: slug,
			});
		}
		return store.id;
	}

	async getFullDetails(storeId: StoreId) {
		const store = (
			await this.db
				.select()
				.from(StoreEntity)
				.where(
					and(
						eq(StoreEntity.id, storeId),
						inArray(StoreEntity.status, [
							StoreStatus.Active,
							StoreStatus.InActive,
						]),
					),
				)
				.limit(1)
				.$withCache({
					tag: CACHE_TAG.DETAILS(storeId),
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
			tags: [CACHE_TAG.DETAILS(input.storeId)],
		});
	}
}

export const storesService = new StoresService(db, storeTeamMembersService);
