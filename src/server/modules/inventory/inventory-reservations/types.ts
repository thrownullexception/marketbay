import { HashIdTransformer } from "@/server/services/hashid";

export const InventoryReservationIdTransformer = new HashIdTransformer("InventoryReservationId");

export type InventoryReservationId = ReturnType<typeof InventoryReservationIdTransformer.toDbId>;
export type InventoryReservationIdHash = ReturnType<typeof InventoryReservationIdTransformer.toPublicHash>;