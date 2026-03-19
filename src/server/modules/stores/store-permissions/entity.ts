import {
	pgTable,
	type UpdateDeleteAction,
} from "drizzle-orm/pg-core";
import { StorePermissions } from "@/schemas/store-permission";
import { systemIdField, systemValueDbSchema } from "@/server/database/base-schema";

export const StorePermissionEntity = pgTable(
	"store_permissions",
	systemValueDbSchema(StorePermissions),
);

export const referencesStorePermissionEntity = (constraint?: UpdateDeleteAction) => {
	return systemIdField()
		.references(() => StorePermissionEntity.id, {
			onDelete: constraint || "cascade",
		})
		.$type<StorePermissions>();
};
