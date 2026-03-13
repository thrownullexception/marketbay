import { healthcheckPlugin } from "elysia-healthcheck";

export const healthcheckMiddleware = healthcheckPlugin({
	checks: {
		liveness: [
			() => ({ name: "database", healthy: true }),
			async () => {
				const isHealthy = true; // await checkRedisConnection();
				return {
					name: "redis",
					healthy: isHealthy,
					details: { host: "localhost:6379" },
				};
			},
		],
		readiness: [() => ({ name: "migrations", healthy: true })],
	},
	timeoutMs: 3000,
});
