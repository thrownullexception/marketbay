import Elysia from "elysia";
import { openapiMiddleware } from "@/server/middlewares/openapi";
import { userAdressesShopController } from "./modules/identity/user-addresses/shop.controller";

export const shopServerApp = new Elysia({
	prefix: "/api/shop",
})
	.use(openapiMiddleware)
	.use(userAdressesShopController);

import { treaty } from "@elysiajs/eden";
import { createIsomorphicFn } from "@tanstack/solid-start";

export const getShopTreaty = createIsomorphicFn()
	.server(() => treaty(shopServerApp).api.shop)
	.client(() => treaty<typeof shopServerApp>("localhost:3000").api.shop);

// https://github.com/xkelxmc/eden-tanstack-query
