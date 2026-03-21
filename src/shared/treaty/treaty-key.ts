/**
 * Utilities for deriving TanStack Query keys and query options directly from
 * an Eden treaty client chain, eliminating the need to maintain keys manually
 * and keeping the path/params in sync with the actual queryFn call.
 */

import type {
	DefinedInitialDataOptions,
	UndefinedInitialDataOptions,
} from "@tanstack/solid-query";
import { queryOptions } from "@tanstack/solid-query";

type Primitive = string | number | boolean | null | undefined;
type QueryKeySegment = string | Record<string, Primitive>;
export type TreatyQueryKey = readonly QueryKeySegment[];

// ---------------------------------------------------------------------------
// treatyKey — low-level key builder
// ---------------------------------------------------------------------------

type TreatyKeyChain<_T> = {
	readonly queryKey: TreatyQueryKey;
} & {
	[K: string]: TreatyKeyChain<unknown>;
} & ((...args: unknown[]) => TreatyKeyChain<unknown>);

function createChain(segments: QueryKeySegment[]): TreatyKeyChain<unknown> {
	return new Proxy((() => {}) as unknown as TreatyKeyChain<unknown>, {
		get(_target, prop: string) {
			if (prop === "queryKey") {
				return segments as TreatyQueryKey;
			}
			return createChain([...segments, prop]);
		},
		apply(_target, _this, args) {
			const params = args[0] as Record<string, Primitive> | undefined;
			return createChain(params != null ? [...segments, params] : segments);
		},
	});
}

/**
 * Wraps any Eden treaty client to produce query keys that mirror the call
 * chain, without actually executing any HTTP requests.
 *
 * @example
 * treatyKey(getShopTreaty())["user-adresses"]({ userAddressId: id }).queryKey
 * // → ["user-adresses", { userAddressId: id }]
 */
export function treatyKey<T>(_treaty: T): TreatyKeyChain<T> {
	return createChain([]) as TreatyKeyChain<T>;
}

// ---------------------------------------------------------------------------
// createTreatyQueryOptions — ergonomic queryOptions factory
// ---------------------------------------------------------------------------

// HTTP method names are treated as terminals: they are NOT included in the key.
const HTTP_METHODS = new Set([
	"get",
	"post",
	"put",
	"patch",
	"delete",
	"head",
	"options",
]);

// eslint-disable-next-line @typescript-eslint/no-empty-function
const noop = () => {};

function createQueryKeyChain(segments: QueryKeySegment[]): unknown {
	return new Proxy(noop, {
		get(_target, prop: string) {
			if (prop === "queryKey") return segments;
			if (HTTP_METHODS.has(prop)) return createQueryKeyTerminal(segments);
			return createQueryKeyChain([...segments, prop]);
		},
		apply(_target, _this, args) {
			const params = args[0] as Record<string, Primitive> | undefined;
			return createQueryKeyChain(
				params != null ? [...segments, params] : segments,
			);
		},
	});
}

function createQueryKeyTerminal(segments: QueryKeySegment[]): unknown {
	const terminal: unknown = new Proxy(noop, {
		get(_target, prop: string) {
			if (prop === "queryKey") return segments;
			return () => terminal;
		},
		apply() {
			return terminal;
		},
	});
	return terminal;
}

type EdenResponse<TData> = Promise<{ data: TData | null; error: unknown }>;

type WithoutKeyAndFn<T> = Omit<T, "queryKey" | "queryFn">;

/**
 * Creates a `queryOptions` object where the `queryKey` is automatically
 * derived from the treaty call chain in `selector`, and `queryFn` calls
 * that same chain against the real treaty client.
 *
 * Pass `initialData` to get a `DefinedUseQueryResult` (data is never
 * `undefined`); omit it for the standard `UseQueryResult`.
 *
 * @example
 * // List (no params)
 * export const addressesQuery = createTreatyQueryOptions(
 *   getShopTreaty,
 *   (t) => t["user-adresses"].get(),
 * );
 *
 * // Single item (path param)
 * export const addressQuery = (id: string) => createTreatyQueryOptions(
 *   getShopTreaty,
 *   (t) => t["user-adresses"]({ userAddressId: id }).get(),
 *   { initialData: null },
 * );
 */
type TreatyQueryResult<TData> =
	| (ReturnType<DefinedInitialDataOptions<TData>> & {
			queryKey: TreatyQueryKey;
	  })
	| (ReturnType<UndefinedInitialDataOptions<TData>> & {
			queryKey: TreatyQueryKey;
	  });

export function createTreatyQueryOptions<TTreaty, TData>(
	getTreaty: () => TTreaty,
	selector: (treaty: TTreaty) => EdenResponse<TData>,
	options: WithoutKeyAndFn<ReturnType<DefinedInitialDataOptions<TData>>>,
): ReturnType<DefinedInitialDataOptions<TData>> & { queryKey: TreatyQueryKey };

export function createTreatyQueryOptions<TTreaty, TData>(
	getTreaty: () => TTreaty,
	selector: (treaty: TTreaty) => EdenResponse<TData>,
	options?: WithoutKeyAndFn<ReturnType<UndefinedInitialDataOptions<TData>>>,
): ReturnType<UndefinedInitialDataOptions<TData>> & {
	queryKey: TreatyQueryKey;
};

export function createTreatyQueryOptions<TTreaty, TData>(
	getTreaty: () => TTreaty,
	selector: (treaty: TTreaty) => EdenResponse<TData>,
	// biome-ignore lint/suspicious/noExplicitAny: implementation covers both overloads
	options?: any,
): TreatyQueryResult<TData> {
	const keyProxy = createQueryKeyChain([]) as TTreaty;
	const keyResult = selector(keyProxy) as unknown as {
		queryKey: TreatyQueryKey;
	};

	return queryOptions({
		...(options as object),
		queryKey: keyResult.queryKey,
		queryFn: () => selector(getTreaty()).then((res) => res.data as TData),
	}) as TreatyQueryResult<TData>;
}
