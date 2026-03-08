import { createFileRoute } from "@tanstack/solid-router";

export const Route = createFileRoute("/account/payments")({
	component: RouteComponent,
});

function RouteComponent() {
	return <div>Hello "/(app)/account/payments"!</div>;
}
