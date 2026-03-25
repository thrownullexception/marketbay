import { Elysia } from "elysia";
import { StoresModule } from "..";
import { StoreDetailsTransformer, StoreListItemTransformer } from "./types";

export const storesShopController = new Elysia({
	prefix: "/stores",
})
	.get("/", async () => {
		const stores = await StoresModule.services.stores.getStoresList();
		return stores.map((store) => new StoreListItemTransformer(store));
	})
	.get("/:storeSlug", async ({ params: { storeSlug } }) => {
		const storeId =
			await StoresModule.services.stores.getStoreIdBySlug(storeSlug);
		const store = await StoresModule.services.stores.getFullDetails(storeId);
		return { ...new StoreDetailsTransformer(store) };
	});
