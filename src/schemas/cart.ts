import * as v from "valibot";

export const CartIdSchema = v.pipe(v.number(), v.brand("CartId"));
export const CartId = v.custom<CartId>((val) => {
    return v.safeParse(CartIdSchema, val).success;
});
export type CartId = v.InferOutput<typeof CartIdSchema>;