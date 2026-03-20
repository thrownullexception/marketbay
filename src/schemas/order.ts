import * as v from "valibot";

const OrderIdSchema = v.pipe(v.number(), v.brand("OrderId"));
export const OrderId = v.custom<OrderId>((val) => {
	return v.safeParse(OrderIdSchema, val).success;
});
export type OrderId = v.InferOutput<typeof OrderIdSchema>;

export enum OrderStatus {
	Pending = "pending",
	Processing = "processing",
	Shipped = "shipped",
	InTransit = "in_transit",
	Delivered = "delivered",
	Cancelled = "cancelled",
	Return = "return",
	Refunded = "refunded",
}

export enum PaymentStatus {
	Paid = "paid",
	Refunded = "refund_pending",
}


