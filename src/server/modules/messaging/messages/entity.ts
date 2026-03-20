import { boolean, index, pgEnum, pgTable, text } from "drizzle-orm/pg-core";
import { MessageId, MessageSenderType } from "@/schemas/message";
import { baseDbSchema } from "@/server/database/base-schema";
import { getEnumValues } from "@/server/database/enums";
import { referencesUserEntity } from "../../identity/users/entity";
import { referencesConversationEntity } from "../conversations/entity";

export const messageSenderType = pgEnum(
	"message_sender_type",
	getEnumValues(MessageSenderType),
);

export const MessageEntity = pgTable(
	"messages",
	baseDbSchema(MessageId, {
		conversationId: referencesConversationEntity("cascade").notNull(),
		senderType: messageSenderType().notNull(),
		senderId: referencesUserEntity("restrict").notNull(),
		content: text(),
		attachment: text(),
		isRead: boolean().default(false),
	}),
	(t) => [index().on(t.conversationId)],
);
