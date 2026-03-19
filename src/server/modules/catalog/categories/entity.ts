import {
	boolean,
	foreignKey,
	index,
	pgTable,
	smallint,
	text,
	type UpdateDeleteAction,
	unique,
} from "drizzle-orm/pg-core";
import { CategoryId } from "@/schemas/category";
import { baseDbSchema, idField } from "@/server/database/base-schema";

export const CategoryEntity = pgTable(
	"categories",
	baseDbSchema(CategoryId, {
		parentId: idField(),
		name: text().notNull(),
		slug: text().notNull(),
		description: text(),
		imageUrl: text(),
		sortOrder: smallint().notNull().default(0),
		isActive: boolean(),
	}),
	(t) => [
		foreignKey({
			columns: [t.parentId],
			foreignColumns: [t.id],
		}),
		unique().on(t.slug),
		index().on(t.parentId),
	],
);

export const referencesCategoryEntity = (constraint?: UpdateDeleteAction) => {
	return idField()
		.references(() => CategoryEntity.id, {
			onDelete: constraint || "restrict",
		})
		.$type<CategoryId>();
};
