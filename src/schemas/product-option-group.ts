import * as v from "valibot";

const ProductOptionGroupIdSchema = v.pipe(
	v.number(),
	v.brand("ProductOptionGroupId"),
);
export const ProductOptionGroupId = v.custom<ProductOptionGroupId>((val) => {
	return v.safeParse(ProductOptionGroupIdSchema, val).success;
});
export type ProductOptionGroupId = v.InferOutput<
	typeof ProductOptionGroupIdSchema
>;
