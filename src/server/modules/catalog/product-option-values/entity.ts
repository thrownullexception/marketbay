import {
	index,
	pgTable,
    smallint,
	text,
	type UpdateDeleteAction,
} from "drizzle-orm/pg-core";
import { ProductOptionValueId } from "@/schemas/product-option-value";
import { baseDbSchema, idField } from "@/server/database/base-schema";
import { referencesProductOptionGroupEntity } from "../product-option-groups/entity";

export const ProductOptionValueEntity = pgTable(
	"product_option_values",
	baseDbSchema(ProductOptionValueId, {
		optionGroupId: referencesProductOptionGroupEntity("cascade"),
		value: text().notNull(),
		sortOrder: smallint().notNull().default(0),
	}),
	(t) => [index().on(t.optionGroupId)],
);

export const referencesProductOptionValueEntity = (constraint?: UpdateDeleteAction) => {
	return idField()
		.references(() => ProductOptionValueEntity.id, {
			onDelete: constraint || "cascade",
		})
		.$type<ProductOptionValueId>();
};
