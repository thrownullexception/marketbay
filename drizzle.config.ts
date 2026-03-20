import { defineConfig } from 'drizzle-kit'
import { config } from "dotenv";

config({ path: ["./.env.local", "./.env"] });

export default defineConfig({
  schema: './src/server/database/schemas.ts',
  out: './src/server/database/migrations',
  dialect: 'postgresql',
  casing: 'snake_case',
  dbCredentials: {
    url: process.env.DATABASE_URL!,
  },
})
