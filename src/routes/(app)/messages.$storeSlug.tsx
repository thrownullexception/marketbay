import { createFileRoute } from "@tanstack/solid-router";
import { ChatView } from "@/screens/shop/Messages/ChatView";

export const Route = createFileRoute("/(app)/messages/$storeSlug")({
	component: ChatView,
});
