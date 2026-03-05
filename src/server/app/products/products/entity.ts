import { boolean, pgTable, timestamp, varchar } from "drizzle-orm/pg-core";
import { baseDbSchema, idField } from "~/database/base-schema";
// import type { StoreId } from "@/server/app/stores/stores/schemas";
import { ProductId } from "./schemas";

export const ProductEntity = pgTable(
	"products",
	baseDbSchema(ProductId, {
		storeId: idField().$type<StoreId>(),
		name: varchar().notNull(),
		description: varchar().notNull(),
		slug: varchar(),
		status: varchar().notNull().default("draft"),
		categoryPath: varchar(),
		seoTitle: varchar(),
		seoDescription: varchar(),
		publishedAt: timestamp({ mode: "string" }),
		isFeatured: boolean().notNull().default(false),
	}),
);
