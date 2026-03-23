import { sql } from "drizzle-orm";
import {
	check,
	pgTable,
	type UpdateDeleteAction,
	unique,
} from "drizzle-orm/pg-core";
import { baseDbSchema, idField } from "@/server/database/base-schema";
import { referencesGuestEntity } from "../../identity/guests/entity";
import { referencesUserEntity } from "../../identity/users/entity";
import { CartIdTransformer, type PrivateCartId } from "./types";

export const CartEntity = pgTable(
	"carts",
	baseDbSchema(CartIdTransformer.unoPrivate, {
		userId: referencesUserEntity("cascade"),
		guestId: referencesGuestEntity("cascade"),
	}),
	(t) => [
		unique().on(t.userId).nullsNotDistinct(),
		unique().on(t.guestId).nullsNotDistinct(),
		check("cart_has_owner", sql`user_id IS NOT NULL OR guest_id IS NOT NULL`),
	],
);

export const referencesCartEntity = (constraint?: UpdateDeleteAction) => {
	return idField()
		.references(() => CartEntity.id, {
			onDelete: constraint || "restrict",
		})
		.$type<PrivateCartId>();
};
