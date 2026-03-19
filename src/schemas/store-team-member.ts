import * as v from "valibot";

const StoreTeamMemberIdSchema = v.pipe(v.number(), v.brand("StoreTeamMemberId"));
export const StoreTeamMemberId = v.custom<StoreTeamMemberId>((val) => {
	return v.safeParse(StoreTeamMemberIdSchema, val).success;
});
export type StoreTeamMemberId = v.InferOutput<typeof StoreTeamMemberIdSchema>;
