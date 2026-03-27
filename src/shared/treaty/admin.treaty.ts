import { treaty } from "@elysiajs/eden";
import { createIsomorphicFn } from "@tanstack/solid-start";
import { getRequestHeaders } from "@tanstack/solid-start/server";
import { adminServerApp } from "@/server/apps/admin";
import { clientEnv } from "../env";

export const getAdminTreaty = createIsomorphicFn()
	.server(
		() =>
			treaty(adminServerApp, {
				headers: getRequestHeaders(),
			}).api.admin,
	)
	.client(
		() => treaty<typeof adminServerApp>(clientEnv.PUBLIC_API_URL, {
			throwHttpError: true,
		}).api.admin,
	);
