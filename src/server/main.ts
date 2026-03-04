import Elysia from "elysia";

export const serverApp = new Elysia({
	prefix: "/api",
})
	.get("/", () => ({ message: "Hello Elysia!" }))
	.get("/products", () => [{ id: 1, name: "Product 1" }])
	.get("/stores", () => [{ id: 1, name: "Store 1" }])
	.get("/foo/bar", () => ({ message: "Hello World" }));
