import { createFileRoute } from "@tanstack/solid-router";

export const Route = createFileRoute("/merchant/(store)/product-new")({
	component: RouteComponent,
});

function RouteComponent() {
	return <div>Hello "/(app)/st-admin/$storeId/product-new"!</div>;
}
