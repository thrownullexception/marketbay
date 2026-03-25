import { createFileRoute } from "@tanstack/solid-router";

export const Route = createFileRoute("/merchant/(store)/payouts")({
	component: RouteComponent,
});

function RouteComponent() {
	return <div>Hello "/merchant/$storeId/payouts"!</div>;
}
