import { Elysia } from "elysia";
import { StoreResponseTransformer } from "@/schemas/store";
import { StoresModule } from "..";
import { StoreIdTransformer } from "./types";

export const storesShopController = new Elysia({
	prefix: "/stores",
})
	.get("/", async () => {
		const stores = await StoresModule.services.stores.getStoresList();
		return stores.map((store) => new StoreResponseTransformer(store));
	})
	.get("/:storeId", async ({ params: { storeId } }) =>
		StoresModule.services.stores.getFullDetails(
			StoreIdTransformer.toPrivate(storeId),
		),
	);
