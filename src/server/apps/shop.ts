import Elysia, { status } from "elysia";
import { openapiMiddleware } from "@/server/middlewares/openapi";
import { authShopController } from "@/server/modules/identity/auth/shop.controller";
import { userAddressesShopController } from "@/server/modules/identity/user-addresses/shop.controller";
import { storesShopController } from "@/server/modules/stores/stores/shop.controller";
import {
	BadRequestError,
	NotFoundRequestError,
	UnAuthorizedRequestError,
} from "../shared/errors";

export const shopServerApp = new Elysia({
	prefix: "/api/shop",
})
	.error({
		BAD_REQUEST: BadRequestError,
		NOT_FOUND: NotFoundRequestError,
		UNAUTHORIZED: UnAuthorizedRequestError,
	})
	.onError(({ error, code, set }) => {
		console.error("❌", { code, error });
		// if (code === 'NOT_FOUND')
		//   return set.status = 404, { error: '🚫 route not found' }
		if (code === "UNKNOWN") {
			return status(500, { message: "Internal Server Error", code: 500 });
		}
	})
	.use(openapiMiddleware)
	.use(authShopController)
	.use(userAddressesShopController)
	.use(storesShopController);
