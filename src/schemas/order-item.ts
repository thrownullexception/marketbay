import * as v from "valibot";

const OrderItemIdSchema = v.pipe(v.number(), v.brand("OrderItemId"));
export const OrderItemId = v.custom<OrderItemId>((val) => {
	return v.safeParse(OrderItemIdSchema, val).success;
});
export type OrderItemId = v.InferOutput<typeof OrderItemIdSchema>;
