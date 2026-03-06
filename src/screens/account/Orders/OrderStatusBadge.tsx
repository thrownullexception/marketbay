import { clsx } from "clsx";
import {
	CheckCircleIcon,
	ClockIcon,
	PackageIcon,
	TruckIcon,
	XCircleIcon,
} from "lucide-solid";
import type { OrderStatus } from "./types";

const statusConfig: Record<
	OrderStatus,
	{ label: string; bg: string; text: string; Icon: typeof TruckIcon }
> = {
	processing: {
		label: "Processing",
		bg: "bg-amber-50",
		text: "text-amber-600",
		Icon: ClockIcon,
	},
	shipped: {
		label: "Shipped",
		bg: "bg-blue-50",
		text: "text-blue-600",
		Icon: PackageIcon,
	},
	in_transit: {
		label: "In Transit",
		bg: "bg-blue-50",
		text: "text-blue-600",
		Icon: TruckIcon,
	},
	delivered: {
		label: "Delivered",
		bg: "bg-emerald-50",
		text: "text-emerald-600",
		Icon: CheckCircleIcon,
	},
	cancelled: {
		label: "Cancelled",
		bg: "bg-red-50",
		text: "text-red-500",
		Icon: XCircleIcon,
	},
	refunded: {
		label: "Refunded",
		bg: "bg-gray-100",
		text: "text-gray-500",
		Icon: XCircleIcon,
	},
};

export const OrderStatusBadge = (props: { status: OrderStatus }) => {
	const config = () => statusConfig[props.status];

	return (
		<span
			class={clsx(
				"inline-flex items-center gap-1.5 px-2.5 py-1 text-xs font-semibold rounded-lg",
				config().bg,
				config().text,
			)}
		>
			{(() => {
				const IconComp = config().Icon;
				return <IconComp class="w-3.5 h-3.5" />;
			})()}
			{config().label}
		</span>
	);
};
