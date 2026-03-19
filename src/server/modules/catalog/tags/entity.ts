import {
	boolean,
	pgTable,
	smallint,
	text,
	type UpdateDeleteAction,
	unique,
} from "drizzle-orm/pg-core";
import { TagId } from "@/schemas/tag";
import { baseDbSchema, idField } from "@/server/database/base-schema";
import { referencesCategoryEntity } from "../categories/entity";

export const TagEntity = pgTable(
	"tags",
	baseDbSchema(TagId, {
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
