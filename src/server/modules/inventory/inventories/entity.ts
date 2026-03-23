import { sql } from "drizzle-orm";
import {
	check,
	integer,
	pgTable,
	type UpdateDeleteAction,
	unique,
} from "drizzle-orm/pg-core";
import { baseDbSchema, idField } from "@/server/database/base-schema";
import { referencesProductVariantEntity } from "../../catalog/product-variants/entity";
import { referencesProductEntity } from "../../catalog/products/entity";
import { type InventoryId, InventoryIdTransformer } from "./types";
// -- CREATE INDEX idx_inventory_low_stock ON inventory(product_id) WHERE quantity_available <= low_stock_threshold;

export const InventoryEntity = pgTable(
	"inventories",
	baseDbSchema(InventoryIdTransformer.unoPrivate, {
		productId: referencesProductEntity("cascade").notNull(),
		productVariantId: referencesProductVariantEntity("cascade").notNull(),
		quantityOnHand: integer().notNull().default(0),
		quantityReserved: integer().notNull().default(0),
		quantityAvailable: integer().generatedAlwaysAs(
			sql`quantity_on_hand - quantity_reserved`,
		),
		lowStockThreshold: integer().notNull().default(5), //-- triggers low_stock notification,
		reorderPoint: integer().notNull().default(10), // -- suggested reorder level,
	}),
	(t) => [
		unique().on(t.productId, t.productVariantId),
		// -- Prevents a race condition where reservations could exceed on-hand stock,
		// -- which would make quantity_available go negative in the generated column.
		check(
			"inventory_reserved_lte_on_hand",
			sql`quantity_reserved <= quantity_on_hand`,
		),
		check("postive_quantity_on_hand", sql`quantity_on_hand >= 0`),
		check("postive_quantity_reserved", sql`quantity_reserved >= 0`),
	],
);

export const referencesInventoryEntity = (constraint?: UpdateDeleteAction) => {
	return idField()
		.references(() => InventoryEntity.id, {
			onDelete: constraint || "restrict",
		})
		.$type<InventoryId>();
};
