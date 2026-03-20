import * as v from "valibot";

const NotificationIdSchema = v.pipe(v.number(), v.brand("NotificationId"));
export const NotificationId = v.custom<NotificationId>((val) => {
	return v.safeParse(NotificationIdSchema, val).success;
});
export type NotificationId = v.InferOutput<typeof NotificationIdSchema>;
