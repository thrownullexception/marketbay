import {
	numeric,
	pgEnum,
	pgTable,
	type UpdateDeleteAction,
} from "drizzle-orm/pg-core";
import { OrderStatus, PaymentStatus } from "@/schemas/order";
import { baseDbSchema, idField } from "@/server/database/base-schema";
import { getEnumValues } from "@/server/database/enums";
import { referencesUserEntity } from "@/server/modules/identity/users/entity";
import { referencesStoreEntity } from "@/server/modules/stores/stores/entity";
import { type OrderId, OrderIdTransformer } from "./types";

export const orderStatus = pgEnum("order_status", getEnumValues(OrderStatus));
export const paymentStatus = pgEnum(
	"payment_status",
	getEnumValues(PaymentStatus),
);

export const OrderEntity = pgTable(
	"orders",
	baseDbSchema(OrderIdTransformer.unoPrivate, {
		storeId: referencesStoreEntity().notNull(),
		userId: referencesUserEntity().notNull(),

		status: orderStatus().notNull(),

		subTotal: numeric({
			precision: 12,
			scale: 2,
		}).notNull(),

		discountAmount: numeric({
			precision: 12,
			scale: 2,
		})
			.notNull()
			.default("0.0"),

		shippingCost: numeric({
			precision: 12,
			scale: 2,
		})
			.notNull()
			.default("0.0"),

		taxAmount: numeric({
			precision: 12,
			scale: 2,
		})
			.notNull()
			.default("0.0"),

		total: numeric({
			precision: 12,
			scale: 2,
		}).notNull(),

		//
	}),
	// (t) => [unique().on(t.slug)],
);

export const referencesOrderEntity = (constraint?: UpdateDeleteAction) => {
	return idField()
		.references(() => OrderEntity.id, {
			onDelete: constraint || "restrict",
		})
		.$type<OrderId>();
};
