import {
	boolean,
	integer,
	numeric,
	pgEnum,
	pgTable,
	text,
	type UpdateDeleteAction,
	unique,
	varchar,
} from "drizzle-orm/pg-core";
import { StoreId, StoreStatus } from "@/schemas/store";
import { baseDbSchema, idField } from "@/server/database/base-schema";
import { getEnumValues } from "@/server/database/enums";
import { referencesCategoryEntity } from "../../catalog/categories/entity";

export const storeStatus = pgEnum("store_status", getEnumValues(StoreStatus));

export const StoreEntity = pgTable(
	"stores",
	baseDbSchema(StoreId, {
		name: text().notNull(),
		slug: text().notNull(),
		tagline: varchar({
			length: 60,
		}),
		description: varchar({
			length: 500,
		}),
		logoUrl: text(),
		coverUrl: text(),
		status: storeStatus().notNull(),

		primaryCategory: referencesCategoryEntity().notNull(),
		secondaryCategory: referencesCategoryEntity(),

        legalBusinessName: text(),
        businessId: text(),

        street: text(),
        city: text(),
		state: text().notNull(),
		country: text().notNull(),
		zip: text(),

		email: text(),
		phone: text(),
		website: text(),
		instagram: text(),
		twitter: text(),

		// Cached metrics (denormalized for performance)
		avgRating: numeric({
			scale: 2,
			precision: 2,
		}).default("0.0"),
		reviewCount: integer().default(0),
		totalSales: integer().default(0),

		isVerified: boolean(),
	}),
	(t) => [unique().on(t.slug)],
);

export const referencesStoreEntity = (constraint?: UpdateDeleteAction) => {
	return idField()
		.references(() => StoreEntity.id, {
			onDelete: constraint || "restrict",
		})
		.$type<StoreId>();
};