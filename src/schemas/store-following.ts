import * as v from "valibot";

const StoreFollowingIdSchema = v.pipe(v.number(), v.brand("StoreFollowingId"));
export const StoreFollowingId = v.custom<StoreFollowingId>((val) => {
	return v.safeParse(StoreFollowingIdSchema, val).success;
});
export type StoreFollowingId = v.InferOutput<typeof StoreFollowingIdSchema>;
