import { createFileRoute } from "@tanstack/solid-router";
import { OrdersScreen } from "@/screens/account/Orders";

export const Route = createFileRoute("/(app)/account/orders")({
	component: OrdersScreen,
});
