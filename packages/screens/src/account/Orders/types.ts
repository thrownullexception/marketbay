import type { OrderStatus } from "@/screens/merchant/orders/types";

export interface OrderItem {
	name: string;
	productSlug: string;
	quantity: number;
	price: string;
}

export interface Order {
	id: string;
	status: OrderStatus;
	storeName: string;
	storeSlug: string;
	storeInitials: string;
	storeGradient: string;
	items: OrderItem[];
	total: string;
	date: string;
	estimatedDelivery?: string;
}
