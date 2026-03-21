import * as v from "valibot";

const CategoryIdSchema = v.pipe(v.number(), v.brand("CategoryId"));
export const CategoryId = v.custom<CategoryId>((val) => {
	return v.safeParse(CategoryIdSchema, val).success;
});
export type CategoryId = v.InferOutput<typeof CategoryIdSchema>;
