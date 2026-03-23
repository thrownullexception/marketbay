import { HashIdTransformer } from "@/server/services/hashid";

export const InventoryIdTransformer = new HashIdTransformer("InventoryId");

export type InventoryId = ReturnType<typeof InventoryIdTransformer.toDbId>;
export type InventoryIdHash = ReturnType<typeof InventoryIdTransformer.toPublicHash>;