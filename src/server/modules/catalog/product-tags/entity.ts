import {
	index,
	pgTable,
	unique,
} from "drizzle-orm/pg-core";
import { ProductTagId } from "@/schemas/product-tag";
import { baseDbSchema } from "@/server/database/base-schema";
import { referencesProductEntity } from "../products/entity";
import { referencesTagEntity } from "../tags/entity";

export const ProductTagEntity = pgTable(
	"product_tags",
	baseDbSchema(ProductTagId, {
		productId: referencesProductEntity("cascade").notNull(),
		tagId: referencesTagEntity("cascade").notNull(),
	}),
	(t) => [unique().on(t.productId, t.tagId), index().on(t.tagId)],
);
