import { createQuery } from "@tanstack/solid-query";
import { getAdminTreaty } from "./admin.treaty";
import { getMerchantTreaty } from "./merchant.treaty";
import { getShopTreaty } from "./shop.treaty";
import { createTreatyQueryOptions, type EdenResponse } from "./treaty-key";

const createShopQueryOptions = <TData>(
	selector: (t: ReturnType<typeof getShopTreaty>) => EdenResponse<TData>,
) => {
	return createTreatyQueryOptions("shop", getShopTreaty, selector);
};

const createMerchantQueryOptions = <TData>(
	selector: (t: ReturnType<typeof getMerchantTreaty>) => EdenResponse<TData>,
) => {
	return createTreatyQueryOptions("merchant", getMerchantTreaty, selector);
};

const createAdminQueryOptions = <TData>(
	selector: (t: ReturnType<typeof getAdminTreaty>) => EdenResponse<TData>,
) => {
	return createTreatyQueryOptions("admin", getAdminTreaty, selector);
};

export const getShopTreatyQueryKey = <TData>(
	selector: (t: ReturnType<typeof getShopTreaty>) => EdenResponse<TData>,
) => {
	return createShopQueryOptions(selector).queryKey;
};

export const getMerchantTreatyQueryKey = <TData>(
	selector: (t: ReturnType<typeof getMerchantTreaty>) => EdenResponse<TData>,
) => {
	return createMerchantQueryOptions(selector).queryKey;
};

export const getAdminTreatyQueryKey = <TData>(
	selector: (t: ReturnType<typeof getAdminTreaty>) => EdenResponse<TData>,
) => {
	return createAdminQueryOptions(selector).queryKey;
};

export const createMerchantQuery = <TData>(
	selector: (t: ReturnType<typeof getMerchantTreaty>) => EdenResponse<TData>,
	placeholderData: TData,
) => {
	return createQuery(() => createMerchantQueryOptions(selector));
	// return {
	// 	...foo,
	// 	data: foo.data ?? placeholderData,
	// };
};

export const createShopQuery = <TData>(
	selector: (t: ReturnType<typeof getShopTreaty>) => EdenResponse<TData>,
	placeholderData: TData,
) => {
	return createQuery(() => createShopQueryOptions(selector));
	// return {
	// 	...foo,
	// 	data: foo.data ?? placeholderData,
	// };
};

export const createAdminQuery = <TData>(
	selector: (t: ReturnType<typeof getAdminTreaty>) => EdenResponse<TData>,
	placeholderData: TData,
) => {
	return createQuery(() => createAdminQueryOptions(selector));
};