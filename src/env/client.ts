import { createEnv } from "@t3-oss/env-core";
import { config } from "dotenv";
import * as v from "valibot";

config({ path: ["../../.env.local", "../../.env"] });

export const clientEnv = createEnv({
	clientPrefix: "PUBLIC_",
	client: {
		PUBLIC_APP_TITLE: v.optional(v.pipe(v.string(), v.minLength(1))),
	},
	runtimeEnv: process.env,
	emptyStringAsUndefined: true,
});

export type CLIENT_ENV = typeof clientEnv;
