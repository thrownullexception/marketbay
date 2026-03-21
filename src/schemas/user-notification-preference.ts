import * as v from "valibot";

const UserNotificationPreferenceIdSchema = v.pipe(
	v.number(),
	v.brand("UserNotificationPreferenceId"),
);
export const UserNotificationPreferenceId =
	v.custom<UserNotificationPreferenceId>((val) => {
		return v.safeParse(UserNotificationPreferenceIdSchema, val).success;
	});
export type UserNotificationPreferenceId = v.InferOutput<
	typeof UserNotificationPreferenceIdSchema
>;
