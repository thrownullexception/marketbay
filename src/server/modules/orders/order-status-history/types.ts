import { HashIdTransformer } from "@/server/services/hashid";

export const OrderStatusHistoryIdTransformer = new HashIdTransformer("OrderStatusHistoryId");

export type OrderStatusHistoryId = ReturnType<typeof OrderStatusHistoryIdTransformer.toDbId>;
export type OrderStatusHistoryIdHash = ReturnType<typeof OrderStatusHistoryIdTransformer.toPublicHash>;