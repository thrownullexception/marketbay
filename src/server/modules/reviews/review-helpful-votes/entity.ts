import { pgTable, unique } from "drizzle-orm/pg-core";
import { ReviewHelpfulVoteId } from "@/schemas/review-helpful-vote";
import { baseDbSchema } from "@/server/database/base-schema";
import { referencesUserEntity } from "@/server/modules/identity/users/entity";
import { referencesReviewEntity } from "../reviews/entity";

export const ReviewHelpfulVoteEntity = pgTable(
	"review_helpful_votes",
	baseDbSchema(ReviewHelpfulVoteId, {
		reviewId: referencesReviewEntity("cascade"),
		userId: referencesUserEntity("cascade").notNull(),
	}),
	(t) => [unique().on(t.reviewId, t.userId)],
);
