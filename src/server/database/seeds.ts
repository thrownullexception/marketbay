import { SQL } from "bun";
import { notInArray } from "drizzle-orm";
import { drizzle } from "drizzle-orm/bun-sql";
import type { PgTable } from "drizzle-orm/pg-core";
import { NOTIFICATION_TYPES_CONFIG } from "@/schemas/notification-types";
import { STORE_PERMISSION_CONFIG } from "@/schemas/store-permission";
import {
  typescriptSafeObjectDotEntries,
  typescriptSafeObjectDotKeys,
} from "@/shared/utils/objects";
import { buildConflictUpdateColumns } from "./conflicts";
import { NotificationTypeEntity, StorePermissionEntity } from "./schemas";

// biome-ignore lint/style/noNonNullAssertion: <foo>
const client = new SQL(process.env.DATABASE_URL!);

const db = drizzle({
  client,
  casing: "snake_case",
});

const CONFIG_DATA: {
  entity: PgTable;
  config: Record<string, { label: string }>;
}[] = [
  {
    entity: StorePermissionEntity,
    config: STORE_PERMISSION_CONFIG,
  },
  {
    entity: NotificationTypeEntity,
    config: NOTIFICATION_TYPES_CONFIG,
  },
];

const seedConfigData = async () => {
  for (const { entity, config } of CONFIG_DATA) {
    let order = 0;
    for (const [id, values] of typescriptSafeObjectDotEntries(config)) {
      order++;

      const { label, ...metadata } = values;

      const payload = {
        label,
        metadata,
        order,
      };
      await db
        .insert(entity)
        .values({
          id: id,
          ...payload,
        })
        .onConflictDoUpdate({
          // biome-ignore lint/suspicious/noExplicitAny: <foo>
          target: (entity as any).id,
          set: buildConflictUpdateColumns(
            entity,
            typescriptSafeObjectDotKeys(payload)
          ),
        });
    }

    await db
      .update(entity)
      .set({ active: false })
      .where(
        // biome-ignore lint/suspicious/noExplicitAny: <foo>
        notInArray((entity as any).id, typescriptSafeObjectDotKeys(config))
      );
  }
};

export const runSeeds = async () => {
  try {
    console.log("🔄 Running database seeds...");

    await seedConfigData();

    console.log(`🟢 Seeds ran successfully`);
  } catch (error) {
    console.error("🔴 Seeds failed:", error);
  } finally {
    await client.close();
  }
};

if (import.meta.main) {
  void (async () => {
    await runSeeds();
    process.exit(0);
  })();
}
