import { Elysia } from "elysia";
import * as v from "valibot";
import type { UserId } from "@/schemas/user";
import {
	CreateAddressRequestSchema,
	UpdateAddressRequestSchema,
	UserAddressIdSchema,
	UserAddressResponseTransformer,
} from "@/schemas/user-address";
import { authenticatedMiddleware } from "@/server/middlewares/auth";
import { IdentityModule } from "..";

export const userAdressesShopController = new Elysia({
	prefix: "/user-adresses",
})
	.use(authenticatedMiddleware)
	.get("/", async ({ authenticatedUserId }) => {
		const userAddresses =
			await IdentityModule.services.userAddress.getUserAddresses(
				authenticatedUserId,
			);

		return userAddresses.map(
			(address) => new UserAddressResponseTransformer(address),
		);
	})
	.get("/:userAddressId", async ({ params: { userAddressId } }) => {
		const address = await IdentityModule.services.userAddress.getAddress(
			v.parse(UserAddressIdSchema, userAddressId),
		);
		return new UserAddressResponseTransformer(address);
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
				v.parse(UserAddressIdSchema, params.userAddressId),
				body,
			),
		{
			body: UpdateAddressRequestSchema,
		},
	)
	.delete("/:userAddressId", ({ params }) =>
		IdentityModule.services.userAddress.deleteAddress(
			v.parse(UserAddressIdSchema, params.userAddressId),
		),
	);
