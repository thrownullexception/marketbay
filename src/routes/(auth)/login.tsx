import { createFileRoute } from "@tanstack/solid-router";
import { LoginScreen } from "@/screens/auth/login";

export const Route = createFileRoute("/(auth)/login")({
	component: LoginScreen,
});
