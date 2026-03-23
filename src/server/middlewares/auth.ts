import Elysia from "elysia";
import type { UserId } from "../modules/identity/users/types";

export const authenticatedMiddleware = new Elysia({
	name: "authenticated-middleware",
})
	.derive(async ({ request: { headers }, status }) => {
		return {
			authenticatedUserId: "123" as UserId,
		};
		// const session = await IdentityModule.services.auth.validateAuthSessionToken(
		// 	{ headers },
		// );
		// if (session === "not-authorized")
		// 	return status(401, {
		// 		message: "Unauthorized",
		// 	});
		// return {
		// 	authenticatedUserId: session.userId,
		// };
	})
	.as("scoped");
