import { HashIdTransformer } from "@/server/services/hashid";

export const OrderIdTransformer = new HashIdTransformer("OrderId");

export type OrderId = ReturnType<typeof OrderIdTransformer.toDbId>;
export type OrderIdHash = ReturnType<typeof OrderIdTransformer.toPublicHash>;