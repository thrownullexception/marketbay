import Elysia from "elysia";
import { openapiMiddleware } from "@/server/middlewares/openapi";
import { userAdressesShopController } from "@/server/modules/identity/user-addresses/shop.controller";
import { storesShopController } from "@/server/modules/stores/stores/shop.controller";

export const shopServerApp = new Elysia({
	prefix: "/api/shop",
})
	.use(openapiMiddleware)
	.use(userAdressesShopController)
	.use(storesShopController);
