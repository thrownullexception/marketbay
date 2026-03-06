import { createFileRoute } from "@tanstack/solid-router";

export const Route = createFileRoute("/(app)/account/wishlist")({
	component: RouteComponent,
});

function RouteComponent() {
	return <div>Hello "/(app)/account/wishlist"!</div>;
}
