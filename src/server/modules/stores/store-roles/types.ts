import { HashIdTransformer } from "@/server/services/hashid";

export const StoreRoleIdTransformer = new HashIdTransformer("StoreRoleId");

export type StoreRoleId = ReturnType<typeof StoreRoleIdTransformer.toDbId>;
export type StoreRoleIdHash = ReturnType<typeof StoreRoleIdTransformer.toPublicHash>;