import * as v from "valibot";

const AuthSessionIdSchema = v.pipe(v.string(), v.cuid2(), v.brand("AuthSessionId"));
export const AuthSessionId = v.custom<AuthSessionId>((val) => {
    return v.safeParse(AuthSessionIdSchema, val).success;
});
export type AuthSessionId = v.InferOutput<typeof AuthSessionIdSchema>;