import { createFileRoute } from "@tanstack/solid-router";
import ms from "ms";
import { HomeScreen } from "@/screens/shop/Home";
import { todaysDealsQuery } from "@/screens/shop/Home/TodaysDeals";


export const Route = createFileRoute("/(app)/")({
	component: HomeScreen,
	loader: ({ context }) => context.queryClient.ensureQueryData(todaysDealsQuery),
	staleTime: ms("30m"),
	gcTime: Infinity,
});
