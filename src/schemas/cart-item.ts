import * as v from "valibot";

export const CartItemIdSchema = v.pipe(v.number(), v.brand("CartItemId"));
export const CartItemId = v.custom<CartItemId>((val) => {
    return v.safeParse(CartItemIdSchema, val).success;
});
export type CartItemId = v.InferOutput<typeof CartItemIdSchema>;