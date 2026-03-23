import { HashIdTransformer } from "@/server/services/hashid";

export const ProductVariantIdTransformer = new HashIdTransformer("ProductVariantId");

export type ProductVariantId = ReturnType<typeof ProductVariantIdTransformer.toDbId>;
export type ProductVariantIdHash = ReturnType<typeof ProductVariantIdTransformer.toPublicHash>;