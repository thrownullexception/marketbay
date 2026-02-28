import { boolean, pgTable, text, unique, varchar } from "drizzle-orm/pg-core";
import { baseDbSchema } from "@/database/base-schema";
import { UserId } from "./schemas";

export const UserEntity = pgTable(
	"users",
	baseDbSchema(UserId, {
		firstName: varchar({ length: 32 }).notNull(),
		lastName: varchar({ length: 32 }).notNull(),
		email: varchar({ length: 64 }).notNull(),
		phone: varchar({ length: 64 }),
		normalizedEmail: varchar({ length: 64 }).notNull(),
		emailVerified: boolean().notNull().default(false),
		banned: boolean().notNull().default(false),
		image: text(),
		password: varchar({ length: 128 }).notNull(),
		providerId: varchar({ length: 32 }).notNull(),
	}),
	(t) => [unique().on(t.email), unique().on(t.normalizedEmail)],
);
