import path from "node:path";
import { fileURLToPath } from "node:url";
import Elysia from "elysia";
import { connect } from "elysia-connect-middleware";
import { createServer } from "vite";

export const createDevServer = async (
// biome-ignore lint/suspicious/noExplicitAny: let it go
    elysiaServerApp: Elysia<any, any, any, any, any, any, any>,
	entryModuleUrl: string,
) => {
	const app = new Elysia().use(elysiaServerApp);
	const entryFilePath = fileURLToPath(entryModuleUrl);
	const serverPath = path.resolve(path.dirname(entryFilePath), "./src/server.ts");

	const viteDevServer = await createServer({
		server: { middlewareMode: true },
	});

	// Development: use Vite middleware for HMR and asset serving
	app.use(connect(viteDevServer.middlewares));

	// Development: dynamically load TanStack Start handler via Vite SSR
	app.all("*", async ({ request }) => {
		try {
			const { default: serverEntry } =
				await viteDevServer.ssrLoadModule(serverPath);
			return serverEntry.fetch(request);
		} catch (error) {
			if (error instanceof Error) viteDevServer.ssrFixStacktrace(error);
			console.error(error);
			return new Response("Internal Server Error", { status: 500 });
		}
	});

	app.listen(
		{
			port: Number(process.env.PORT ?? 3000),
		},
		() =>
			console.log(
				`Server running at http://localhost:${process.env.PORT ?? 3000}`,
			),
	);
};
