import { treaty } from "@elysiajs/eden";
import { createIsomorphicFn } from "@tanstack/solid-start";
import { shopServerApp } from "@/server/shop.app";

export const getShopTreaty = createIsomorphicFn()
	.server(() => treaty(shopServerApp).api.shop)
	.client(() => treaty<typeof shopServerApp>("http://localhost:3000").api.shop);

// https://github.com/xkelxmc/eden-tanstack-query
