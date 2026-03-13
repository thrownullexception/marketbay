import { createFileRoute } from "@tanstack/solid-router";
import { ShopLayout } from "@/screens/shop/_Layout";

export const Route = createFileRoute("/(app)")({
	component: ShopLayout,
});
