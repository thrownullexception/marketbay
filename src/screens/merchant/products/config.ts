import type { StatusBadgeProps } from "@/ui/status-badge";
import type { ProductStatus } from "./types";

export const ProductStatusConfig: Record<ProductStatus, StatusBadgeProps> = {
	active: {
		label: "Active",
		variant: "emerald",
	},
	low_stock: {
		label: "Low Stock",
		variant: "red",
	},
	out_of_stock: {
		label: "Out of Stock",
		variant: "red",
	},
	draft: {
		label: "Draft",
		variant: "gray",
	},
};
