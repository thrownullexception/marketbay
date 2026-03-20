import * as v from "valibot";

const MessageIdSchema = v.pipe(v.number(), v.brand("MessageId"));
export const MessageId = v.custom<MessageId>((val) => {
	return v.safeParse(MessageIdSchema, val).success;
});
export type MessageId = v.InferOutput<typeof MessageIdSchema>;

export enum MessageSenderType {
	Buyer = "buyer",
	Store = "store",
}