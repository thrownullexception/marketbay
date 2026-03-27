import { Elysia } from "elysia";
import { authenticatedUserMiddleware } from "@/server/middlewares/auth";
import { UnAuthorizedRequestError } from "@/server/shared/errors";
import { StoresModule } from "../../stores";
import { StoreIdTransformer } from "../../stores/stores/types";
import { UserIdTransformer } from "../users/types";
import { COOKIE_OPTIONS, STORE_COOKIE_NAME } from "./constants";

export const authMerchantController = new Elysia({
	prefix: "/auth",
})
	.use(authenticatedUserMiddleware)
	.post(
		"/switch/:storeId",
		async ({
			params: { storeId },
			authenticatedUserId,
			cookie: { [STORE_COOKIE_NAME]: storeCookie },
		}) => {
			const token = await StoresModule.services.storeTeamMembers.canAccessStore(
				authenticatedUserId,
				StoreIdTransformer.toDbId(storeId),
			);

			if (token === "can-not-access-store") {
				throw new UnAuthorizedRequestError("Merchant store access check failed", {
					storeId,
					authenticatedUserId:
						UserIdTransformer.toPublicHash(authenticatedUserId),
				});
			}

			storeCookie.set(
				COOKIE_OPTIONS({
					value: storeId,
				}),
			);

			return token;
		},
	);
