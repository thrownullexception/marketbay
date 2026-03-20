import {
	pgTable,
	type UpdateDeleteAction,
} from "drizzle-orm/pg-core";
import { NotificationTypes } from "@/schemas/notification-types";
import { systemIdField, systemValueDbSchema } from "@/server/database/base-schema";

export const NotificationTypeEntity = pgTable(
	"notification_types",
	systemValueDbSchema(NotificationTypes),
);

export const referencesNotificationTypeEntity = (constraint?: UpdateDeleteAction) => {
	return systemIdField()
		.references(() => NotificationTypeEntity.id, {
			onDelete: constraint || "cascade",
		})
		.$type<NotificationTypes>();
};
