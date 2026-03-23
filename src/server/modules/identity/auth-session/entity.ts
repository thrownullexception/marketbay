import { index, pgTable, text, timestamp } from "drizzle-orm/pg-core";
import { baseDbSchema } from "@/server/database/base-schema";
import { referencesUserEntity } from "../users/entity";
import { AuthSessionIdTransformer } from "./types";

export const AuthSessionEntity = pgTable(
	"auth_sessions",
	baseDbSchema(AuthSessionIdTransformer.unoPrivate, {
		userId: referencesUserEntity("cascade").notNull(),
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
