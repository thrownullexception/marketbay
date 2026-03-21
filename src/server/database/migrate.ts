import { SQL } from "bun";
import { drizzle } from "drizzle-orm/bun-sql";
import { migrate } from "drizzle-orm/bun-sql/migrator";

// biome-ignore lint/style/noNonNullAssertion: <foo>
const client = new SQL(process.env.DATABASE_URL!);

const db = drizzle({
	client,
	casing: "snake_case",
});

export const runMigrations = async () => {
	try {
		console.log("🔄 Running database migrations...");

		await migrate(db, {
			migrationsFolder: "./migrations",
		});

		console.log("🟢 Migrations ran successfully");
	} catch (error) {
		console.error("🔴 Migration failed:", error);
	} finally {
		await client.close();
	}
};

if (import.meta.main) {
	void (async () => {
		await runMigrations();
		process.exit(0);
	})();
}
