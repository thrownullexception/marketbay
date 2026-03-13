import { createFileRoute } from "@tanstack/solid-router";

export const Route = createFileRoute("/privacy-policy")({
	component: RouteComponent,
});

function RouteComponent() {
	return <div>TODO "/privacy-policy"!</div>;
}
