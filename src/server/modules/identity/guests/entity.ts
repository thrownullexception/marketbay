import {
	inet,
	pgTable,
	text,
	type UpdateDeleteAction,
} from "drizzle-orm/pg-core";
import { baseDbSchema, idField } from "@/server/database/base-schema";
import { type GuestId, GuestIdTransformer } from "./types";

export const GuestEntity = pgTable(
	"guests",
	baseDbSchema(GuestIdTransformer.unoPrivate, {
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
