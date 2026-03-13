import type { LucideIcon } from "lucide-solid";

export type ProductStatus = "active" | "low_stock" | "out_of_stock" | "draft";

export type MerchantProduct = {
	id: string;
	name: string;
	sku: string;
	variants: number;
	status: ProductStatus;
	inventory: number | null;
	price: string;
	comparePrice?: string;
	category: string;
	sold: number | null;
	Icon: LucideIcon;
	iconBg: string;
	iconColor: string;
};
