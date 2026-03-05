import { treaty } from "@elysiajs/eden";
import { createIsomorphicFn } from "@tanstack/solid-start";
import { serverApp } from "./server/main";

export const getTreaty = createIsomorphicFn()
	.server(() => treaty(serverApp).api)
	.client(() => treaty<typeof serverApp>("localhost:3000").api);

// https://github.com/xkelxmc/eden-tanstack-query
