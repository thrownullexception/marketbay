import { sql } from "drizzle-orm";
import {
	check,
	integer,
	numeric,
	pgTable,
	text,
	unique,
} from "drizzle-orm/pg-core";
import { baseDbSchema } from "@/server/database/base-schema";
import { referencesProductVariantEntity } from "@/server/modules/catalog/product-variants/entity";
import { referencesProductEntity } from "@/server/modules/catalog/products/entity";
import { referencesOrderEntity } from "@/server/modules/orders/orders/entity";
import { OrderItemIdTransformer } from "./types";

export const OrderItemEntity = pgTable(
	"order_items",
	baseDbSchema(OrderItemIdTransformer.unoPrivate, {
		orderId: referencesOrderEntity("cascade").notNull(),
		productId: referencesProductEntity("restrict").notNull(),
		productVariantId: referencesProductVariantEntity("restrict").notNull(),

		productTitle: text().notNull(),
		variantLabel: text(),
		imageUrl: text(),

		quantity: integer(),
		unitPrice: numeric({
			precision: 12,
			scale: 2,
		}).notNull(),
		lineTotal: numeric({
			precision: 12,
			scale: 2,
		}).notNull(),
	}),
	(t) => [
		unique().on(t.orderId, t.productId, t.productVariantId),
		check("positive_quantity", sql`quantity > 0`),
	],
);
