import { index, pgTable, smallint, text } from "drizzle-orm/pg-core";
import { baseDbSchema } from "@/server/database/base-schema";
import { referencesProductEntity } from "../products/entity";
import { ProductImageIdTransformer } from "./types";

export const ProductImageEntity = pgTable(
	"product_images",
	baseDbSchema(ProductImageIdTransformer.unoPrivate, {
		productId: referencesProductEntity("cascade").notNull(),
		url: text().notNull(),
		altText: text(),
		sortOrder: smallint().notNull().default(0),
	}),
	(t) => [index().on(t.productId)],
);
