import * as v from "valibot";

const OrderStatusHistoryIdSchema = v.pipe(v.number(), v.brand("OrderStatusHistoryId"));
export const OrderStatusHistoryId = v.custom<OrderStatusHistoryId>((val) => {
	return v.safeParse(OrderStatusHistoryIdSchema, val).success;
});
export type OrderStatusHistoryId = v.InferOutput<typeof OrderStatusHistoryIdSchema>;
