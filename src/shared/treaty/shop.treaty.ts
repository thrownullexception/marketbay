import { treaty } from "@elysiajs/eden";
import { createIsomorphicFn } from "@tanstack/solid-start";
import { getRequestHeaders } from "@tanstack/solid-start/server";
import { shopServerApp } from "@/server/apps/shop";

export const getShopTreaty = createIsomorphicFn()
	.server(
		() =>
			treaty(shopServerApp, {
				headers: getRequestHeaders(),
			}).api.shop,
	)
	.client(
		() =>
			treaty<typeof shopServerApp>("http://localhost:3000", {
				throwHttpError: true,
			}).api.shop,
	);
