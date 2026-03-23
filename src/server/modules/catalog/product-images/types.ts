import { HashIdTransformer } from "@/server/services/hashid";

export const ProductImageIdTransformer = new HashIdTransformer("ProductImageId");

export type ProductImageId = ReturnType<typeof ProductImageIdTransformer.toDbId>;
export type ProductImageIdHash = ReturnType<typeof ProductImageIdTransformer.toPublicHash>;