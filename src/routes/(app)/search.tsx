import { createFileRoute } from "@tanstack/solid-router";
import { SearchScreen } from "@/screens/shop/Search";

export const Route = createFileRoute("/(app)/search")({
	component: SearchScreen,
});
