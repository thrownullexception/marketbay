import Elysia from "elysia";
import { csrfMiddleware } from "./middlewares/csrf";
import { healthcheckMiddleware } from "./middlewares/health";
import { loggerMiddleware } from "./middlewares/logger";
import { openapiMiddleware } from "./middlewares/openapi";

export const adminServerApp = new Elysia({
    prefix: "/api",
})
    .use(csrfMiddleware)
    // .use(helmetMiddleware)
    .use(healthcheckMiddleware)
    .use(openapiMiddleware)
    .use(loggerMiddleware)
    
