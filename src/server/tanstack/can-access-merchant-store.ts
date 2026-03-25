import { redirect } from "@tanstack/solid-router";
import { createServerFn } from "@tanstack/solid-start";
import { getCookie } from "@tanstack/solid-start/server";
import { STORE_COOKIE_NAME } from "../modules/identity/auth/constants";
import type { UserId } from "../modules/identity/users/types";
import { StoresModule } from "../modules/stores";
import { StoreIdTransformer } from "../modules/stores/stores/types";
import { isAuthenticatedBeforeLoad } from "./is-authenticated";

const canManageStoreFn = createServerFn({ method: "GET" })
	.inputValidator((data: { userId: UserId }) => data)
	.handler(async ({ data: { userId } }) => {
		const storeCookie = getCookie(STORE_COOKIE_NAME);
		if (!storeCookie) {
			return "can-not-access-store";
		}

		const storeId = StoreIdTransformer.toDbId(storeCookie);

		return await StoresModule.services.storeTeamMembers.canAccessStore(
			userId,
			storeId,
		);
	});

export const canAccessMerchantStoreBeforeLoad = async ({
	location,
}: {
	location: {
		href: string;
	};
}) => {
	const { user } = await isAuthenticatedBeforeLoad({ location });

	const canAccessStore = await canManageStoreFn({ data: user });

	if (canAccessStore === "can-not-access-store") {
		throw redirect({
			to: "/merchant",
		});
	}

	return canAccessStore;
};
