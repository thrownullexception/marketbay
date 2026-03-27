import { treaty } from "@elysiajs/eden";
import { createIsomorphicFn } from "@tanstack/solid-start";
import { getRequestHeaders } from "@tanstack/solid-start/server";
import { merchantServerApp } from "@/server/apps/merchant";
import { clientEnv } from "../env";

export const getMerchantTreaty = createIsomorphicFn()
	.server(
		() =>
			treaty(merchantServerApp, {
				headers: getRequestHeaders(),
			}).api.merchant,
	)
	.client(
		() =>
			treaty<typeof merchantServerApp>(clientEnv.PUBLIC_API_URL, {
				throwHttpError: true,
			}).api.merchant,
	);