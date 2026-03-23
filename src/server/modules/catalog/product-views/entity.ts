import { isNotNull, sql } from "drizzle-orm";
import { check, index, pgTable } from "drizzle-orm/pg-core";
import { baseDbSchema } from "@/server/database/base-schema";
import { referencesGuestEntity } from "../../identity/guests/entity";
import { referencesUserEntity } from "../../identity/users/entity";
import { referencesProductEntity } from "../products/entity";
import { ProductViewIdTransformer } from "./types";

export const ProductViewEntity = pgTable(
	"product_views",
	baseDbSchema(ProductViewIdTransformer.unoPrivate, {
		productId: referencesProductEntity("cascade").notNull(),
		userId: referencesUserEntity("cascade"),
		guestId: referencesGuestEntity("cascade"),
	}),
	(t) => [
		index().on(t.productId),
		index().on(t.userId).where(isNotNull(t.userId)),
		index().on(t.guestId).where(isNotNull(t.guestId)),
		check(
			"product_view_has_owner",
			sql`user_id IS NOT NULL OR guest_id IS NOT NULL`,
		),
	],
);
