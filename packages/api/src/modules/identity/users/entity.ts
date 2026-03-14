import {
	boolean,
	pgTable,
	text,
	type UpdateDeleteAction,
	unique,
} from "drizzle-orm/pg-core";
import { baseDbSchema, idField } from "@/api/database/base-schema";
import { UserId } from "@/shared/schemas/users";

export const UserEntity = pgTable(
	"users",
	baseDbSchema(UserId, {
		firstName: text().notNull(),
		lastName: text().notNull(),
		email: text().notNull(),
		phone: text(),
		normalizedEmail: text().notNull(),
		emailVerified: boolean().notNull().default(false),
		banned: boolean().notNull().default(false),
		image: text(),
		password: text().notNull(),
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
