import { HashIdTransformer } from "@/server/services/hashid";

export const UserNotificationPreferenceIdTransformer = new HashIdTransformer("UserNotificationPreferenceId");

export type UserNotificationPreferenceId = ReturnType<typeof UserNotificationPreferenceIdTransformer.toDbId>;
export type UserNotificationPreferenceIdHash = ReturnType<typeof UserNotificationPreferenceIdTransformer.toPublicHash>;