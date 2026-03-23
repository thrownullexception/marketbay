import { HashIdTransformer } from "@/server/services/hashid";

export const AuthSessionIdTransformer = new HashIdTransformer("AuthSessionId");

export type AuthSessionId = ReturnType<typeof AuthSessionIdTransformer.toDbId>;
export type AuthSessionIdHash = ReturnType<typeof AuthSessionIdTransformer.toPublicHash>;