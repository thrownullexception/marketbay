import { HashIdTransformer } from "@/server/services/hashid";

export const ProductOptionValueIdTransformer = new HashIdTransformer("ProductOptionValueId");

export type ProductOptionValueId = ReturnType<typeof ProductOptionValueIdTransformer.toDbId>;
export type ProductOptionValueIdHash = ReturnType<typeof ProductOptionValueIdTransformer.toPublicHash>;