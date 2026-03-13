import { Elysia } from "elysia";
import * as v from "valibot";
import { authenticatedMiddleware } from "@/api/middlewares/auth";
import {
	CreateAddressRequestSchema,
	ListUserAddressesResponseSchema,
	UpdateAddressRequestSchema,
	UserAddressIdSchema,
} from "@/schemas/user-addresses";
import type { UserId } from "@/schemas/users";
import { IdentityModule } from "..";

export const userAdressesShopController = new Elysia({ prefix: "/user-adresses" })
	.use(authenticatedMiddleware)
	.get(
		"/",
		({ authenticatedUserId }) =>
			IdentityModule.services.userAddress.getUserAddresses(authenticatedUserId),
		{
			response: ListUserAddressesResponseSchema,
		},
	)
	.post(
		"/",
		({ body }) =>
			IdentityModule.services.userAddress.createAddress(
				"userId" as UserId,
				body,
			),
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
