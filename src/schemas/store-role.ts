import { typescriptSafeObjectDotKeys } from "@/shared/utils/objects";
import { STORE_PERMISSION_CONFIG, StorePermissions } from "./store-permission";

export enum StoreRole {
	Owner = "owner",
	Manager = "manager",
	Staff = "staff",
}

export const SYSTEM_ROLE_CONFIG: Record<
	StoreRole,
	{
		label: string;
		permissions: StorePermissions[];
	}
> = {
	[StoreRole.Owner]: {
		label: "Owner",
		permissions: typescriptSafeObjectDotKeys(STORE_PERMISSION_CONFIG),
	},
	[StoreRole.Manager]: {
		label: "Manager",
		permissions: typescriptSafeObjectDotKeys(STORE_PERMISSION_CONFIG).filter(
			(x) => x !== StorePermissions.ManageTeam,
		),
	},
	[StoreRole.Staff]: {
		label: "Owner",
		permissions: [
			StorePermissions.ManageProducts,
			StorePermissions.ViewOrders,
			StorePermissions.ProcessOrders,
			StorePermissions.RespondToMessages,
		],
	},
};
