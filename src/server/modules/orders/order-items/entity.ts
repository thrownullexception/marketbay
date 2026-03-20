import { sql } from "drizzle-orm";
import {
	check,
	integer,
	numeric,
	pgTable,
	text,
	unique,
} from "drizzle-orm/pg-core";
import { OrderItemId } from "@/schemas/order-item";
import { baseDbSchema } from "@/server/database/base-schema";
import {
	referencesOrderEntity,
	referencesProductEntity,
	referencesProductVariantEntity,
} from "@/server/database/schemas";

export const OrderItemEntity = pgTable(
	"order_items",
	baseDbSchema(OrderItemId, {
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
