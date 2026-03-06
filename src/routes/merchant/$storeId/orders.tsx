import { createFileRoute } from "@tanstack/solid-router";
import { MerchantOrdersScreen } from "@/screens/merchant/orders";

export const Route = createFileRoute("/merchant/$storeId/orders")({
	component: MerchantOrdersScreen,
});
