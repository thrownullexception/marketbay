import { index, pgTable, text } from "drizzle-orm/pg-core";
import { OrderStatusHistoryId } from "@/schemas/order-status-history";
import { baseDbSchema } from "@/server/database/base-schema";
import { referencesUserEntity } from "@/server/modules/identity/users/entity";
import { orderStatus, referencesOrderEntity } from "../orders/entity";

export const OrderStatusHistoryEntity = pgTable(
	"order_status_history",
	baseDbSchema(OrderStatusHistoryId, {
		orderId: referencesOrderEntity("cascade").notNull(),

		fromStatus: orderStatus(),
		toStatus: orderStatus().notNull(),

		changedById: referencesUserEntity("restrict"), // NULL = system / automation
		note: text(), // -- e.g. tracking number added, cancellation reason
	}),
	(t) => [index().on(t.orderId)],
);
