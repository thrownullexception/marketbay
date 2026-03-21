import { index, pgTable } from "drizzle-orm/pg-core";
import { ProductVariantOptionId } from "@/schemas/product-variant-option";
import { baseDbSchema } from "@/server/database/base-schema";
import { referencesProductOptionValueEntity } from "../product-option-values/entity";
import { referencesProductVariantEntity } from "../product-variants/entity";

export const ProductVariantOptionEntity = pgTable(
	"product_variant_option",
	baseDbSchema(ProductVariantOptionId, {
		productVariantId: referencesProductVariantEntity("cascade"),
		optionValueId: referencesProductOptionValueEntity("cascade"),
	}),
	(t) => [index().on(t.productVariantId)],
);
