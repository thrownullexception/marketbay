import Elysia from "elysia";
import { createServer } from "vite";
import { connect } from "elysia-connect-middleware";
import { merchantServerApp } from "@/server/merchant.app";
import { adminServerApp } from "@/server/admin.app";
import { shopServerApp } from "@/server/shop.app";
import { csrfMiddleware } from "@/server/middlewares/csrf";
import { healthcheckMiddleware } from "@/server/middlewares/health";
import { helmetMiddleware } from "@/server/middlewares/helmet";
import { loggerMiddleware } from "@/server/middlewares/logger";

const app = new Elysia()
  .use(csrfMiddleware)
  // .use(helmetMiddleware)
  .use(healthcheckMiddleware)
  .use(loggerMiddleware)
  .use(merchantServerApp)
  .use(adminServerApp)
  .use(shopServerApp);

const viteDevServer = await createServer({
  server: { middlewareMode: true },
});

// Development: use Vite middleware for HMR and asset serving
app.use(connect(viteDevServer.middlewares));

// Development: dynamically load TanStack Start handler via Vite SSR
app.all("*", async ({ request }) => {
  try {
    const { default: serverEntry } =
      await viteDevServer.ssrLoadModule("./src/server.ts");
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
  () => console.log(`Server running at http://localhost:${process.env.PORT ?? 3000}`),
);
