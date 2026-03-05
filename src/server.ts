import handler, { createServerEntry } from "@tanstack/solid-start/server-entry";

console.log("on load");

export default createServerEntry({
	async fetch(request) {
		console.log(request);

		const foo = await handler.fetch(request);

		console.log(foo);

		return foo;
	},
});
