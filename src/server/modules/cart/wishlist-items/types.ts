import { HashIdTransformer } from "@/server/services/hashid";

export const WishlistItemIdTransformer = new HashIdTransformer("WishlistItemId");

export type WishlistItemId = ReturnType<typeof WishlistItemIdTransformer.toDbId>;
export type WishlistItemIdHash = ReturnType<typeof WishlistItemIdTransformer.toPublicHash>;