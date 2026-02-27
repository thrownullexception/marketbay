import type { SQL } from "drizzle-orm";
import { getTableColumns, sql } from "drizzle-orm";
import { toSnakeCase } from "drizzle-orm/casing";
import type { PgTable } from "drizzle-orm/pg-core";

export const buildConflictUpdateColumns = <
	T extends PgTable,
	TAA extends keyof T["_"]["columns"],
>(
	table: T,
	columns: Array<TAA>,
) => {
	const cls = getTableColumns(table);
	return columns.reduce(
		(acc, column) => {
			const colName = cls[column].name;
			acc[column] = sql.raw(`excluded.${toSnakeCase(colName)}`);
			return acc;
		},
		{} as Record<TAA, SQL>,
	);
};
