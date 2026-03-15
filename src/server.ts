import handler, { createServerEntry } from "@tanstack/solid-start/server-entry";
import pino from "pino";

const logger = pino();

export default createServerEntry({
	async fetch(request) {
		const start = performance.now();
		const url = new URL(request.url);

		const response = await handler.fetch(request);

		const duration = Math.round(performance.now() - start);
		logger.info(
			{ path: url.pathname, duration },
			`SSR: ${url.pathname} ${duration}ms`,
		);

		const acceptEncoding = request.headers.get("accept-encoding") ?? "";
		if (!acceptEncoding.includes("gzip") || !response.body) {
			return response;
		}

		const body = await response.arrayBuffer();
		const compressed = Bun.gzipSync(new Uint8Array(body));
		const headers = new Headers(response.headers);
		headers.set("content-encoding", "gzip");
		headers.set("content-length", String(compressed.byteLength));

		return new Response(compressed, {
			status: response.status,
			statusText: response.statusText,
			headers,
		});
	},
});
