import { pgTable, timestamp, unique } from "drizzle-orm/pg-core";
import { baseDbSchema } from "@/server/database/base-schema";
import { referencesUserEntity } from "../../identity/users/entity";
import { referencesStoreRoleEntity } from "../store-roles/entity";
import { referencesStoreEntity } from "../stores/entity";
import { StoreTeamMemberIdTransformer } from "./types";

export const StoreTeamMemberEntity = pgTable(
	"store_team_members",
	baseDbSchema(StoreTeamMemberIdTransformer.unoPrivate, {
		storeId: referencesStoreEntity("cascade").notNull(),
		userId: referencesUserEntity("cascade").notNull(),
		roleId: referencesStoreRoleEntity("restrict").notNull(),
		lastActive: timestamp().defaultNow(),
	}),
	(t) => [unique().on(t.userId, t.storeId)],
);
