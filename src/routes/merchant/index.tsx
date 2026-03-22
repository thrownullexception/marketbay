import { createFileRoute } from "@tanstack/solid-router";
import { MerchantStoresScreen } from "@/screens/merchant/Stores";

export const Route = createFileRoute("/merchant/")({
	component: MerchantStoresScreen,
});
