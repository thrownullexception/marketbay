import { createFileRoute } from "@tanstack/solid-router";
import { FollowingScreen } from "@/screens/account/Following";

export const Route = createFileRoute("/(app)/account/following")({
	component: FollowingScreen,
});
