import { Elysia } from "elysia";
import { authenticatedUserMiddleware } from "@/server/middlewares/auth";
import { StoresModule } from "../../stores";
import { StoreIdTransformer } from "../../stores/stores/types";
import { STORE_COOKIE_NAME } from "./constants";

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
			status,
		}) => {
			const token = await StoresModule.services.storeTeamMembers.canAccessStore(
				authenticatedUserId,
				StoreIdTransformer.toDbId(storeId),
			);

			if (token === "can-not-access-store") {
				return status(401, {
					message: "Cannnot access store",
				});
			}

			storeCookie.set({
				value: storeId,
				httpOnly: true,
				// domain:
			});

			return token;
		},
	);
