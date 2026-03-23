import { HashIdTransformer } from "@/server/services/hashid";

export const ReviewHelpfulVoteIdTransformer = new HashIdTransformer("ReviewHelpfulVoteId");

export type ReviewHelpfulVoteId = ReturnType<typeof ReviewHelpfulVoteIdTransformer.toDbId>;
export type ReviewHelpfulVoteIdHash = ReturnType<typeof ReviewHelpfulVoteIdTransformer.toPublicHash>;