import { treaty } from "@elysiajs/eden";
import { createIsomorphicFn } from "@tanstack/solid-start";
import { merchantServerApp } from "@/api/merchant";

export const getMerchantClient = createIsomorphicFn()
	.server(() => treaty(merchantServerApp).api)
	.client(() => treaty<typeof merchantServerApp>("localhost:3000").api);
