import { createFileRoute } from "@tanstack/solid-router";
import { MerchantLayout } from "@/screens/merchant/_Layout";

export const Route = createFileRoute("/merchant/$storeId")({
	component: MerchantLayout,
});
