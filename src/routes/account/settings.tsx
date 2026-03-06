import { createFileRoute } from "@tanstack/solid-router";

export const Route = createFileRoute("/account/settings")({
	component: RouteComponent,
});

function RouteComponent() {
	return <div>Hello "/(app)/account/settings"!</div>;
}
