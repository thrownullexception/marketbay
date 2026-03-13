import * as v from "valibot";

const UserIdSchema = v.pipe(v.string(), v.cuid2(), v.brand("UserId"));
export const UserId = v.custom<UserId>((val) => {
	return v.safeParse(UserIdSchema, val).success;
});
export type UserId = v.InferOutput<typeof UserIdSchema>;
