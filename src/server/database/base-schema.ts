import { sql } from "drizzle-orm";
import type { PgColumnBuilderBase } from "drizzle-orm/pg-core";
import { boolean, integer, timestamp, varchar } from "drizzle-orm/pg-core";
import type * as v from "valibot";
import { createEntityId } from "./create-id";

export const idField = () => varchar({ length: 24 });

export const systemIdField = () => varchar({ length: 2 });

type ExtractBrand<U> = U extends v.CustomSchema<infer I, undefined> ? I : never;

export const baseDbSchema = <
	U extends v.CustomSchema<string, undefined>,
	T extends Record<string, PgColumnBuilderBase>,
>(
	_: U,
	columns: T,
) => ({
	id: idField().$defaultFn(createEntityId).primaryKey().notNull().$type<ExtractBrand<U>>(),
	...columns,
	createdAt: timestamp().defaultNow().notNull(),
	updatedAt: timestamp({
		mode: "string",
	})
		.defaultNow()
		.$onUpdate(() => sql`now()`)
		.notNull(),
});

export const systemValueDbSchema = <
	U,
>(
	_: U,
) => ({
	id: systemIdField().primaryKey().notNull().$type<U>(),
	label: varchar({ length: 128 }).notNull(),
	order: integer().notNull().default(0),
	active: boolean().notNull().default(true),
	createdAt: timestamp().defaultNow().notNull(),
});
