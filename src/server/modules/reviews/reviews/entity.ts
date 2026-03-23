import { sql } from "drizzle-orm";
import {
	check,
	index,
	integer,
	pgEnum,
	pgTable,
	smallint,
	text,
	timestamp,
	type UpdateDeleteAction,
	unique,
} from "drizzle-orm/pg-core";
import { ReviewStatus } from "@/schemas/review";
import { baseDbSchema, idField } from "@/server/database/base-schema";
import { getEnumValues } from "@/server/database/enums";
import { referencesProductEntity } from "@/server/modules/catalog/products/entity";
import { referencesUserEntity } from "@/server/modules/identity/users/entity";
import { referencesStoreEntity } from "@/server/modules/stores/stores/entity";
import { type ReviewId, ReviewIdTransformer } from "./types";

export const reviewStatus = pgEnum(
	"review_status",
	getEnumValues(ReviewStatus),
);

export const ReviewEntity = pgTable(
	"reviews",
	baseDbSchema(ReviewIdTransformer.unoPrivate, {
		//
		productId: referencesProductEntity("cascade"),
		storeId: referencesStoreEntity("cascade"),

		status: reviewStatus().notNull().default(ReviewStatus.Published),
		title: text(),
		body: text(),

		userId: referencesUserEntity("restrict").notNull(),

		rating: smallint().notNull(),

		helpfulVotes: integer().notNull().default(0),

		storeReply: text(),
		storeReplyAt: timestamp(),
	}),
	(t) => [
		check("rating_in_range", sql`rating BETWEEN 1 AND 5`),
		check(
			"review_has_owner",
			sql`product_id IS NOT NULL OR store_id IS NOT NULL`,
		),
		unique().on(t.productId, t.userId).nullsNotDistinct(),
		unique().on(t.storeId, t.userId).nullsNotDistinct(),
		index().on(t.userId),
	],
);

export const referencesReviewEntity = (constraint?: UpdateDeleteAction) => {
	return idField()
		.references(() => ReviewEntity.id, {
			onDelete: constraint || "restrict",
		})
		.$type<ReviewId>();
};
