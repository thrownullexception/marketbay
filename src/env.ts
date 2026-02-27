import { createEnv } from "@t3-oss/env-core";
import { config } from "dotenv";
import * as v from "valibot";

config({ path: ["../.env.local", "../.env"] });

export const env = createEnv({
    server: {
        DATABASE_URL: v.pipe(v.string(), v.url()),
        REDIS_HOST: v.string(),
        RESEND_SECRET: v.string(),
        ENV: v.picklist(["local", "dev", "staging", "prod", "test"]),
    },
    clientPrefix: "PUBLIC_",
    client: {
        PUBLIC_APP_TITLE: v.optional(v.pipe(v.string(), v.minLength(1))),
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

export type ENV = typeof env;
