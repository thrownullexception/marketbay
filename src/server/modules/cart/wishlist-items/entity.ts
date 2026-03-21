import { pgTable, unique } from "drizzle-orm/pg-core";
import { WishListItemId } from "@/schemas/wishlist-item";
import { baseDbSchema } from "@/server/database/base-schema";
import { referencesProductVariantEntity } from "../../catalog/product-variants/entity";
import { referencesProductEntity } from "../../catalog/products/entity";
import { referencesUserEntity } from "../../identity/users/entity";

export const WishListItemEntity = pgTable(
	"wishlist_items",
	baseDbSchema(WishListItemId, {
		userId: referencesUserEntity("cascade").notNull(),
		productId: referencesProductEntity("cascade").notNull(),
		productVariantId: referencesProductVariantEntity("cascade").notNull(),
	}),
	(t) => [unique().on(t.userId, t.productId, t.productVariantId)],
);
