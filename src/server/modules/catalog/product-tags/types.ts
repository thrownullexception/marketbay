import { HashIdTransformer } from "@/server/services/hashid";

export const ProductTagIdTransformer = new HashIdTransformer("ProductTagId");

export type ProductTagId = ReturnType<typeof ProductTagIdTransformer.toDbId>;
export type ProductTagIdHash = ReturnType<typeof ProductTagIdTransformer.toPublicHash>;