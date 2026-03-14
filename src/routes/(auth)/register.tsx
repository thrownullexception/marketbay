import { createFileRoute } from "@tanstack/solid-router";
import { RegisterScreen } from "@/screens/auth/register";

export const Route = createFileRoute("/(auth)/register")({
	component: RegisterScreen,
});
