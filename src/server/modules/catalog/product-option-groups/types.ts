import { HashIdTransformer } from "@/server/services/hashid";

export const ProductOptionGroupIdTransformer = new HashIdTransformer("ProductOptionGroupId");

export type ProductOptionGroupId = ReturnType<typeof ProductOptionGroupIdTransformer.toDbId>;
export type ProductOptionGroupIdHash = ReturnType<typeof ProductOptionGroupIdTransformer.toPublicHash>;