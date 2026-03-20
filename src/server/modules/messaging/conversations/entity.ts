import { pgTable, text, timestamp, type UpdateDeleteAction } from "drizzle-orm/pg-core";
import { ConversationId } from "@/schemas/conversation";
import { baseDbSchema, idField } from "@/server/database/base-schema";
import { referencesUserEntity } from "../../identity/users/entity";
import { referencesStoreEntity } from "../../stores/stores/entity";

export const ConversationEntity = pgTable(
	"conversations",
	baseDbSchema(ConversationId, {
		userId: referencesUserEntity("restrict").notNull(),
		storeId: referencesStoreEntity("restrict").notNull(),
		
		lastMessagePreview: text(),
		lastMessageAt: timestamp(),
	}),
);

export const referencesConversationEntity = (constraint?: UpdateDeleteAction) => {
	return idField()
		.references(() => ConversationEntity.id, {
			onDelete: constraint || "restrict",
		})
		.$type<ConversationId>();
};

