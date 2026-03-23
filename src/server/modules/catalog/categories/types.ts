import { HashIdTransformer } from "@/server/services/hashid";

export const CategoryIdTransformer = new HashIdTransformer("CategoryId");

export type CategoryId = ReturnType<typeof CategoryIdTransformer.toDbId>;
export type CategoryIdHash = ReturnType<typeof CategoryIdTransformer.toPublicHash>;