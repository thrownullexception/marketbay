import { createEnv } from "@t3-oss/env-core";
import { config } from "dotenv";
import * as v from "valibot";

config({ path: ["../../.env.local", "../../.env"] });

export const clientEnv = createEnv({
	client: {
		PUBLIC_API_URL: v.pipe(v.string(), v.minLength(1)),
	},
	runtimeEnv: process.env,
	emptyStringAsUndefined: true,
	clientPrefix: "PUBLIC_",
});

export type CLIENT_ENV = typeof clientEnv;
