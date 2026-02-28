import { index, pgTable, timestamp, varchar } from "drizzle-orm/pg-core";
import { baseDbSchema } from "@/database/base-schema";
import { referencesUserEntity } from "@/database/references";
import { AuthSessionId } from "./schemas";

export const AuthSessionEntity = pgTable(
	"auth_sessions",
	baseDbSchema(AuthSessionId, {
		lastVerifiedAt: timestamp().notNull(),
		secretHash: varchar({ length: 128 }).notNull(),
		userId: referencesUserEntity(),
		sessionId: varchar({ length: 128 }).notNull(),
		deletedAt: timestamp(),
	}),
	(t) => [index().on(t.userId)],
);
