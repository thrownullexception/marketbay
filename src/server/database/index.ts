import { SQL } from "bun";

import { drizzle } from "drizzle-orm/bun-sql";

import { serverEnv } from "@/server/env";
import { cacheService } from "../services/cache";
import { DrizzleCache } from "./cache";
import * as schema from "./schemas";

export type Database = typeof db;

const pool = new SQL({
	url: serverEnv.DATABASE_URL,
	tls: false,
	idleTimeout: 0,
});

export const db = drizzle(pool, {
	schema,
	casing: "snake_case",
	cache: new DrizzleCache(cacheService),
});
