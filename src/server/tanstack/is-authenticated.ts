import { redirect } from "@tanstack/solid-router";
import { createServerFn } from "@tanstack/solid-start";
import { getCookie } from "@tanstack/solid-start/server";
import { IdentityModule } from "../modules/identity";
import { AUTH_COOKIE_NAME } from "../modules/identity/auth/constants";

const getCurrentUserFn = createServerFn({ method: "GET" }).handler(
	async () => {
		const authCookie = getCookie(AUTH_COOKIE_NAME);

		const response =
			await IdentityModule.services.auth.validateAuthSessionToken(authCookie);

		if (response === "not-authorized") {
			return null;
		}

		return {
			userId: response.userId,
		};
	},
);

export const isAuthenticatedBeforeLoad = async ({
	location,
}: {
	location: {
		href: string;
	},
}) => {
	const user = await getCurrentUserFn();

	if (!user) {
		throw redirect({
			to: "/login",
			search: { redirect: location.href },
		});
	}

	return { user };
};

