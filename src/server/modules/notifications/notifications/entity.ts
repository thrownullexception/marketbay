import { boolean, index, pgTable, text } from "drizzle-orm/pg-core";
import { NotificationId } from "@/schemas/notification";
import { baseDbSchema, idField } from "@/server/database/base-schema";
import { referencesUserEntity } from "../../identity/users/entity";
import { referencesNotificationTypeEntity } from "../notification-types/entity";

export const NotificationEntity = pgTable(
	"notifications",
	baseDbSchema(NotificationId, {
		userId: referencesUserEntity("cascade").notNull(),
		type: referencesNotificationTypeEntity("cascade").notNull(),

		title: text().notNull(),
		description: text().notNull(),
		isRead: boolean().notNull().default(false),

		relatedEntityId: idField(),
	}),
	(t) => [index().on(t.userId)],
);
