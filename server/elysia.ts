import Elysia from "elysia";
import { serverApp } from "@/server/main";
import { initializeStaticRoutes, log } from "./utils";

const app = new Elysia().use(serverApp);

const PORT = Number(process.env.PORT ?? 3000);
const CLIENT_DIRECTORY = "./dist/client";

const { routes } = await initializeStaticRoutes(CLIENT_DIRECTORY);

// Register static asset routes with Elysia
for (const [route, handler] of Object.entries(routes)) {
  app.get(route, ({ request }) => handler(request));
}

// Production: load the pre-built TanStack Start handler
// @ts-ignore
const { default: handler } = await import("../dist/server/server.js");
app.all("*", ({ request }) => 
    {
        try {
        return handler.fetch(request);
      } catch (error) {
        log.error(`Server handler error: ${String(error)}`);
        return new Response("Internal Server Error", { status: 500 });
      }
    }
);

app.listen(
  {
    maxRequestBodySize: 1024 * 1024 * 5, // 5MB
    port: PORT,
    error(error) {
        log.error(
            `Uncaught server error: ${error instanceof Error ? error.message : String(error)}`,
          );
      return new Response("Internal Server Error", { status: 500 });
    },
  },
  () => log.success(`Server running at http://localhost:${String(PORT)}`),
);
