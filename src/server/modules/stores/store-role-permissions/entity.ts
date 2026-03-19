import {
	pgTable,
	unique,
} from "drizzle-orm/pg-core";
import { StoreRolePermissionId } from "@/schemas/store-role-permission";
import { baseDbSchema } from "@/server/database/base-schema";
import {
	referencesStorePermissionEntity,
    referencesStoreRoleEntity,
} from "@/server/database/schemas";

export const StoreRolePermissionsEntity = pgTable(
	"store_role_permissions",
	baseDbSchema(StoreRolePermissionId, {
		roleId: referencesStoreRoleEntity("cascade").notNull(),
		permissionId: referencesStorePermissionEntity("cascade").notNull(),
	}),
	(t) => [unique().on(t.roleId, t.permissionId)],
);

