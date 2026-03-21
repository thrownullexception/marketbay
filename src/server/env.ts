import { createEnv } from "@t3-oss/env-core";
import { config } from "dotenv";
import * as v from "valibot";

config({ path: ["../../.env.local", "../../.env"] });

export const serverEnv = createEnv({
	server: {
		DATABASE_URL: v.pipe(v.string(), v.minLength(1), v.url()),
		REDIS_HOST: v.pipe(v.string(), v.minLength(1)),
		RESEND_SECRET: v.pipe(v.string(), v.minLength(1)),
		SQIDS_ALPHABET: v.pipe(v.string(), v.length(62)),
		ENV: v.picklist(["local", "dev", "staging", "prod", "test"]),
	},
	runtimeEnv: process.env,
	/**
	 * By default, this library will feed the environment variables directly to
	 * the Zod validator.
	 *
	 * This means that if you have an empty string for a value that is supposed
	 * to be a number (e.g. `PORT=` in a ".env" file), Zod will incorrectly flag
	 * it as a type mismatch violation. Additionally, if you have an empty string
	 * for a value that is supposed to be a string with a default value (e.g.
	 * `DOMAIN=` in an ".env" file), the default value will never be applied.
	 *
	 * In order to solve these issues, we recommend that all new projects
	 * explicitly specify this option as true.
	 */
	emptyStringAsUndefined: true,
});

export type SERVER_ENV = typeof serverEnv;
