import { createFileRoute } from "@tanstack/solid-router";
import ms from "ms";
import { HomeScreen } from "@/screens/shop/Home";
import { getTreaty } from "@/treaty";

export const Route = createFileRoute("/(app)/")({
	component: HomeScreen,
	loader: async () => {
		const [products, stores] = await Promise.all([
			getTreaty().products.get(),
			getTreaty().stores.get(),
		]);
		return {
			products: products.data || [],
			stores: stores.data || [],
		};
	},
	staleTime: ms("1m"),
	gcTime: ms("24h"),
	// ssr: false, // "data-only",
});
