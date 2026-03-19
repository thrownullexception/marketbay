import { isNotNull, sql } from "drizzle-orm";
import { check, index, pgTable, type UpdateDeleteAction } from "drizzle-orm/pg-core";
import { CartId } from "@/schemas/cart";
import { baseDbSchema, idField } from "@/server/database/base-schema";
import { referencesGuestEntity } from "../../identity/guests/entity";
import { referencesUserEntity } from "../../identity/users/entity";

export const CartEntity = pgTable(
	"carts",
	baseDbSchema(CartId, {
		userId: referencesUserEntity("cascade"),
		guestId: referencesGuestEntity("cascade"),
	}),
	(t) => [
		index().on(t.userId).where(isNotNull(t.userId)),
		index().on(t.guestId).where(isNotNull(t.guestId)),
		check(
			"cart_has_owner",
			sql`user_id IS NOT NULL OR guest_id IS NOT NULL`,
		),
	],
);

export const referencesCartEntity = (constraint?: UpdateDeleteAction) => {
	return idField()
		.references(() => CartEntity.id, {
			onDelete: constraint || "restrict",
		})
		.$type<CartId>();
};