import { createFileRoute } from "@tanstack/solid-router";
import { CartScreen } from "@/screens/shop/Cart";

export const Route = createFileRoute("/(app)/cart")({
	component: CartScreen,
});
