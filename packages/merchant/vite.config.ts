import { fileURLToPath } from "node:url";
import tailwindcss from "@tailwindcss/vite";
import { tanstackStart } from "@tanstack/solid-start/plugin/vite";
import { defineConfig } from "vite";
import viteSolid from "vite-plugin-solid";
import tsConfigPaths from "vite-tsconfig-paths";

export default defineConfig({
	resolve: {
		alias: {
			"@/ui/*": fileURLToPath(new URL("../packages/ui/src", import.meta.url)),
			"@/screens/*": fileURLToPath(
				new URL("../packages/screens/src", import.meta.url),
			),
			"@/api/*": fileURLToPath(new URL("../packages/api/src", import.meta.url)),
			"@/components/*": fileURLToPath(
				new URL("../packages/components/src", import.meta.url),
			),
			"@/start/*": fileURLToPath(
				new URL("../packages/start/src", import.meta.url),
			),
			"@/shared/*": fileURLToPath(
				new URL("../packages/shared/src", import.meta.url),
			),
			"@/schemas/*": fileURLToPath(
				new URL("../packages/schemas/src", import.meta.url),
			),
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
