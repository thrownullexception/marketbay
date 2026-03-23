import { sql } from "drizzle-orm";
import { check, integer, numeric, pgTable, unique } from "drizzle-orm/pg-core";
import { baseDbSchema } from "@/server/database/base-schema";
import { referencesProductVariantEntity } from "../../catalog/product-variants/entity";
import { referencesProductEntity } from "../../catalog/products/entity";
import { referencesCartEntity } from "../carts/entity";
import { CartItemIdTransformer } from "./types";

export const CartItemEntity = pgTable(
	"cart_items",
	baseDbSchema(CartItemIdTransformer.unoPrivate, {
		cartId: referencesCartEntity("cascade").notNull(),
		productId: referencesProductEntity("cascade").notNull(),
		productVariantId: referencesProductVariantEntity("cascade").notNull(),
		quantity: integer().notNull().default(1),
		unitPrice: numeric({
			precision: 12,
			scale: 2,
		}).notNull(),
	}),
	(t) => [
		unique().on(t.cartId, t.productId, t.productVariantId),
		check("quantity_must_be_positive", sql`quantity > 0`),
	],
);
