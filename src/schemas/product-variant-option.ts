import * as v from "valibot";

const ProductVariantOptionIdSchema = v.pipe(
	v.number(),
	v.brand("ProductVariantOptionId"),
);
export const ProductVariantOptionId = v.custom<ProductVariantOptionId>(
	(val) => {
		return v.safeParse(ProductVariantOptionIdSchema, val).success;
	},
);
export type ProductVariantOptionId = v.InferOutput<
	typeof ProductVariantOptionIdSchema
>;
