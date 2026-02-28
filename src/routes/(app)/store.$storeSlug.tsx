import { createFileRoute } from "@tanstack/solid-router";
import { ShopStoreScreen } from "@/screens/shop/Store";

export const Route = createFileRoute("/(app)/store/$storeSlug")({
	component: ShopStoreScreen,
});
