import { createFileRoute } from "@tanstack/solid-router";
import { MinimalLayout } from "@/screens/layout/light";

export const Route = createFileRoute("/(forms)")({
	component: MinimalLayout,
});
