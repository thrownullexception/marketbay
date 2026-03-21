import * as v from "valibot";

export const ProductViewIdSchema = v.pipe(v.number(), v.brand("ProductViewId"));
export const ProductViewId = v.custom<ProductViewId>((val) => {
	return v.safeParse(ProductViewIdSchema, val).success;
});
export type ProductViewId = v.InferOutput<typeof ProductViewIdSchema>;
