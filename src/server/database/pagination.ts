import type { PgSelect } from "drizzle-orm/pg-core";
import * as v from "valibot";

const PAGINATION = {
	TAKE: 10,
};

export interface PaginationOptions {
	page: number;
	take?: number;
}

export function withPagination<T extends PgSelect>(
	qb: T,
	options: PaginationOptions,
) {
	const { limit, offset } = paginationFilter(options);
	return qb.limit(limit).offset(offset);
}

const paginationFilter = ({
	page,
	take = PAGINATION.TAKE,
}: PaginationOptions): {
	limit: number;
	offset: number;
} => {
	return {
		limit: take,
		offset: (page - 1) * take,
	};
};

export const paginationSchema = v.object({
	page: v.optional(v.pipe(v.number(), v.integer(), v.minValue(1)), 1),
	take: v.optional(
		v.pipe(v.number(), v.integer(), v.minValue(1), v.maxValue(100)),
		PAGINATION.TAKE,
	),
});
