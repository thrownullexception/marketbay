import {
  boolean,
  integer,
  numeric,
  pgEnum,
  pgTable,
  text,
  type UpdateDeleteAction,
  unique,
  varchar,
} from "drizzle-orm/pg-core";
import { StoreStatus } from "@/schemas/store";
import { baseDbSchema, idField } from "@/server/database/base-schema";
import { getEnumValues } from "@/server/database/enums";
import { referencesCategoryEntity } from "../../catalog/categories/entity";
import { type StoreId, StoreIdTransformer } from "./types";

export const storeStatus = pgEnum("store_status", getEnumValues(StoreStatus));

export const StoreEntity = pgTable(
  "stores",
	baseDbSchema(StoreIdTransformer.unoPrivate, {
    name: text().notNull(),
    slug: text().notNull(),
    tagline: varchar({
      length: 60,
    }),
    description: varchar({
      length: 500,
    }),
    logoUrl: text(),
    coverUrl: text(),
    status: storeStatus().notNull().default(StoreStatus.Active),

    primaryCategoryId: referencesCategoryEntity().notNull(),
    secondaryCategoryId: referencesCategoryEntity(),

    legalBusinessName: text().notNull(),
    businessId: text(),

    street: text().notNull(),
    city: text().notNull(),
    state: text().notNull(),
    country: text().notNull(),
    zip: text().notNull(),

    email: text(),
    phone: text(),
    website: text(),
    instagram: text(),
    twitter: text(),

    /*
 *
 *	FACEBOOK = "facebook",
	YOUTUBE = "youtube",
	TIKTOK = "tiktok",
	TELEGRAM = "telegram",
 *
 */

    // Cached metrics (denormalized for performance)
    avgRating: numeric({
      precision: 3,
      scale: 2,
    }).notNull().default("0.0"),
    ratingsCount: integer().notNull().default(0),
    followersCount: integer().notNull().default(0),
    productsCount: integer().notNull().default(0),

    isVerified: boolean().notNull().default(false),
  }),
  (t) => [unique().on(t.slug)],
);

export const referencesStoreEntity = (constraint?: UpdateDeleteAction) => {
  return idField()
    .references(() => StoreEntity.id, {
      onDelete: constraint || "restrict",
    })
    .$type<StoreId>();
};
