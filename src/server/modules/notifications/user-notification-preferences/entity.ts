import { pgTable, text, unique } from "drizzle-orm/pg-core";
import { baseDbSchema } from "@/server/database/base-schema";
import { referencesUserEntity } from "../../identity/users/entity";
import { referencesStoreEntity } from "../../stores/stores/entity";
import { referencesNotificationTypeEntity } from "../notification-types/entity";
import { UserNotificationPreferenceIdTransformer } from "./types";

export const UserNotificationPreferenceEntity = pgTable(
	"user_notification_preferences",
	baseDbSchema(UserNotificationPreferenceIdTransformer.unoPrivate, {
		userId: referencesUserEntity("cascade").notNull(),
		storeId: referencesStoreEntity("cascade"),
		field: referencesNotificationTypeEntity().notNull(),

		value: text().notNull(),
	}),
	(t) => [unique().on(t.userId, t.storeId, t.field)],
);
