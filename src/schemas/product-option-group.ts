import * as v from "valibot";

const ProductOptionGroupIdSchema = v.pipe(v.string(), v.cuid2(), v.brand("ProductOptionGroupId"));
export const ProductOptionGroupId = v.custom<ProductOptionGroupId>((val) => {
	return v.safeParse(ProductOptionGroupIdSchema, val).success;
});
export type ProductOptionGroupId = v.InferOutput<typeof ProductOptionGroupIdSchema>;
