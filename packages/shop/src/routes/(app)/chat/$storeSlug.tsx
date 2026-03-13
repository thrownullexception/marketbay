import { createFileRoute } from "@tanstack/solid-router";
import { ChatConversation } from "@/screens/shop/Chat/Conversation";

export const Route = createFileRoute("/(app)/chat/$storeSlug")({
	component: ChatConversation,
});
