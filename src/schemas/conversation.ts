import * as v from "valibot";

const ConversationIdSchema = v.pipe(v.number(), v.brand("ConversationId"));
export const ConversationId = v.custom<ConversationId>((val) => {
	return v.safeParse(ConversationIdSchema, val).success;
});
export type ConversationId = v.InferOutput<typeof ConversationIdSchema>;
