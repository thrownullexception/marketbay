import {
	index,
	pgTable,
	smallint,
	text,
	type UpdateDeleteAction,
} from "drizzle-orm/pg-core";
import { ProductOptionGroupId } from "@/schemas/product-option-group";
import { baseDbSchema, idField } from "@/server/database/base-schema";
import { referencesProductEntity } from "../products/entity";

// TODO: Could be general based on primary category just like tags
// meaning product_option_values will now contain the productId

export const ProductOptionGroupEntity = pgTable(
	"product_option_groups",
	baseDbSchema(ProductOptionGroupId, {
		productId: referencesProductEntity("cascade"),
		name: text().notNull(),
		sortOrder: smallint().notNull().default(0),
	}),
	(t) => [index().on(t.productId)],
);

export const referencesProductOptionGroupEntity = (
	constraint?: UpdateDeleteAction,
) => {
	return idField()
		.references(() => ProductOptionGroupEntity.id, {
			onDelete: constraint || "cascade",
		})
		.$type<ProductOptionGroupId>();
};
