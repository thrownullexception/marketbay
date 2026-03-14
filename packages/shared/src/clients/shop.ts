import { treaty } from "@elysiajs/eden";
import { createIsomorphicFn } from "@tanstack/solid-start";
import { shopServerApp } from "@/api/shop";

export const getShopClient = createIsomorphicFn()
	.server(() => treaty(shopServerApp).api)
	.client(() => treaty<typeof shopServerApp>("localhost:3000").api);
