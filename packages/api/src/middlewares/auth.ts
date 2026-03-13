import Elysia from "elysia";
import { IdentityModule } from "../modules/identity";

export const authenticatedMiddleware = new Elysia({
	name: "authenticated-middleware",
})
	.derive(async ({ request: { headers }, status }) => {
		const session = await IdentityModule.services.auth.validateAuthSessionToken(
			{ headers },
		);
		if (session === "not-authorized") return status(401);
		return {
			authenticatedUserId: session.userId,
		};
	})
	.as("scoped");
