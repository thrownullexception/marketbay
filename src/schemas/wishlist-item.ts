import * as v from "valibot";

const WishListItemIdSchema = v.pipe(v.number(), v.brand("WishListItemId"));
export const WishListItemId = v.custom<WishListItemId>((val) => {
	return v.safeParse(WishListItemIdSchema, val).success;
});
export type WishListItemId = v.InferOutput<typeof WishListItemIdSchema>;
