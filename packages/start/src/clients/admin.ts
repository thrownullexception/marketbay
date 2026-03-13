import { treaty } from "@elysiajs/eden";
import { createIsomorphicFn } from "@tanstack/solid-start";
import { adminServerApp } from "@/api/admin";

export const getAdminClient = createIsomorphicFn()
	.server(() => treaty(adminServerApp).api)
	.client(() => treaty<typeof adminServerApp>("localhost:3000").api);
