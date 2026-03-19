import * as v from "valibot";

const ProductTagIdSchema = v.pipe(v.string(), v.cuid2(), v.brand("ProductTagId"));
export const ProductTagId = v.custom<ProductTagId>((val) => {
	return v.safeParse(ProductTagIdSchema, val).success;
});
export type ProductTagId = v.InferOutput<typeof ProductTagIdSchema>;
