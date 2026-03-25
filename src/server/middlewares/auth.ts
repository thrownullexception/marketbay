import Elysia from "elysia";
import { IdentityModule } from "../modules/identity";
import {
	AUTH_COOKIE_NAME,
	STORE_COOKIE_NAME,
} from "../modules/identity/auth/constants";
import { StoresModule } from "../modules/stores";
import { StoreIdTransformer } from "../modules/stores/stores/types";

export const authenticatedUserMiddleware = new Elysia({
	name: "authenticated-user-middleware",
})
	.derive(async ({ cookie, status }) => {
		const authCookie = cookie[AUTH_COOKIE_NAME].value as string;

		const session =
			await IdentityModule.services.auth.validateAuthSessionToken(authCookie);
		if (session === "not-authorized")
			return status(401, {
				message: "Unauthorized",
			});
		return {
			authenticatedUserId: session.userId,
		};
	})
	.as("scoped");

export const authenticatedStoreMiddleware = new Elysia({
	name: "authenticated-store-middleware",
})
	.derive(async ({ cookie, status }) => {
		const storeCookie = cookie[STORE_COOKIE_NAME].value as string;

		if (!storeCookie) {
			return status(401, {
				message: "Unauthorized",
			});
		}

		const authCookie = cookie[AUTH_COOKIE_NAME].value as string;

		const session =
			await IdentityModule.services.auth.validateAuthSessionToken(authCookie);

		if (session === "not-authorized")
			return status(401, {
				message: "Unauthorized",
			});

		const storeId = StoreIdTransformer.toDbId(storeCookie);

		const storeCheck =
			await StoresModule.services.storeTeamMembers.canAccessStore(
				session.userId,
				storeId,
			);
		if (storeCheck === "can-not-access-store")
			return status(401, {
				message: "Unauthorized",
			});

		return {
			authenticatedUserId: session.userId,
			authenticatedStoreId: storeId,
		};
	})
	.as("scoped");
