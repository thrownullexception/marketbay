import { HashIdTransformer } from "@/server/services/hashid";

export const AbandonedCartIdTransformer = new HashIdTransformer("AbandonedCartId");

export type AbandonedCartId = ReturnType<typeof AbandonedCartIdTransformer.toDbId>;
export type AbandonedCartIdHash = ReturnType<typeof AbandonedCartIdTransformer.toPublicHash>;