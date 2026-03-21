export enum StorePermissions {
	ViewOrders = "ov",
	ProcessOrders = "op",
	ManageProducts = "pm",
	ViewAnalytics = "av",
	ManagePromotions = "rm",
	ViewPayouts = "pv",
	ManageTeam = "tm",
	EditStore = "es",
	RespondToMessages = "rs",
}

export const STORE_PERMISSION_CONFIG: Record<
	StorePermissions,
	{
		label: string;
	}
> = {
	[StorePermissions.EditStore]: {
		label: "Can Edit Store",
	},
	[StorePermissions.ManageProducts]: {
		label: "Can Manage Products",
	},
	[StorePermissions.ManagePromotions]: {
		label: "Can Manage Promotions",
	},
	[StorePermissions.ManageTeam]: {
		label: "Can Manage Team",
	},
	[StorePermissions.ViewOrders]: {
		label: "Can View Orders",
	},
	[StorePermissions.ProcessOrders]: {
		label: "Can Process Orders",
	},
	[StorePermissions.ViewAnalytics]: {
		label: "Can View Analytics",
	},
	[StorePermissions.ViewPayouts]: {
		label: "Can View Payouts",
	},
	[StorePermissions.RespondToMessages]: {
		label: "Can Respond to Messages",
	},
};
