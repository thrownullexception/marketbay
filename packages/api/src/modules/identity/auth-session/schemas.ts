import { createEntityId } from "packages/api/database/create-id";
import * as v from "valibot";

const AuthSessionIdSchema = v.pipe(v.string(), v.cuid2(), v.brand("AuthSessionId"));
export const AuthSessionId: AuthSessionId = v.parse(AuthSessionIdSchema, createEntityId());
export type AuthSessionId = v.InferOutput<typeof AuthSessionIdSchema>;