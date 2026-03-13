import { createFileRoute } from "@tanstack/solid-router";
import { SelectConversation } from "@/screens/shop/Chat/SelectConversation";

export const Route = createFileRoute("/(app)/chat/")({
	component: SelectConversation,
});
