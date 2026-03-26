import { createQuery } from "@tanstack/solid-query";
import { getAdminTreaty } from "./admin.treaty";
import { getMerchantTreaty } from "./merchant.treaty";
import { getShopTreaty } from "./shop.treaty";
import { createTreatyQueryOptions, type EdenResponse } from "./treaty-key";

export const createMerchantQuery = <TData>(
	selector: (t: ReturnType<typeof getMerchantTreaty>) => EdenResponse<TData>,
) => createQuery(() => createTreatyQueryOptions(getMerchantTreaty, selector));

export const createShopQuery = <TData>(
	selector: (t: ReturnType<typeof getShopTreaty>) => EdenResponse<TData>,
) => createQuery(() => createTreatyQueryOptions(getShopTreaty, selector));

export const createAdminQuery = <TData>(
	selector: (t: ReturnType<typeof getAdminTreaty>) => EdenResponse<TData>,
) => createQuery(() => createTreatyQueryOptions(getAdminTreaty, selector));
