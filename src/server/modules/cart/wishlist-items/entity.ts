import { pgTable, unique } from "drizzle-orm/pg-core";
import { baseDbSchema } from "@/server/database/base-schema";
import { referencesProductVariantEntity } from "../../catalog/product-variants/entity";
import { referencesProductEntity } from "../../catalog/products/entity";
import { referencesUserEntity } from "../../identity/users/entity";
import { WishlistItemIdTransformer } from "./types";

export const WishListItemEntity = pgTable(
	"wishlist_items",
	baseDbSchema(WishlistItemIdTransformer.unoPrivate, {
		userId: referencesUserEntity("cascade").notNull(),
		productId: referencesProductEntity("cascade").notNull(),
		productVariantId: referencesProductVariantEntity("cascade").notNull(),
	}),
	(t) => [unique().on(t.userId, t.productId, t.productVariantId)],
);
