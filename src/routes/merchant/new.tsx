import { createFileRoute } from "@tanstack/solid-router";
import { CreateStoreScreen } from "@/screens/merchant/create-store";

export const Route = createFileRoute("/merchant/new")({
	component: CreateStoreScreen,
});
