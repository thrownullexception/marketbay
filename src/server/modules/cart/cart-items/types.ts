import { HashIdTransformer } from "@/server/services/hashid";

export const CartItemIdTransformer = new HashIdTransformer("CartItemId");

export type CartItemId = ReturnType<typeof CartItemIdTransformer.toDbId>;
export type CartItemIdHash = ReturnType<typeof CartItemIdTransformer.toPublicHash>;