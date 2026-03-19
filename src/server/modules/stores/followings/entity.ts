import {
	index,
	pgTable,
	unique,
} from "drizzle-orm/pg-core";
import { StoreFollowingId } from "@/schemas/store-following";
import { baseDbSchema } from "@/server/database/base-schema";
import { referencesUserEntity } from "../../identity/users/entity";
import { referencesStoreEntity } from "../stores/entity";

export const StoreFollowingEntity = pgTable(
	"store_followings",
	baseDbSchema(StoreFollowingId, {
		storeId: referencesStoreEntity("cascade").notNull(),
		userId: referencesUserEntity("cascade").notNull(),
	}),
	(t) => [unique().on(t.userId, t.storeId), index().on(t.storeId)],
);
