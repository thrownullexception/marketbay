import { createQuery } from "@tanstack/solid-query";
import { getAdminTreaty } from "./admin.treaty";
import { getMerchantTreaty } from "./merchant.treaty";
import { getShopTreaty } from "./shop.treaty";
import { createTreatyQueryOptions, type EdenResponse } from "./treaty-key";

export const createMerchantQuery = <TData>(
	selector: (t: ReturnType<typeof getMerchantTreaty>) => EdenResponse<TData>,
	placeholderData: TData,
) =>
	{
		const foo = createQuery(() =>
			createTreatyQueryOptions("merchant", getMerchantTreaty, selector),
		);
		return {
			...foo,
			data: foo.data ?? placeholderData,
		};
	};

export const createShopQuery = <TData>(
	selector: (t: ReturnType<typeof getShopTreaty>) => EdenResponse<TData>,
	placeholderData: TData,
) => {
const foo = createQuery(() =>
		createTreatyQueryOptions("shop", getShopTreaty, selector),
	);
	return {
		...foo,
		data: foo.data ?? placeholderData,
	};
};

export const createAdminQuery = <TData>(
	selector: (t: ReturnType<typeof getAdminTreaty>) => EdenResponse<TData>,
	placeholderData: TData,
) =>
	createQuery(() =>
		createTreatyQueryOptions("admin", getAdminTreaty, selector, {
			placeholderData,
		}),
	);
