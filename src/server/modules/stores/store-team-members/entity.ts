import { sql } from "drizzle-orm";
import { check, pgEnum, pgTable, timestamp, unique } from "drizzle-orm/pg-core";
import { StoreRole } from "@/schemas/store-role";
import { baseDbSchema } from "@/server/database/base-schema";
import { getEnumValues } from "@/server/database/enums";
import { referencesUserEntity } from "../../identity/users/entity";
import { referencesStoreRoleEntity } from "../store-roles/entity";
import { referencesStoreEntity } from "../stores/entity";
import { StoreTeamMemberIdTransformer } from "./types";

export const systemStoreRole = pgEnum("store_role", getEnumValues(StoreRole));

export const StoreTeamMemberEntity = pgTable(
	"store_team_members",
	baseDbSchema(StoreTeamMemberIdTransformer.unoPrivate, {
		storeId: referencesStoreEntity("cascade").notNull(),
		userId: referencesUserEntity("cascade").notNull(),
		roleId: referencesStoreRoleEntity("restrict"),
		systemRole: systemStoreRole(),
		lastActive: timestamp().defaultNow(),
	}),
	(t) => [
		unique().on(t.userId, t.storeId),
		check(
			"team_member_has_a_role",
			sql`role_id IS NOT NULL OR system_role IS NOT NULL`,
		),
	],
);
