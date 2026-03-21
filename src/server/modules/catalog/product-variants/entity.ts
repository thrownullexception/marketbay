import {
	index,
	numeric,
	pgTable,
	text,
	type UpdateDeleteAction,
} from "drizzle-orm/pg-core";
import { ProductVariantId } from "@/schemas/product-variant";
import { baseDbSchema, idField } from "@/server/database/base-schema";
import { referencesProductEntity } from "../products/entity";

export const ProductVariantEntity = pgTable(
	"product_variants",
	baseDbSchema(ProductVariantId, {
		productId: referencesProductEntity("cascade").notNull(),
		sku: text(),
		barcode: text(),
		price: numeric({
			precision: 12,
			scale: 2,
		}),
		compareAtPrice: numeric({
			precision: 12,
			scale: 2,
		}),
	}),
	(t) => [index().on(t.productId)],
);
// TOOD: unique(sku) (or unique(store_id, sku) via join with product->store; if you want per-store uniqueness)

export const referencesProductVariantEntity = (
	constraint?: UpdateDeleteAction,
) => {
	return idField()
		.references(() => ProductVariantEntity.id, {
			onDelete: constraint || "restrict",
		})
		.$type<ProductVariantId>();
};
