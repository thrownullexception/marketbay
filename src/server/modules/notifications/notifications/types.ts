import { HashIdTransformer } from "@/server/services/hashid";

export const NotificationIdTransformer = new HashIdTransformer("NotificationId");

export type NotificationId = ReturnType<typeof NotificationIdTransformer.toDbId>;
export type NotificationIdHash = ReturnType<typeof NotificationIdTransformer.toPublicHash>;