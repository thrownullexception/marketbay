import {
	integer,
	pgTable,
 timestamp,
	unique,
} from "drizzle-orm/pg-core";
import { InventoryReservationId } from "@/schemas/inventory-reservation";
import { baseDbSchema } from "@/server/database/base-schema";
import { referencesOrderEntity } from "../../orders/orders/entity";
import { referencesInventoryEntity } from "../inventories/entity";

// -- Stock reservations: inventory held while an order is in pending/processing state
export const InventoryReservationEntity = pgTable(
	"inventories",
	baseDbSchema(InventoryReservationId, {
		orderId: referencesOrderEntity("cascade").notNull(),
		inventoryId: referencesInventoryEntity("restrict").notNull(),
		quantity: integer(),
		releasedAt: timestamp(),
	}),
	(t) => [
		unique().on(t.orderId, t.inventoryId),
	],
);
