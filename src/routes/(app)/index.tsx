import { createFileRoute } from "@tanstack/solid-router";
import ms from "ms";
import { HomeScreen } from "@/screens/shop/Home";
// import { getShopTreaty } from "@/server/shop";


export const Route = createFileRoute("/(app)/")({
	component: HomeScreen,
	loader: async () => {
		// const [products] = await Promise.all([
		// 	getShopTreaty()["user-adresses"].get(),
		// 	// getShopTreaty().stores.get(),
		// ]);
		return {
			// products: products.data || [],
			products:  [],
			// stores: stores.data || [],
			// notificationCount: getTreaty().notifications.get(),
		};
	},
	staleTime: ms("30m"),
	gcTime: Infinity,
});
