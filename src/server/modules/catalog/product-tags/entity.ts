import { index, pgTable, unique } from "drizzle-orm/pg-core";
import { baseDbSchema } from "@/server/database/base-schema";
import { referencesProductEntity } from "../products/entity";
import { referencesTagEntity } from "../tags/entity";
import { ProductTagIdTransformer } from "./types";

export const ProductTagEntity = pgTable(
	"product_tags",
	baseDbSchema(ProductTagIdTransformer.unoPrivate, {
		productId: referencesProductEntity("cascade").notNull(),
		tagId: referencesTagEntity("cascade").notNull(),
	}),
	(t) => [unique().on(t.productId, t.tagId), index().on(t.tagId)],
);
