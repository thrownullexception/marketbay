import { createFileRoute } from "@tanstack/solid-router";
import { ShopStoreLayout } from "@/screens/shop/Store/Layout";

export const Route = createFileRoute("/(app)/store/$storeSlug")({
	component: ShopStoreLayout,
});
