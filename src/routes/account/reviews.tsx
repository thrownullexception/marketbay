import { createFileRoute } from "@tanstack/solid-router";

export const Route = createFileRoute("/account/reviews")({
	component: RouteComponent,
});

function RouteComponent() {
	return <div>Hello "/(app)/account/reviews"!</div>;
}
