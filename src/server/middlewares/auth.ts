import Elysia, { type Cookie } from "elysia";
import { IdentityModule } from "../modules/identity";
import {
	AUTH_COOKIE_NAME,
	STORE_COOKIE_NAME,
} from "../modules/identity/auth/constants";
import { StoresModule } from "../modules/stores";
import { StoreIdTransformer } from "../modules/stores/stores/types";
import { UnAuthorizedRequestError } from "../shared/errors";

const getAuthenticatedUser = async (
	cookie: Record<string, Cookie<unknown>>,
) => {
	const authCookie = cookie[AUTH_COOKIE_NAME].value as string;

	if (!authCookie) {
		throw new UnAuthorizedRequestError("Authentication token is required", {});
	}

	const session =
		await IdentityModule.services.auth.validateAuthSessionToken(authCookie);
	if (session === "not-authorized")
		throw new UnAuthorizedRequestError("Authentication check failed", {});

	return session.userId;
};

export const authenticatedUserMiddleware = new Elysia({
	name: "authenticated-user-middleware",
})
	.derive(async ({ cookie }) => {
		return {
			authenticatedUserId: await getAuthenticatedUser(cookie),
		};
	})
	.as("scoped");

export const authenticatedStoreMiddleware = new Elysia({
	name: "authenticated-store-middleware",
})
	.derive(async ({ cookie }) => {
		const storeCookie = cookie[STORE_COOKIE_NAME].value as string;

		if (!storeCookie) {
			throw new UnAuthorizedRequestError("Store access token is required", {});
		}

		const authenticatedUserId = await getAuthenticatedUser(cookie);

		const storeId = StoreIdTransformer.toDbId(storeCookie);

		const storeCheck =
			await StoresModule.services.storeTeamMembers.canAccessStore(
				authenticatedUserId,
				storeId,
			);
		if (storeCheck === "can-not-access-store")
			throw new UnAuthorizedRequestError("Store access check failed", {});

		return {
			authenticatedUserId,
			authenticatedStoreId: storeId,
		};
	})
	.as("scoped");
