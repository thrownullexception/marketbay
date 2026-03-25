import { Elysia } from "elysia";
import { CreateStoreRequestSchema } from "@/schemas/store";
import {
	authenticatedStoreMiddleware,
	authenticatedUserMiddleware,
} from "@/server/middlewares/auth";
import { StoresModule } from "..";
import { StoreDetailsTransformer, StoreListItemTransformer } from "./types";

export const storesGuestMerchantController = new Elysia({
	prefix: "/guest",
})
	.use(authenticatedUserMiddleware)
	.get("/", async ({ authenticatedUserId }) => {
		const stores =
			await StoresModule.services.stores.getUserStores(authenticatedUserId);
		return stores.map((store) => new StoreListItemTransformer(store));
	})
	.post(
		"/",
		({ body, authenticatedUserId }) =>
			StoresModule.services.stores.createStore(body, authenticatedUserId),
		{
			body: CreateStoreRequestSchema,
		},
	);

export const storesMerchantController = new Elysia({
	prefix: "/stores",
})
	.use(authenticatedStoreMiddleware)
	.get("/details", async ({ authenticatedStoreId }) => {
		const store =
			await StoresModule.services.stores.getFullDetails(authenticatedStoreId);

		return { ...new StoreDetailsTransformer(store) };
	});
