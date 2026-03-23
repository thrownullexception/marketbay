import { HashIdTransformer } from "@/server/services/hashid";

export const ConversationIdTransformer = new HashIdTransformer("ConversationId");

export type ConversationId = ReturnType<typeof ConversationIdTransformer.toDbId>;
export type ConversationIdHash = ReturnType<typeof ConversationIdTransformer.toPublicHash>;