import { createFileRoute } from "@tanstack/solid-router";
import { AuthLayout } from "@/screens/auth/_layout";
import { isGuestBeforeLoad } from "@/server/tanstack/is-authenticated";

export const Route = createFileRoute("/(auth)")({
	component: AuthLayout,
	beforeLoad: isGuestBeforeLoad,
});
