import { createFileRoute } from "@tanstack/solid-router";
import { ShopStoreReviews } from "@/screens/shop/Store/Reviews";

export const Route = createFileRoute("/(app)/store/$storeSlug/reviews")({
	component: ShopStoreReviews,
});
