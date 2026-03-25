import { createFileRoute } from "@tanstack/solid-router";
import { MerchantStoreLayout } from "@/screens/merchant/_Layout";
import { canAccessMerchantStoreBeforeLoad } from "@/server/tanstack/can-access-merchant-store";

export const Route = createFileRoute("/merchant/(store)")({
	component: MerchantStoreLayout,
	beforeLoad: canAccessMerchantStoreBeforeLoad,
});
