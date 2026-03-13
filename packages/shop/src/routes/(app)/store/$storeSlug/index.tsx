import { createFileRoute } from "@tanstack/solid-router";
import { ShopStoreProducts } from "@/screens/shop/Store/Products";

export const Route = createFileRoute("/(app)/store/$storeSlug/")({
	component: ShopStoreProducts,
});
