import { createFileRoute } from "@tanstack/solid-router";

export const Route = createFileRoute("/terms-of-service")({
	component: RouteComponent,
});

function RouteComponent() {
	return <div>TODO "/terms-of-service"!</div>;
}
