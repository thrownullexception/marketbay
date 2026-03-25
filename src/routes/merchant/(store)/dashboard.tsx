import { createFileRoute } from "@tanstack/solid-router";

export const Route = createFileRoute("/merchant/(store)/dashboard")({
	component: RouteComponent,
});

function RouteComponent() {
	return <div>Hello "/(app)/st-admin/$storeId/dashboard"!</div>;
}
