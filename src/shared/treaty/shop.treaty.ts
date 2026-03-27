import { treaty } from "@elysiajs/eden";
import { createIsomorphicFn } from "@tanstack/solid-start";
import { getRequestHeaders } from "@tanstack/solid-start/server";
import { shopServerApp } from "@/server/apps/shop";
import { clientEnv } from "../env";

export const getShopTreaty = createIsomorphicFn()
	.server(
		() =>
			treaty(shopServerApp, {
				headers: getRequestHeaders(),
			}).api.shop,
	)
	.client(
		() =>
			treaty<typeof shopServerApp>(clientEnv.PUBLIC_API_URL, {
				throwHttpError: true,
			}).api.shop,
	);
