import { createFileRoute } from "@tanstack/solid-router";
import { AuthLayout } from "@/screens/layout";

export const Route = createFileRoute("/(auth)")({
	component: AuthLayout,
});
