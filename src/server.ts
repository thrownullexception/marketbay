import handler, { createServerEntry } from "@tanstack/solid-start/server-entry";
import pino from "pino";

// import { runMigrations } from "./server/database/migrate";
// import { runSeeds } from "./server/database/seeds";

const logger = pino();

// await (async () => {
//   await runMigrations();
//   await runSeeds();
// })();

console.log("Hello started start server");

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
		const gzipStart = performance.now();	
		const compressed = Bun.gzipSync(new Uint8Array(body));
		const gzipDuration = Math.round(performance.now() - gzipStart);
		logger.info(
			{ path: url.pathname, gzipDuration },
			`GZIP: ${url.pathname} ${gzipDuration}ms`,
		);

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
