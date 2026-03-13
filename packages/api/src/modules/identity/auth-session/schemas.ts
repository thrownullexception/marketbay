import * as v from "valibot";
import { createEntityId } from "@/api/database/create-id";

const AuthSessionIdSchema = v.pipe(
	v.string(),
	v.cuid2(),
	v.brand("AuthSessionId"),
);
export const AuthSessionId: AuthSessionId = v.parse(
	AuthSessionIdSchema,
	createEntityId(),
);
export type AuthSessionId = v.InferOutput<typeof AuthSessionIdSchema>;
