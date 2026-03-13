import { createFileRoute } from "@tanstack/solid-router";

export const Route = createFileRoute("/account/addresses")({
	component: RouteComponent,
});

function RouteComponent() {
	return <div>Hello "/(app)/account/addresses"!</div>;
}
