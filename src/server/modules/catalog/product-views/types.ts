import { HashIdTransformer } from "@/server/services/hashid";

export const ProductViewIdTransformer = new HashIdTransformer("ProductViewId");

export type ProductViewId = ReturnType<typeof ProductViewIdTransformer.toDbId>;
export type ProductViewIdHash = ReturnType<typeof ProductViewIdTransformer.toPublicHash>;