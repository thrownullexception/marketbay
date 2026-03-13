import { createFileRoute } from "@tanstack/solid-router";
import { RegisterScreen } from "@/screens/auth/Register";

export const Route = createFileRoute("/(auth)/register")({
	component: RegisterScreen,
});
