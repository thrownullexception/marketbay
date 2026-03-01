import { createFileRoute } from "@tanstack/solid-router";

export const Route = createFileRoute("/(app)/message/$storeSlug")({
	component: RouteComponent,
});

function RouteComponent() {
	return <div>Hello "/(app)/message/$storeSlug"!</div>;
}
