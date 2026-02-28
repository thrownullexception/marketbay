import { createFileRoute } from "@tanstack/solid-router";
import { HomeScreen } from "@/screens/shop/Home";

export const Route = createFileRoute("/(app)/")({
	component: HomeScreen,
});
