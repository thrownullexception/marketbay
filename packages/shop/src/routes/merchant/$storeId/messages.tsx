import { createFileRoute } from "@tanstack/solid-router";

export const Route = createFileRoute("/merchant/$storeId/messages")({
	component: RouteComponent,
});

function RouteComponent() {
	return <div>Hello "/merchant/$storeId/messages"!</div>;
}
