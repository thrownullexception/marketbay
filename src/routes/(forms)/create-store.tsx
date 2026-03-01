import { createFileRoute } from "@tanstack/solid-router";
import { CreateStoreScreen } from "@/screens/store/CreateStore";

export const Route = createFileRoute("/(forms)/create-store")({
	component: CreateStoreScreen,
});
