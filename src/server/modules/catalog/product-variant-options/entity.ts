import { index, pgTable } from "drizzle-orm/pg-core";
import { baseDbSchema } from "@/server/database/base-schema";
import { referencesProductOptionValueEntity } from "../product-option-values/entity";
import { referencesProductVariantEntity } from "../product-variants/entity";
import { ProductVariantOptionIdTransformer } from "./types";

export const ProductVariantOptionEntity = pgTable(
	"product_variant_option",
	baseDbSchema(ProductVariantOptionIdTransformer.unoPrivate, {
		productVariantId: referencesProductVariantEntity("cascade"),
		optionValueId: referencesProductOptionValueEntity("cascade"),
	}),
	(t) => [index().on(t.productVariantId)],
);
