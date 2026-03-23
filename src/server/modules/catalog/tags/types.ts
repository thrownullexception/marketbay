import { HashIdTransformer } from "@/server/services/hashid";

export const TagIdTransformer = new HashIdTransformer("TagId");

export type TagId = ReturnType<typeof TagIdTransformer.toDbId>;
export type TagIdHash = ReturnType<typeof TagIdTransformer.toPublicHash>;