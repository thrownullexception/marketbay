import { HashIdTransformer } from "@/server/services/hashid";

export const MessageIdTransformer = new HashIdTransformer("MessageId");

export type MessageId = ReturnType<typeof MessageIdTransformer.toDbId>;
export type MessageIdHash = ReturnType<typeof MessageIdTransformer.toPublicHash>;