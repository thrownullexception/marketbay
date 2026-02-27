import * as v from "valibot";

const ProductIdSchema = v.pipe(v.string(), v.brand("ProductId"));

export const ProductId: ProductId = v.parse(ProductIdSchema, "123");

export type ProductId = v.InferOutput<typeof ProductIdSchema>;
