import { createFileRoute } from "@tanstack/solid-router";
import { MessagesLayout } from "@/screens/shop/Messages";

export const Route = createFileRoute("/(app)/messages")({
	component: MessagesLayout,
});
