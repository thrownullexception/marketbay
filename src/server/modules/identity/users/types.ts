import { HashIdTransformer } from "@/server/services/hashid";

export const UserIdTransformer = new HashIdTransformer("UserId");

export type UserId = ReturnType<typeof UserIdTransformer.toDbId>;
export type UserIdHash = ReturnType<typeof UserIdTransformer.toPublicHash>;