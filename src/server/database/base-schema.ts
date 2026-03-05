import { sql } from "drizzle-orm";
import type { PgColumnBuilderBase } from "drizzle-orm/pg-core";
import { boolean, integer, timestamp, varchar } from "drizzle-orm/pg-core";
import type * as v from "valibot";
import { createEntityId } from "./create-id";

export const idField = () => varchar({ length: 24 });

export const systemIdField = () => varchar({ length: 2 });

const primaryKey = idField().$defaultFn(createEntityId).primaryKey().notNull();

type ExtractBrand<U> = U extends v.Brand<infer I> ? I : never;

export const baseDbSchema = <
	U extends string & v.Brand<string>,
	T extends Record<string, PgColumnBuilderBase>,
>(
	_: U,
	columns: T,
) => ({
	id: primaryKey.$type<ExtractBrand<U>>(),
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
	T extends Record<string, PgColumnBuilderBase>,
>(
	columns: T,
) => ({
	id: systemIdField().primaryKey().notNull(),
	label: varchar({ length: 128 }).notNull(),
	...columns,
	order: integer().notNull().default(0),
	active: boolean().notNull().default(true),
	createdAt: timestamp().defaultNow().notNull(),
});
