import { integer, pgTable, timestamp, unique } from "drizzle-orm/pg-core";
import { baseDbSchema } from "@/server/database/base-schema";
import { referencesOrderEntity } from "../../orders/orders/entity";
import { referencesInventoryEntity } from "../inventories/entity";
import { InventoryReservationIdTransformer } from "./types";

// -- Stock reservations: inventory held while an order is in pending/processing state
export const InventoryReservationEntity = pgTable(
	"inventories",
	baseDbSchema(InventoryReservationIdTransformer.unoPrivate, {
		orderId: referencesOrderEntity("cascade").notNull(),
		inventoryId: referencesInventoryEntity("restrict").notNull(),
		quantity: integer(),
		releasedAt: timestamp(),
	}),
	(t) => [unique().on(t.orderId, t.inventoryId)],
);
