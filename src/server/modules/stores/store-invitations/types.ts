import { HashIdTransformer } from "@/server/services/hashid";

export const StoreInvitationIdTransformer = new HashIdTransformer("StoreInvitationId");

export type StoreInvitationId = ReturnType<typeof StoreInvitationIdTransformer.toDbId>;
export type StoreInvitationIdHash = ReturnType<typeof StoreInvitationIdTransformer.toPublicHash>;