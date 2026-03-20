import {
	pgTable,
	text,
	unique,
} from "drizzle-orm/pg-core";
import { UserNotificationPreferenceId } from "@/schemas/user-notification-preference";
import { baseDbSchema } from "@/server/database/base-schema";
import { referencesUserEntity } from "../../identity/users/entity";
import { referencesStoreEntity } from "../../stores/stores/entity";
import { referencesNotificationTypeEntity } from "../notification-types/entity";

export const UserNotificationPreferenceEntity = pgTable(
	"user_notification_preferences",
	baseDbSchema(UserNotificationPreferenceId, {
		userId: referencesUserEntity("cascade").notNull(),
		storeId: referencesStoreEntity("cascade"),
		field: referencesNotificationTypeEntity().notNull(),

		value: text().notNull(),
	}),
	(t) => [unique().on(t.userId, t.storeId, t.field)],
);