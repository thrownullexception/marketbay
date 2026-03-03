import { createFileRoute } from "@tanstack/solid-router";
import { ShopStoreAbout } from "@/screens/shop/Store/About";

export const Route = createFileRoute("/(app)/store/$storeSlug/about")({
	component: ShopStoreAbout,
});
