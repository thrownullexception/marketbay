import { HashIdTransformer } from "@/server/services/hashid";

export const UserAddressIdTransformer = new HashIdTransformer("UserAddressId");

export type PrivateUserAddressId = ReturnType<typeof UserAddressIdTransformer.toPrivate>;
export type PublicUserAddressId = ReturnType<typeof UserAddressIdTransformer.toPublic>;