import Elysia from "elysia";
import { csrfMiddleware } from "@/server/middlewares/csrf";
import { healthcheckMiddleware } from "@/server/middlewares/health";
import { helmetMiddleware } from "@/server/middlewares/helmet";
import { loggerMiddleware } from "@/server/middlewares/logger";
import { openapiMiddleware } from "@/server/middlewares/openapi";
import { userAdressesShopController } from "./modules/identity/user-addresses/shop.controller";

export const shopServerApp = new Elysia({
    prefix: "/api",
})
    .use(csrfMiddleware)
    // .use(helmetMiddleware)
    .use(healthcheckMiddleware)
    .use(openapiMiddleware)
    .use(loggerMiddleware)
   .use(userAdressesShopController)
