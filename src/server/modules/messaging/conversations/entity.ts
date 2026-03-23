import {
	pgTable,
	text,
	timestamp,
	type UpdateDeleteAction,
} from "drizzle-orm/pg-core";
import { baseDbSchema, idField } from "@/server/database/base-schema";
import { referencesUserEntity } from "../../identity/users/entity";
import { referencesStoreEntity } from "../../stores/stores/entity";
import { type ConversationId, ConversationIdTransformer } from "./types";

export const ConversationEntity = pgTable(
	"conversations",
	baseDbSchema(ConversationIdTransformer.unoPrivate, {
		userId: referencesUserEntity("restrict").notNull(),
		storeId: referencesStoreEntity("restrict").notNull(),

		lastMessagePreview: text(),
		lastMessageAt: timestamp(),
	}),
);

export const referencesConversationEntity = (
	constraint?: UpdateDeleteAction,
) => {
	return idField()
		.references(() => ConversationEntity.id, {
			onDelete: constraint || "restrict",
		})
		.$type<ConversationId>();
};
