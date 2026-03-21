import {
	boolean,
	pgTable,
	text,
	type UpdateDeleteAction,
	unique,
} from "drizzle-orm/pg-core";
import { StoreRoleId } from "@/schemas/store-role";
import { baseDbSchema, idField } from "@/server/database/base-schema";
import { referencesStoreEntity } from "../stores/entity";

export const StoreRoleEntity = pgTable(
	"store_roles",
	baseDbSchema(StoreRoleId, {
		storeId: referencesStoreEntity("cascade"),
		name: text().notNull(),
		description: text(),
		isSystem: boolean().notNull().default(false),
	}),
	(t) => [unique().on(t.storeId, t.name)],
);

export const referencesStoreRoleEntity = (constraint?: UpdateDeleteAction) => {
	return idField()
		.references(() => StoreRoleEntity.id, {
			onDelete: constraint || "cascade",
		})
		.$type<StoreRoleId>();
};
