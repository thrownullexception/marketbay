import { HashIdTransformer } from "@/server/services/hashid";

export const OrderItemIdTransformer = new HashIdTransformer("OrderItemId");

export type OrderItemId = ReturnType<typeof OrderItemIdTransformer.toDbId>;
export type OrderItemIdHash = ReturnType<typeof OrderItemIdTransformer.toPublicHash>;