import { createFileRoute } from "@tanstack/solid-router";
import { ChatLayout } from "@/screens/shop/Chat";

export const Route = createFileRoute("/(app)/chat")({
	component: ChatLayout,
});
