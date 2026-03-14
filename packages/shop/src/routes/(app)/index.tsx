import { createFileRoute } from "@tanstack/solid-router";
import ms from "ms";
import { HomeScreen } from "@/screens/shop/Home";

export const Route = createFileRoute("/(app)/")({
	component: HomeScreen,
	loader: async () => {
		// const [products, stores] = await Promise.all([
		// 	getTreaty().products.get(),
		// 	getTreaty().stores.get(),
		// ]);

		return {
			products: [],
			stores: [],

			// products: products.data || [],
			// stores: stores.data || [],
			// notificationCount: getTreaty().notifications.get(),
		};
	},
	staleTime: ms("30m"),
	gcTime: Infinity,
});
