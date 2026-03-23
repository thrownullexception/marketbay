import { index, pgTable, unique } from "drizzle-orm/pg-core";
import { baseDbSchema } from "@/server/database/base-schema";
import { referencesUserEntity } from "../../identity/users/entity";
import { referencesStoreEntity } from "../stores/entity";
import { StoreFollowingIdTransformer } from "./types";

export const StoreFollowingEntity = pgTable(
	"store_followings",
	baseDbSchema(StoreFollowingIdTransformer.unoPrivate, {
		storeId: referencesStoreEntity("cascade").notNull(),
		userId: referencesUserEntity("cascade").notNull(),
	}),
	(t) => [unique().on(t.userId, t.storeId), index().on(t.storeId)],
);
