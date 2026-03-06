import { createFileRoute } from "@tanstack/solid-router";
import { OrdersScreen } from "@/screens/account/Orders";

export const Route = createFileRoute("/account/orders")({
	component: OrdersScreen,
});
