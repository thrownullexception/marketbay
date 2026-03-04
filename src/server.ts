import handler, { createServerEntry } from "@tanstack/solid-start/server-entry";

console.log("on load");

export default createServerEntry({
	fetch(request) {
		return handler.fetch(request);
	},
});
