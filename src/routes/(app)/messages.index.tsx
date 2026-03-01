import { createFileRoute } from "@tanstack/solid-router";
import { ChatEmptyState } from "@/screens/shop/Messages/ChatEmptyState";

export const Route = createFileRoute("/(app)/messages/")({
	component: ChatEmptyState,
});
