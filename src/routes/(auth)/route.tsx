import { createFileRoute } from "@tanstack/solid-router";
import { AuthLayout } from "@/screens/layout/auth";

export const Route = createFileRoute("/(auth)")({
	component: AuthLayout,
});
