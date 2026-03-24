import {
	pgTable,
	type UpdateDeleteAction,
} from "drizzle-orm/pg-core";
import { Categories } from "@/schemas/category";
import { systemIdField, systemValueDbSchema } from "@/server/database/base-schema";

export const CategoryEntity = pgTable(
	"categories",
	systemValueDbSchema(Categories),
);

export const referencesCategoryEntity = (constraint?: UpdateDeleteAction) => {
	return systemIdField()
		.references(() => CategoryEntity.id, {
			onDelete: constraint || "restrict",
		})
		.$type<Categories>();
};
