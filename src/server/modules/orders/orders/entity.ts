import {
	numeric,
	pgEnum,
	pgTable,
	type UpdateDeleteAction,
} from "drizzle-orm/pg-core";
import { OrderId, OrderStatus, PaymentStatus } from "@/schemas/orders";
import { baseDbSchema, idField } from "@/server/database/base-schema";
import { getEnumValues } from "@/server/database/enums";
import { referencesUserEntity } from "@/server/database/schemas";
import { referencesStoreEntity } from "../../stores/stores/entity";

export const orderStatus = pgEnum(
	"order_status",
	getEnumValues(OrderStatus),
);
export const paymentStatus = pgEnum(
	"payment_status",
	getEnumValues(PaymentStatus),
);

export const OrderEntity = pgTable(
	"orders",
	baseDbSchema(OrderId, {
		storeId: referencesStoreEntity().notNull(),
        userId: referencesUserEntity().notNull(),

        subTotal: numeric({
			precision: 12,
			scale: 2,
        }).notNull(),

        discountAmount: numeric({
			precision: 12,
			scale: 2,
        }).notNull().default("0.0"),

        shippingCost: numeric({
			precision: 12,
			scale: 2,
        }).notNull().default("0.0"),

        taxAmount: numeric({
			precision: 12,
			scale: 2,
        }).notNull().default("0.0"),

        total: numeric({
			precision: 12,
			scale: 2,
        }).notNull()

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
