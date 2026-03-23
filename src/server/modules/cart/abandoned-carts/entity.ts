import { index, integer, pgTable, timestamp } from "drizzle-orm/pg-core";
import { baseDbSchema } from "@/server/database/base-schema";
import { referencesUserEntity } from "../../identity/users/entity";
import { referencesCartEntity } from "../carts/entity";
import { AbandonedCartIdTransformer } from "./types";

export const AbandonedCartEntity = pgTable(
	"abandoned_carts",
	baseDbSchema(AbandonedCartIdTransformer.unoPrivate, {
		cartId: referencesCartEntity("cascade").notNull(),
		userId: referencesUserEntity("cascade").notNull(),

		firstReminderSentAt: timestamp(),
		lastReminderSentAt: timestamp(),
		reminderCount: integer(),

		convertedAt: timestamp(),
	}),
	(t) => [index().on(t.userId)],
);
