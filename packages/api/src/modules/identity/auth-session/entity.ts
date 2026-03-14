import { index, pgTable, text, timestamp } from "drizzle-orm/pg-core";
import { baseDbSchema } from "@/api/database/base-schema";
import { AuthSessionId } from "@/schemas/auth-session";
import { referencesUserEntity } from "../users/entity";

export const AuthSessionEntity = pgTable(
	"auth_sessions",
	baseDbSchema(AuthSessionId, {
		userId: referencesUserEntity("cascade"),
		lastVerifiedAt: timestamp().notNull(),
		secretHash: text().notNull(),
		sessionId: text().notNull(),
		deletedAt: timestamp(),
		// TODO
		// 	    device_info     TEXT,                           -- user agent / device name
		// ip_address      INET,
	}),
	(t) => [index().on(t.userId)],
);
