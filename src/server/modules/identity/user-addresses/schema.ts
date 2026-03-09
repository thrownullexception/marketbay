import * as v from "valibot";
import { createEntityId } from "@/server/database/create-id";

const UserAddressIdSchema = v.pipe(
	v.string(),
	v.cuid2(),
	v.brand("UserAddressId"),
);
export const UserAddressId: UserAddressId = v.parse(
	UserAddressIdSchema,
	createEntityId(),
);
export type UserAddressId = v.InferOutput<typeof UserAddressIdSchema>;
