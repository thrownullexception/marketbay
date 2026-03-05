import { createFileRoute } from "@tanstack/solid-router";

export const Route = createFileRoute("/merchant/$storeId/settings")({
	component: RouteComponent,
});

function RouteComponent() {
	return <div>Hello "/(app)/st-admin/$storeId/settings"!</div>;
}
