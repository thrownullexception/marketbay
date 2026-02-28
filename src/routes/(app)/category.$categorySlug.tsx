import { createFileRoute } from "@tanstack/solid-router";
import { CategoryScreen } from "@/screens/shop/Category";

export const Route = createFileRoute("/(app)/category/$categorySlug")({
	component: CategoryScreen,
});
