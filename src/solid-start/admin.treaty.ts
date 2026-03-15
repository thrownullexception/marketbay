import { treaty } from "@elysiajs/eden";
import { createIsomorphicFn } from "@tanstack/solid-start";
import { adminServerApp } from "@/server/admin.app";

export const getAdminTreaty = createIsomorphicFn()
	.server(() => treaty(adminServerApp).api.admin)
	.client(() => treaty<typeof adminServerApp>("http://localhost:3000").api.admin);
