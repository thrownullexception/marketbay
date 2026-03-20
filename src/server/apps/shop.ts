import Elysia from "elysia";
import { openapiMiddleware } from "@/server/middlewares/openapi";
import { userAdressesShopController } from "../modules/identity/user-addresses/shop.controller";

export const shopServerApp = new Elysia({
	prefix: "/api/shop",
})
	.use(openapiMiddleware)
	.use(userAdressesShopController);
