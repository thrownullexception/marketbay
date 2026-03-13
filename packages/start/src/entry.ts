import handler, { createServerEntry } from "@tanstack/solid-start/server-entry";
import pino from "pino";

const logger = pino();

export const solidStartServerEntry = createServerEntry({
	async fetch(request) {
		const start = performance.now();
		const url = new URL(request.url);

		const response = await handler.fetch(request);

		const duration = Math.round(performance.now() - start);
		logger.info(
			{ path: url.pathname, duration },
			`SSR: ${url.pathname} ${duration}ms`,
		);

		return response;
	},
});
