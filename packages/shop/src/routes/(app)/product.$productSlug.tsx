import { createFileRoute } from "@tanstack/solid-router";
import { ShopProductScreen } from "@/screens/shop/Product";

export const Route = createFileRoute("/(app)/product/$productSlug")({
	component: ShopProductScreen,
});
