export type OrderStatus =
    | "pending"
    | "processing"
    | "shipped"
    | "in_transit"
    | "delivered"
    | "cancelled"
    | "return"
    | "refunded";

export type PaymentStatus = "paid" | "refund_pending";