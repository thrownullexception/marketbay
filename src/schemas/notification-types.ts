export enum NotificationTypes {
	NewMessage = "nm",
	OrderStatusUpdate = "os",
	WishlistPriceDrops = "wp",
	ReviewResponse = "rv",
	PromotionsAndDeals = "pd",
	// Store
	NewOrder = "no",
	LowStockAlert = "ls",
	NewProductReview = "np",
	NewStoreReview = "sr",
	NewStoreMessage = "ns",
	ReturnRequest = "rr",
	PayoutProcessed = "pp",
	PerformanceAlert = "pa",
	PlatformUpdate = "pu",
}

export const NOTIFICATION_TYPES_CONFIG: Record<
	NotificationTypes,
	{
		label: string;
		type: "store" | "user";
	}
> = {
	[NotificationTypes.NewMessage]: {
		label: "New Message",
		type: "user",
	},
	[NotificationTypes.OrderStatusUpdate]: {
		label: "Order Status Update",
		type: "user",
	},
	[NotificationTypes.WishlistPriceDrops]: {
		label: "Wishlist Price Drops",
		type: "user",
	},
	[NotificationTypes.ReviewResponse]: {
		label: "Review Response",
		type: "user",
	},
	[NotificationTypes.PromotionsAndDeals]: {
		label: "Promotions and Deals",
		type: "user",
	},
	[NotificationTypes.NewOrder]: {
		label: "New Order",
		type: "store",
	},
	[NotificationTypes.LowStockAlert]: {
		label: "Low Stock Alert",
		type: "store",
	},
	[NotificationTypes.NewProductReview]: {
		label: "New Product Review",
		type: "store",
	},
	[NotificationTypes.NewStoreReview]: {
		label: "New Store Review",
		type: "store",
	},
	[NotificationTypes.NewStoreMessage]: {
		label: "New Store Message",
		type: "store",
	},
	[NotificationTypes.ReturnRequest]: {
		label: "Return Request",
		type: "store",
	},
	[NotificationTypes.PayoutProcessed]: {
		label: "Payout Processed",
		type: "store",
	},
	[NotificationTypes.PerformanceAlert]: {
		label: "Performance Alert",
		type: "store",
	},
	[NotificationTypes.PlatformUpdate]: {
		label: "Platform Update",
		type: "store",
	},	
};
