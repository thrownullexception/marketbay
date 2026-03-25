import { createFileRoute } from "@tanstack/solid-router";

export const Route = createFileRoute("/merchant/(store)/promotions")({
	component: RouteComponent,
});

function RouteComponent() {
	return <div>Hello "/merchant/$storeId/pronotions"!</div>;
}
