import { idField } from "@/database/base-schema";
import { UserEntity } from "@/server/app/accounts/users/entity";
import type { UserId } from "@/server/app/accounts/users/schemas";
import { StoreEntity } from "@/server/app/stores/stores/entity";
import type { StoreId } from "@/server/app/stores/stores/schemas";

export const referencesUserEntity = () => {
	return idField()
		.references(() => UserEntity.id, {
			onDelete: "restrict",
		})
		.$type<UserId>()
		.notNull();
};

export const referencesStoreEntity = () => {
	return idField()
		.references(() => StoreEntity.id, {
			onDelete: "restrict",
		})
		.$type<StoreId>()
		.notNull();
};
