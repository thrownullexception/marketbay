import * as v from "valibot";

const ProductOptionValueIdSchema = v.pipe(
	v.number(),
	v.brand("ProductOptionValueId"),
);
export const ProductOptionValueId = v.custom<ProductOptionValueId>((val) => {
	return v.safeParse(ProductOptionValueIdSchema, val).success;
});
export type ProductOptionValueId = v.InferOutput<
	typeof ProductOptionValueIdSchema
>;
