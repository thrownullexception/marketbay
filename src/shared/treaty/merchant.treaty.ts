import { treaty } from "@elysiajs/eden";
import { createIsomorphicFn } from "@tanstack/solid-start";
import { merchantServerApp } from "@/server/apps/merchant";

export const getMerchantTreaty = createIsomorphicFn()
	.server(() => treaty(merchantServerApp).api.merchant)
	.client(
		() =>
			treaty<typeof merchantServerApp>("http://localhost:3000").api.merchant,
	);
