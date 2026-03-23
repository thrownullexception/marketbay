import {
	boolean,
	integer,
	numeric,
	pgEnum,
	pgTable,
	text,
	timestamp,
	type UpdateDeleteAction,
	unique,
	varchar,
} from "drizzle-orm/pg-core";
import { ProductCondition, ProductStatus } from "@/schemas/product";
import { baseDbSchema, idField } from "@/server/database/base-schema";
import { getEnumValues } from "@/server/database/enums";
import { referencesStoreEntity } from "../../stores/stores/entity";
import { referencesCategoryEntity } from "../categories/entity";
import { type ProductId, ProductIdTransformer } from "./types";

export const productStatus = pgEnum(
	"product_status",
	getEnumValues(ProductStatus),
);
export const productCondition = pgEnum(
	"product_condition",
	getEnumValues(ProductCondition),
);

export const ProductEntity = pgTable(
	"products",
	baseDbSchema(ProductIdTransformer.unoPrivate, {
		storeId: referencesStoreEntity().notNull(),
		categoryId: referencesCategoryEntity().notNull(),
		secondaryCategoryId: referencesCategoryEntity().notNull(),
		tertiaryCategoryId: referencesCategoryEntity().notNull(),

		status: productStatus()
			.notNull()
			.$default(() => ProductStatus.Draft),
		condition: productCondition().notNull(),

		title: text().notNull(),
		slug: text().notNull(),
		description: varchar({
			length: 500,
		}),

		// move to variant
		sku: text(),

		price: numeric({
			precision: 12,
			scale: 2,
		}).notNull(),
		compareAtPrice: numeric({
			precision: 12,
			scale: 2,
		}),
		costPerPrice: numeric({
			precision: 12,
			scale: 2,
		}),

		trackInventory: boolean().default(true),
		continueSellingWhenOutOfStock: boolean().default(false),

		viewsCount: integer().notNull().default(0),
		soldCount: integer().notNull().default(0),

		seoTitle: text(),
		seoDescription: text(),

		scheduledPublishedAt: timestamp(),

		requiresShipping: boolean().default(true),
		weightKg: numeric({
			precision: 8,
			scale: 2,
		}),
		lengthCm: numeric({
			precision: 8,
			scale: 2,
		}),
		widthCm: numeric({
			precision: 8,
			scale: 2,
		}),
		heightCm: numeric({
			precision: 8,
			scale: 2,
		}),
	}),
	(t) => [unique().on(t.slug)],
);

export const referencesProductEntity = (constraint?: UpdateDeleteAction) => {
	return idField()
		.references(() => ProductEntity.id, {
			onDelete: constraint || "restrict",
		})
		.$type<ProductId>();
};
