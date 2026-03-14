import {
	CircleCheckIcon,
	CircleXIcon,
	ClockIcon,
	PackageIcon,
	RotateCcwIcon,
	TruckIcon,
} from "lucide-solid";
import type { OrderStatus, PaymentStatus } from "@/schemas/orders";
import type { StatusBadgeProps } from "@/screens/_components/status-badge";

export const OrderStatusConfig: Record<OrderStatus, StatusBadgeProps> = {
	pending: {
		label: "Pending",
		variant: "amber",
		pulseDot: true,
		Icon: ClockIcon,
	},
	processing: {
		label: "Processing",
		variant: "violet",
		Icon: ClockIcon,
	},
	shipped: {
		label: "Shipped",
		variant: "blue",
		Icon: PackageIcon,
	},
	in_transit: {
		label: "In Transit",
		variant: "blue",
		Icon: TruckIcon,
	},
	delivered: {
		label: "Delivered",
		variant: "emerald",
		Icon: CircleCheckIcon,
	},
	cancelled: {
		label: "Cancelled",
		variant: "gray",
		Icon: CircleXIcon,
	},
	return: {
		label: "Return",
		variant: "red",
		Icon: RotateCcwIcon,
	},
	refunded: {
		label: "Refunded",
		variant: "gray",
		Icon: CircleXIcon,
	},
};

export const PaymentStatusConfig: Record<PaymentStatus, StatusBadgeProps> = {
	refund_pending: {
		label: "Refund Pending",
		variant: "amber",
		Icon: ClockIcon,
	},
	paid: {
		label: "Paid",
		variant: "emerald",
		Icon: CircleCheckIcon,
	},
};
