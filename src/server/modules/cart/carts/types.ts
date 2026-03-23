import { HashIdTransformer } from "@/server/services/hashid";

export const CartIdTransformer = new HashIdTransformer("CartId");

export type CartId = ReturnType<typeof CartIdTransformer.toDbId>;
export type CartIdHash = ReturnType<typeof CartIdTransformer.toPublicHash>;