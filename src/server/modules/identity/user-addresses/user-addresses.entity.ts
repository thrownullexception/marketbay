import { boolean, index, pgTable, text } from "drizzle-orm/pg-core";
import { baseDbSchema } from "@/server/database/base-schema";
import { referencesUserEntity } from "../users/users.entity";
import { UserAddressId } from "./schema";

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
		isDefault: boolean().notNull().default(false),
	}),
	(t) => [index().on(t.userId)],
);
