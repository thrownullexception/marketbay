import { pgTable, unique } from "drizzle-orm/pg-core";
import { baseDbSchema } from "@/server/database/base-schema";
import { referencesUserEntity } from "@/server/modules/identity/users/entity";
import { referencesReviewEntity } from "../reviews/entity";
import { ReviewHelpfulVoteIdTransformer } from "./types";

export const ReviewHelpfulVoteEntity = pgTable(
	"review_helpful_votes",
	baseDbSchema(ReviewHelpfulVoteIdTransformer.unoPrivate, {
		reviewId: referencesReviewEntity("cascade"),
		userId: referencesUserEntity("cascade").notNull(),
	}),
	(t) => [unique().on(t.reviewId, t.userId)],
);
