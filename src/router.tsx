import { QueryClient } from "@tanstack/solid-query";
import { createRouter } from "@tanstack/solid-router";
import { setupRouterSsrQueryIntegration } from "@tanstack/solid-router-ssr-query";
import ms from "ms";
import { routeTree } from "./routeTree.gen";
import { NotFound } from "./screens/not-found";
import { DefaultCatchBoundary } from "./ui/error";

export function getRouter() {
	const queryClient = new QueryClient({
		defaultOptions: {
			queries: {
				staleTime: ms("30m"),
				gcTime: Infinity,
			},
		},
	});

	const router = createRouter({
		routeTree,
		defaultPreload: "intent",
		// defaultPreloadStaleTime: 0,
		context: { queryClient },
		defaultErrorComponent: DefaultCatchBoundary,
		defaultNotFoundComponent: () => <NotFound />,
		scrollRestoration: true,
	});

	setupRouterSsrQueryIntegration({
		router,
		queryClient,
	});

	return router;
}

declare module "@tanstack/solid-router" {
	interface Register {
		router: Awaited<ReturnType<typeof getRouter>>;
	}
}
