import Elysia from "elysia";

export const adminServerApp = new Elysia({
	prefix: "/api/admin",
}).get("/foo/bar", () => ({ message: "Hello World" }));
