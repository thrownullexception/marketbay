import { createFileRoute } from "@tanstack/solid-router";

export const Route = createFileRoute("/marketplace-guidelines")({
	component: RouteComponent,
});

function RouteComponent() {
	return <div>Marketplace Guidelines</div>;
}
