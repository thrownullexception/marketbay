import { Elysia } from "elysia";
import {
	CreateAddressRequestSchema,
	UpdateAddressRequestSchema,
} from "@/schemas/user-address";
import { authenticatedMiddleware } from "@/server/middlewares/auth";
import { IdentityModule } from "..";
import type { UserId } from "../users/types";
import { UserAddressIdTransformer, UserAddressListItemTransformer } from "./types";

export const userAddressesShopController = new Elysia({
	prefix: "/user-addresses",
})
	.use(authenticatedMiddleware)
	.get("/", async ({ authenticatedUserId }) => {
		const userAddresses =
			await IdentityModule.services.userAddress.getUserAddresses(
				authenticatedUserId,
			);

		return userAddresses.map(
			(address) => new UserAddressListItemTransformer(address),
		);
	})
	.get("/:userAddressId", async ({ params: { userAddressId } }) => {
		const address = await IdentityModule.services.userAddress.getAddress(
			UserAddressIdTransformer.toDbId(userAddressId),
		);
		return new UserAddressListItemTransformer(address);
	})
	.post(
		"/",
		({ body }) =>
			IdentityModule.services.userAddress.createAddress(1 as UserId, body),
		{
			body: CreateAddressRequestSchema,
		},
	)
	.patch(
		"/:userAddressId",
		({ body, params }) =>
			IdentityModule.services.userAddress.updateAddress(
				UserAddressIdTransformer.toDbId(params.userAddressId),
				body,
			),
		{
			body: UpdateAddressRequestSchema,
		},
	)
	.delete("/:userAddressId", ({ params }) =>
		IdentityModule.services.userAddress.deleteAddress(
			UserAddressIdTransformer.toDbId(params.userAddressId),
		),
	);
