import { treaty } from "@elysiajs/eden";
import { createIsomorphicFn } from "@tanstack/solid-start";
import { getRequestHeaders } from "@tanstack/solid-start/server";
import { adminServerApp } from "@/server/apps/admin";

export const getAdminTreaty = createIsomorphicFn()
	.server(
		() =>
			treaty(adminServerApp, {
				headers: getRequestHeaders(),
			}).api.admin,
	)
	.client(
		() => treaty<typeof adminServerApp>("http://localhost:3000").api.admin,
	);
