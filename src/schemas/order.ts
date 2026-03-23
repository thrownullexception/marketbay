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
