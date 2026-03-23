import {
	boolean,
	pgTable,
	smallint,
	text,
	type UpdateDeleteAction,
	unique,
} from "drizzle-orm/pg-core";
import { baseDbSchema, idField } from "@/server/database/base-schema";
import { referencesCategoryEntity } from "../categories/entity";
import { type TagId, TagIdTransformer } from "./types";

export const TagEntity = pgTable(
	"tags",
	baseDbSchema(TagIdTransformer.unoPrivate, {
		categoryId: referencesCategoryEntity("cascade"),
		name: text().notNull(),
		slug: text().notNull(),
		sortOrder: smallint().notNull().default(0),
		isActive: boolean(),
	}),
	(t) => [unique().on(t.categoryId, t.name)],
);

export const referencesTagEntity = (constraint?: UpdateDeleteAction) => {
	return idField()
		.references(() => TagEntity.id, {
			onDelete: constraint || "cascade",
		})
		.$type<TagId>();
};
