import * as v from "valibot";
import { createEntityId } from "@/server/database/create-id";

const UserIdSchema = v.pipe(v.string(), v.cuid2(), v.brand("UserId"));
export const UserId: UserId = v.parse(UserIdSchema, createEntityId());
export type UserId = v.InferOutput<typeof UserIdSchema>;

export enum UserGender {
	MALE = "male",
	FEMALE = "female",
	NON_BINARY = "non_binary",
	PREFER_NOT_TO_SAY = "prefer_not_to_say",
}
