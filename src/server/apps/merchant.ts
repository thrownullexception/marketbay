import Elysia from "elysia";
import * as v from "valibot";

export const merchantServerApp = new Elysia({
	prefix: "/api/merchant",
})
	.get("/", () => ({ message: "Hello Elysia!" }))
	.get("/products", () => [{ id: 1, name: "Product 1" }])
	.get("/stores", () => [{ id: 1, name: "Store 1" }])
	.post("/stores", () => [{ id: 1, name: "Store Created 1" }], {
		body: v.object({
			name: v.pipe(v.string(), v.minLength(1)),
		}),
		response: {
			200: v.array(
				v.object({
					// id: v.number(),
					name: v.string(),
				}),
			),
		},
	})
	.get("/foo/bar", () => ({ message: "Hello World" }))
	.get("/notifications", () => ({ count: 10 }));
