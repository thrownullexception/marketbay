import { createFileRoute } from "@tanstack/solid-router";
import { ShopStorePolicies } from "@/screens/shop/Store/Policies";

export const Route = createFileRoute("/(app)/store/$storeSlug/policies")({
	component: ShopStorePolicies,
});
