import { HashIdTransformer } from "@/server/services/hashid";

export const StoreIdTransformer = new HashIdTransformer("StoreId");

export type PrivateStoreId = ReturnType<typeof StoreIdTransformer.toPrivate>;
export type PublicStoreId = ReturnType<typeof StoreIdTransformer.toPublic>;