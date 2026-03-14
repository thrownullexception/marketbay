import { fileURLToPath } from "node:url";
import tailwindcss from "@tailwindcss/vite";
import { tanstackStart } from "@tanstack/solid-start/plugin/vite";
import { defineConfig } from "vite";
import viteSolid from "vite-plugin-solid";
import tsConfigPaths from "vite-tsconfig-paths";

export default defineConfig({
	resolve: {
		alias: {
			"@/ui": fileURLToPath(new URL("../screens/src/ui", import.meta.url)),
			"@/components": fileURLToPath(
				new URL("../screens/src/components", import.meta.url),
			),
			"@/screens": fileURLToPath(new URL("../screens/src", import.meta.url)),
			"@/api": fileURLToPath(new URL("../api/src", import.meta.url)),
			"@/schemas": fileURLToPath(new URL("../shared/src/schemas", import.meta.url)),
			"@/shared": fileURLToPath(new URL("../shared/src", import.meta.url)),
		},
	},
	server: {
		port: 3000,
	},
	plugins: [
		tailwindcss(),
		tsConfigPaths({
			projects: ["./tsconfig.json"],
		}),
		tanstackStart({}),
		viteSolid({ ssr: true }),
	],
});
