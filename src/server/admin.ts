import { treaty } from "@elysiajs/eden";
import { createIsomorphicFn } from "@tanstack/solid-start";
import Elysia from "elysia";

export const adminServerApp = new Elysia({
	prefix: "/api/admin",
}).get("/foo/bar", () => ({ message: "Hello World" }));

export const getAdminTreaty = createIsomorphicFn()
	.server(() => treaty(adminServerApp).api.admin)
	.client(() => treaty<typeof adminServerApp>("localhost:3000").api.admin);
