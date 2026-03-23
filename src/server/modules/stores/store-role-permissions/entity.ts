import { pgTable, unique } from "drizzle-orm/pg-core";
import { baseDbSchema } from "@/server/database/base-schema";
import { referencesStorePermissionEntity } from "../store-permissions/entity";
import { referencesStoreRoleEntity } from "../store-roles/entity";
import { StoreRolePermissionIdTransformer } from "./types";

export const StoreRolePermissionsEntity = pgTable(
	"store_role_permissions",
	baseDbSchema(StoreRolePermissionIdTransformer.unoPrivate, {
		roleId: referencesStoreRoleEntity("cascade").notNull(),
		permissionId: referencesStorePermissionEntity("cascade").notNull(),
	}),
	(t) => [unique().on(t.roleId, t.permissionId)],
);
