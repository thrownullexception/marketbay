import { createFileRoute } from "@tanstack/solid-router";
import { CategoriesScreen } from "@/screens/shop/Categories";

export const Route = createFileRoute("/(app)/categories")({
	component: CategoriesScreen,
});
