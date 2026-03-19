import {
	index,
	pgTable,
    smallint,
	text,
} from "drizzle-orm/pg-core";
import { ProductTagId } from "@/schemas/product-tag";
import { baseDbSchema } from "@/server/database/base-schema";
import { referencesProductEntity } from "../products/entity";

export const ProductImageEntity = pgTable(
	"product_tags",
	baseDbSchema(ProductTagId, {
		productId: referencesProductEntity("cascade").notNull(),
		url: text().notNull(),
		altText: text(),
		sortOrder: smallint().notNull().default(0),
	}),
	(t) => [index().on(t.productId)],
);
