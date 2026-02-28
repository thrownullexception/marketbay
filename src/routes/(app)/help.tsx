import { createFileRoute } from "@tanstack/solid-router";
import { HelpScreen } from "@/screens/shop/Help";

export const Route = createFileRoute("/(app)/help")({
	component: HelpScreen,
});
