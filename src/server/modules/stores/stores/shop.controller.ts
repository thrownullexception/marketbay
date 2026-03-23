import { Elysia } from "elysia";
import { StoresModule } from "..";
import { StoreIdTransformer, StoreListItemTransformer } from "./types";

export const storesShopController = new Elysia({
	prefix: "/stores",
})
	.get("/", async () => {
		const stores = await StoresModule.services.stores.getStoresList();
		return stores.map((store) => new StoreListItemTransformer(store));
	})
	.get("/:storeId", async ({ params: { storeId } }) =>
		StoresModule.services.stores.getFullDetails(
			StoreIdTransformer.toDbId(storeId),
		),
	);
