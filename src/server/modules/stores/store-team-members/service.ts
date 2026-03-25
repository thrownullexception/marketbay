import { and, eq, type InferInsertModel } from "drizzle-orm";
import { type Database, db } from "@/server/database";
import type { UserId } from "@/server/modules/identity/users/types";
import type { StoreId } from "@/server/modules/stores/stores/types";
import type { StoreRoleId } from "../store-roles/types";
import { StoreTeamMemberEntity } from "./entity";

const CACHE_PREFIX = "store_team_members";

const CACHE_TAG = {
	STORE: (storeId: StoreId) => `${CACHE_PREFIX}:store:${storeId}`,
	USER: (userId: UserId) => `${CACHE_PREFIX}:user:${userId}`,
};

export class StoreTeamMembersService {
	constructor(private readonly db: Database) {}

	async createStoreMember(
		input: InferInsertModel<typeof StoreTeamMemberEntity>,
	) {
		const storeTeamMember = await this.db
			.insert(StoreTeamMemberEntity)
			.values(input)
			.returning({
				id: StoreTeamMemberEntity.id,
			});

		await this.db.$cache.invalidate({
			tags: [CACHE_TAG.STORE(input.storeId), CACHE_TAG.USER(input.userId)],
		});

		return storeTeamMember[0].id;
	}

	async removeStoreMember(input: { storeId: StoreId; userId: UserId }) {
		await this.db
			.delete(StoreTeamMemberEntity)
			.where(
				and(
					eq(StoreTeamMemberEntity.storeId, input.storeId),
					eq(StoreTeamMemberEntity.userId, input.userId),
				),
			);

		await this.db.$cache.invalidate({
			tags: [CACHE_TAG.STORE(input.storeId), CACHE_TAG.USER(input.userId)],
		});
	}

	async updateStoreMember(input: {
		storeId: StoreId;
		userId: UserId;
		roleId: StoreRoleId;
	}) {
		await this.db
			.update(StoreTeamMemberEntity)
			.set({ roleId: input.roleId })
			.where(
				and(
					eq(StoreTeamMemberEntity.storeId, input.storeId),
					eq(StoreTeamMemberEntity.userId, input.userId),
				),
			);

		await this.db.$cache.invalidate({
			tags: [CACHE_TAG.STORE(input.storeId), CACHE_TAG.USER(input.userId)],
		});
	}

	async getMyStores(userId: UserId) {
		return await this.db
			.select({
				storeId: StoreTeamMemberEntity.storeId,
				roleId: StoreTeamMemberEntity.roleId,
			})
			.from(StoreTeamMemberEntity)
			.where(eq(StoreTeamMemberEntity.userId, userId))
			.$withCache({
                tag: CACHE_TAG.USER(userId),
			});
	}

	async canAccessStore(userId: UserId, storeId: StoreId){
		const myStores = await this.getMyStores(userId);

		const store = myStores.find(store => store.storeId === storeId);

		if(store){
			return { roleId: store.roleId }
		}

		return "can-not-access-store"
	}

	async getStoreMembers(storeId: StoreId) {
		return await this.db
			.select({
				userId: StoreTeamMemberEntity.userId,
				roleId: StoreTeamMemberEntity.roleId,
			})
			.from(StoreTeamMemberEntity)
			.where(eq(StoreTeamMemberEntity.storeId, storeId))
			.$withCache({
				tag: CACHE_TAG.STORE(storeId),
			});
	}
}

export const storeTeamMembersService = new StoreTeamMembersService(db);
