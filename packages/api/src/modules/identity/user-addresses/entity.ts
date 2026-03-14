import { boolean, index, pgTable, text } from "drizzle-orm/pg-core";
import { baseDbSchema } from "@/api/database/base-schema";
import { UserAddressId } from "@/shared/schemas/user-addresses";
import { referencesUserEntity } from "../users/entity";

export const UserAddressEntity = pgTable(
	"user_addresses",
	baseDbSchema(UserAddressId, {
		userId: referencesUserEntity("cascade"),
		firstName: text().notNull(),
		lastName: text().notNull(),
		street: text().notNull(),
		city: text().notNull(),
		state: text().notNull(),
		zip: text().notNull(),
		country: text().notNull(),
		isDefault: boolean().notNull().default(false),
	}),
	(t) => [index().on(t.userId)],
);
