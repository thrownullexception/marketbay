import {
	inet,
	pgTable,
	text,
	type UpdateDeleteAction,
} from "drizzle-orm/pg-core";
import { GuestId } from "@/schemas/guest";
import { baseDbSchema, idField } from "@/server/database/base-schema";

export const GuestEntity = pgTable(
	"guests",
	baseDbSchema(GuestId, {
		ipAddress: inet(),
		deviceInfo: text(),
		referrer: text(),
	}),
);

export const referencesGuestEntity = (constraint?: UpdateDeleteAction) => {
	return idField()
		.references(() => GuestEntity.id, {
			onDelete: constraint || "restrict",
		})
		.$type<GuestId>();
};
