import { HashIdTransformer } from "@/server/services/hashid";

export const StoreRolePermissionIdTransformer = new HashIdTransformer("StoreRolePermissionId");

export type StoreRolePermissionId = ReturnType<typeof StoreRolePermissionIdTransformer.toDbId>;
export type StoreRolePermissionIdHash = ReturnType<typeof StoreRolePermissionIdTransformer.toPublicHash>;