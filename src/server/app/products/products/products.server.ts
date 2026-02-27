import { createServerFn } from "@tanstack/solid-start";
import { z } from "zod";

const UserSchema = z.object({
	name: z.string().min(1),
	age: z.number().min(0),
});

export const createUser = createServerFn({ method: "POST" })
	.inputValidator(UserSchema)
	.handler(async ({ data }) => {
		// data is fully typed and validated
		return `Created user: ${data.name}, age ${data.age}`;
	});
