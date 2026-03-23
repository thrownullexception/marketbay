import { HashIdTransformer } from "@/server/services/hashid";

export const StoreFollowingIdTransformer = new HashIdTransformer("StoreFollowingId");

export type StoreFollowingId = ReturnType<typeof StoreFollowingIdTransformer.toDbId>;
export type StoreFollowingIdHash = ReturnType<typeof StoreFollowingIdTransformer.toPublicHash>;