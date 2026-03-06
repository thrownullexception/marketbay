import { createFileRoute } from "@tanstack/solid-router";
import { MerchantProductsScreen } from "@/screens/merchant/products";

export const Route = createFileRoute("/merchant/$storeId/products")({
	component: MerchantProductsScreen,
});
