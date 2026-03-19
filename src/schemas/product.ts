import * as v from "valibot";

const ProductIdSchema = v.pipe(v.number(), v.brand("ProductId"));
export const ProductId = v.custom<ProductId>((val) => {
	return v.safeParse(ProductIdSchema, val).success;
});
export type ProductId = v.InferOutput<typeof ProductIdSchema>;

export enum ProductStatus {
	Active = "active",
	Draft = "draft",
	Archived = "archived"
}

export enum ProductCondition {
	New = "new",
	Refurbished = "refurbished",
	Used = "used",
}