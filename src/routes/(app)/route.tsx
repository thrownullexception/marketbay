import { createFileRoute } from "@tanstack/solid-router";
import { ShopLayout } from "@/screens/layout/shop";

export const Route = createFileRoute("/(app)")({
	component: ShopLayout,
});
