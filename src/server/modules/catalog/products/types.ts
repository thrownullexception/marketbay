import { HashIdTransformer } from "@/server/services/hashid";

export const ProductIdTransformer = new HashIdTransformer("ProductId");

export type ProductId = ReturnType<typeof ProductIdTransformer.toDbId>;
export type ProductIdHash = ReturnType<typeof ProductIdTransformer.toPublicHash>;