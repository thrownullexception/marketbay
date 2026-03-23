import { boolean, index, pgTable, text } from "drizzle-orm/pg-core";
import { baseDbSchema, idField } from "@/server/database/base-schema";
import { referencesUserEntity } from "../../identity/users/entity";
import { referencesNotificationTypeEntity } from "../notification-types/entity";
import { NotificationIdTransformer } from "./types";

export const NotificationEntity = pgTable(
	"notifications",
	baseDbSchema(NotificationIdTransformer.unoPrivate, {
		userId: referencesUserEntity("cascade").notNull(),
		type: referencesNotificationTypeEntity("cascade").notNull(),

		title: text().notNull(),
		description: text().notNull(),
		isRead: boolean().notNull().default(false),

		relatedEntityId: idField(),
	}),
	(t) => [index().on(t.userId)],
);
