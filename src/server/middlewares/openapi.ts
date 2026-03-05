import { openapi } from "@elysiajs/openapi";
import { toJsonSchema } from "@valibot/to-json-schema";

const isProduction = process.env.NODE_ENV === "production";

export const openapiMiddleware = openapi({
	mapJsonSchema: {
		valibot: toJsonSchema,
	},
	path: "/docs",
	enabled: !isProduction,
});
