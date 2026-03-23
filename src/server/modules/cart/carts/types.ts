import { HashIdTransformer } from "@/server/services/hashid";

export const CartIdTransformer = new HashIdTransformer("CartId");

export type PrivateCartId = ReturnType<typeof CartIdTransformer.toPrivate>;
export type PublicCartId = ReturnType<typeof CartIdTransformer.toPublic>;