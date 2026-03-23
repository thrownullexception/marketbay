import { index, pgTable, text } from "drizzle-orm/pg-core";
import { baseDbSchema } from "@/server/database/base-schema";
import { referencesUserEntity } from "@/server/modules/identity/users/entity";
import { orderStatus, referencesOrderEntity } from "../orders/entity";
import { OrderStatusHistoryIdTransformer } from "./types";

export const OrderStatusHistoryEntity = pgTable(
	"order_status_history",
	baseDbSchema(OrderStatusHistoryIdTransformer.unoPrivate, {
		orderId: referencesOrderEntity("cascade").notNull(),

		fromStatus: orderStatus(),
		toStatus: orderStatus().notNull(),

		changedById: referencesUserEntity("restrict"), // NULL = system / automation
		note: text(), // -- e.g. tracking number added, cancellation reason
	}),
	(t) => [index().on(t.orderId)],
);
