import {
	boolean,
	pgEnum,
	pgTable,
	text,
	type UpdateDeleteAction,
	unique,
} from "drizzle-orm/pg-core";
import { baseDbSchema, idField } from "@/server/database/base-schema";
import { getEnumValues } from "@/server/database/enums";
import { UserGender, UserId } from "./schemas";

export const userGenders = pgEnum("user_genders", getEnumValues(UserGender));

export const UserEntity = pgTable(
	"users",
	baseDbSchema(UserId, {
		firstName: text().notNull(),
		lastName: text().notNull(),
		email: text().notNull(),
		phone: text(),
		gender: userGenders(),
		normalizedEmail: text().notNull(),
		emailVerified: boolean().notNull().default(false),
		isAdmin: boolean().notNull().default(false),
		banned: boolean().notNull().default(false),
		image: text(),
		passwordhash: text().notNull(),
	}),
	(t) => [unique().on(t.email), unique().on(t.normalizedEmail)],
);

export const referencesUserEntity = (constraint?: UpdateDeleteAction) => {
	return idField()
		.references(() => UserEntity.id, {
			onDelete: constraint || "restrict",
		})
		.$type<UserId>()
		.notNull();
};
