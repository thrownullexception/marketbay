import {
	pgTable,
	text,
	type UpdateDeleteAction,
	unique,
} from "drizzle-orm/pg-core";
import { baseDbSchema, idField } from "@/server/database/base-schema";
import { referencesStoreEntity } from "../stores/entity";
import { type StoreRoleId, StoreRoleIdTransformer } from "./types";

export const StoreRoleEntity = pgTable(
	"store_roles",
	baseDbSchema(StoreRoleIdTransformer.unoPrivate, {
		storeId: referencesStoreEntity("cascade"),
		name: text().notNull(),
		description: text(),
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
