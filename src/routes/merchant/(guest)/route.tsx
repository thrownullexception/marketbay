import { createFileRoute } from "@tanstack/solid-router";
import { MerchantNoStoreLayout } from "@/screens/merchant/_Layout";
import { isAuthenticatedBeforeLoad } from "@/server/tanstack/is-authenticated";

export const Route = createFileRoute("/merchant/(guest)")({
	component: MerchantNoStoreLayout,
	beforeLoad: isAuthenticatedBeforeLoad,
});
