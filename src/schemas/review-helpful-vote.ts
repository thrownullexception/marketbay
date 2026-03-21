import * as v from "valibot";

const ReviewHelpfulVoteIdSchema = v.pipe(
	v.number(),
	v.brand("ReviewHelpfulVoteId"),
);
export const ReviewHelpfulVoteId = v.custom<ReviewHelpfulVoteId>((val) => {
	return v.safeParse(ReviewHelpfulVoteIdSchema, val).success;
});
export type ReviewHelpfulVoteId = v.InferOutput<
	typeof ReviewHelpfulVoteIdSchema
>;
