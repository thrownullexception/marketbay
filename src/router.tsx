import { createRouter } from "@tanstack/solid-router";
import { routeTree } from "./routeTree.gen";
import { NotFound } from "./screens/not-found";
import { DefaultCatchBoundary } from "./ui/error";

export function getRouter() {
	const router = createRouter({
		routeTree,
		defaultPreload: "intent",
		defaultErrorComponent: DefaultCatchBoundary,
		defaultNotFoundComponent: () => <NotFound />,
		scrollRestoration: true,
	});

	return router;
}
