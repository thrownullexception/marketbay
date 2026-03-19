import * as v from "valibot";

const StoreFollowingIdSchema = v.pipe(v.string(), v.cuid2(), v.brand("StoreFollowingId"));
export const StoreFollowingId = v.custom<StoreFollowingId>((val) => {
	return v.safeParse(StoreFollowingIdSchema, val).success;
});
export type StoreFollowingId = v.InferOutput<typeof StoreFollowingIdSchema>;
