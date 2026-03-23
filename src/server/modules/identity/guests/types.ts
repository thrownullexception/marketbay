import { HashIdTransformer } from "@/server/services/hashid";

export const GuestIdTransformer = new HashIdTransformer("GuestId");

export type GuestId = ReturnType<typeof GuestIdTransformer.toDbId>;
export type GuestIdHash = ReturnType<typeof GuestIdTransformer.toPublicHash>;