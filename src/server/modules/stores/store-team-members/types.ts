import { HashIdTransformer } from "@/server/services/hashid";

export const StoreTeamMemberIdTransformer = new HashIdTransformer("StoreTeamMemberId");

export type StoreTeamMemberId = ReturnType<typeof StoreTeamMemberIdTransformer.toDbId>;
export type StoreTeamMemberIdHash = ReturnType<typeof StoreTeamMemberIdTransformer.toPublicHash>;