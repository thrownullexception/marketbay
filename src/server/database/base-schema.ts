import { sql } from "drizzle-orm";
import type { PgColumnBuilderBase } from "drizzle-orm/pg-core";
import { boolean, integer, timestamp, varchar } from "drizzle-orm/pg-core";
import type * as v from "valibot";

export const idField = () => integer();

export const systemIdField = () => varchar({ length: 2 });

export const baseDbSchema = <
	U extends number & v.Brand<string>,
	T extends Record<string, PgColumnBuilderBase>,
>(
	_: U,
	columns: T,
) => ({
	id: idField()
		.primaryKey()
		.generatedAlwaysAsIdentity()
		.notNull()
		.$type<U>(),
	...columns,
	createdAt: timestamp().defaultNow().notNull(),
	updatedAt: timestamp({
		mode: "string",
	})
		.defaultNow()
		.$onUpdate(() => sql`now()`)
		.notNull(),
});

export const systemValueDbSchema = <U>(_: U) => ({
	id: systemIdField().primaryKey().notNull().$type<U>(),
	label: varchar({ length: 128 }).notNull(),
	order: integer().notNull().default(0),
	active: boolean().notNull().default(true),
	createdAt: timestamp().defaultNow().notNull(),
});
