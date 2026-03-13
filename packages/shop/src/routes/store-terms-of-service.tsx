import { createFileRoute } from "@tanstack/solid-router";

export const Route = createFileRoute("/store-terms-of-service")({
	component: RouteComponent,
});

function RouteComponent() {
	return <div>Store Terms of Service</div>;
}
