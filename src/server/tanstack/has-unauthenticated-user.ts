import { redirect } from "@tanstack/solid-router";
import { createServerFn } from "@tanstack/solid-start";
import { getCookie } from "@tanstack/solid-start/server";
import { UN_AUTHENTICATED_USER_COOKIE_NAME } from "../modules/identity/auth/constants";

const hasUnauthenticatedUserFn = createServerFn({ method: "GET" }).handler(
	async () => {
		const unAuthCookie = getCookie(UN_AUTHENTICATED_USER_COOKIE_NAME);

		return {
			hasUnauthenticatedUser: !!unAuthCookie,
		};
	},
);

export const hasUnauthenticatedUserBeforeLoad = async () => {
	const { hasUnauthenticatedUser } = await hasUnauthenticatedUserFn();

	if (!hasUnauthenticatedUser) {
		throw redirect({
			to: "/login",
		});
	}
};
