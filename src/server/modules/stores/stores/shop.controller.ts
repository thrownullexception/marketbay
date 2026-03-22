import { Elysia } from "elysia";
import * as v from "valibot";
import { StoreId, StoreResponseTransformer } from "@/schemas/store";
import { StoresModule } from "..";

export const storesShopController = new Elysia({
	prefix: "/stores",
})
	.get(
		"/",
		async () => {
			const stores = await StoresModule.services.stores.getStoresList()
			return stores.map((store) => new StoreResponseTransformer(store));
        }
	)
	.get(
		"/:storeId",
		async ({ params: { storeId } }) =>
			StoresModule.services.stores.getShortDetails(v.parse(StoreId, storeId)),
	)

