import * as v from "valibot";

export const ProductVariantIdSchema = v.pipe(v.number(), v.brand("ProductVariantId"));
export const ProductVariantId = v.custom<ProductVariantId>((val) => {
    return v.safeParse(ProductVariantIdSchema, val).success;
});
export type ProductVariantId = v.InferOutput<typeof ProductVariantIdSchema>;