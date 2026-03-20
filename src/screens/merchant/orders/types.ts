import type { LucideIcon } from "lucide-solid";
import type { OrderStatus, PaymentStatus } from "@/schemas/order";

export type OrderItemSingle = {
	kind: "single";
	name: string;
	detail: string;
	Icon: LucideIcon;
	iconBg: string;
	iconColor: string;
};

export type OrderItemMultiple = {
	kind: "multiple";
	count: number;
	summary: string;
};

export type MerchantOrder = {
	id: string;
	date: string;
	customer: {
		name: string;
		email: string;
		initials: string;
		avatarBg: string;
		avatarText: string;
	};
	item: OrderItemSingle | OrderItemMultiple;
	total: string;
	status: OrderStatus;
	payment: PaymentStatus;
};
