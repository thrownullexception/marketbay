import { createFileRoute } from "@tanstack/solid-router";
import { StoresScreen } from "@/screens/shop/Stores";

export const Route = createFileRoute("/(app)/stores")({
	component: StoresScreen,
});
