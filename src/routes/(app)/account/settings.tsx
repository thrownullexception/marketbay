import { createFileRoute } from "@tanstack/solid-router";

export const Route = createFileRoute("/(app)/account/settings")({
	component: RouteComponent,
});

function RouteComponent() {
	return <div>Hello "/(app)/account/settings"!</div>;
}
