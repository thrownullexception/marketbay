import * as v from "valibot";

const ReviewIdSchema = v.pipe(v.number(), v.brand("ReviewId"));
export const ReviewId = v.custom<ReviewId>((val) => {
	return v.safeParse(ReviewIdSchema, val).success;
});
export type ReviewId = v.InferOutput<typeof ReviewIdSchema>;

export enum ReviewStatus {
	Published = "published",
	Hidden = "hidden",
	Flagged = "flagged",
}
