import { HashIdTransformer } from "@/server/services/hashid";

export const ReviewIdTransformer = new HashIdTransformer("ReviewId");

export type ReviewId = ReturnType<typeof ReviewIdTransformer.toDbId>;
export type ReviewIdHash = ReturnType<typeof ReviewIdTransformer.toPublicHash>;