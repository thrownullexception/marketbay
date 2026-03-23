import { Elysia } from "elysia";
import { CreateStoreRequestSchema, StoreResponseTransformer } from "@/schemas/store";
import { authenticatedMiddleware } from "@/server/middlewares/auth";
import { StoresModule } from "..";
import { StoreIdTransformer } from "./types";

export const storesMerchantController = new Elysia({
	prefix: "/stores",
})
	.use(authenticatedMiddleware)
	.get(
		"/",
		async ({ authenticatedUserId }) => {
			const stores = await StoresModule.services.stores.getUserStores(authenticatedUserId)
			return stores.map((store) => new StoreResponseTransformer(store));
        }
	)
	.get(
		"/:storeId",
		async ({ params: { storeId } }) =>
			StoresModule.services.stores.getShortDetails(
                StoreIdTransformer.toPrivate(storeId),
            ),
	)
	.post(
		"/",
		({ body, authenticatedUserId }) =>
			StoresModule.services.stores.createStore(
				body,
				authenticatedUserId,
			),
		{
			body: CreateStoreRequestSchema,
		},
	)
	// .patch(
	// 	"/:userAddressId",
	// 	({ body, params }) =>
	// 		IdentityModule.services.userAddress.updateAddress(
	// 			v.parse(UserAddressIdSchema, params.userAddressId),
	// 			body,
	// 		),
	// 	{
	// 		body: UpdateAddressRequestSchema,
	// 	},
	// )
	// .delete("/:storeId", ({ params }) =>
	// 	IdentityModule.services.userAddress.deleteAddress(
	// 		v.parse(UserAddressIdSchema, params.userAddressId),
	// 	),
	// );
