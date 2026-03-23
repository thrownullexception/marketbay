import { HashIdTransformer } from "@/server/services/hashid";

export const ProductVariantOptionIdTransformer = new HashIdTransformer("ProductVariantOptionId");

export type ProductVariantOptionId = ReturnType<typeof ProductVariantOptionIdTransformer.toDbId>;
export type ProductVariantOptionIdHash = ReturnType<typeof ProductVariantOptionIdTransformer.toPublicHash>;