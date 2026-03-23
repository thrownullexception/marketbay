import {
	index,
	pgTable,
	smallint,
	text,
	type UpdateDeleteAction,
} from "drizzle-orm/pg-core";
import { baseDbSchema, idField } from "@/server/database/base-schema";
import { referencesProductOptionGroupEntity } from "../product-option-groups/entity";
import { type ProductOptionValueId, ProductOptionValueIdTransformer } from "./types";

export const ProductOptionValueEntity = pgTable(
	"product_option_values",
	baseDbSchema(ProductOptionValueIdTransformer.unoPrivate, {
		optionGroupId: referencesProductOptionGroupEntity("cascade"),
		value: text().notNull(),
		sortOrder: smallint().notNull().default(0),
	}),
	(t) => [index().on(t.optionGroupId)],
);

export const referencesProductOptionValueEntity = (
	constraint?: UpdateDeleteAction,
) => {
	return idField()
		.references(() => ProductOptionValueEntity.id, {
			onDelete: constraint || "cascade",
		})
		.$type<ProductOptionValueId>();
};
