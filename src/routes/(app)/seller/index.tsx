import { createFileRoute } from "@tanstack/solid-router";

export const Route = createFileRoute("/(app)/seller/")({
	component: RouteComponent,
});

function RouteComponent() {
	return <div>Hello "/(app)/st-admin/"!</div>;
}
