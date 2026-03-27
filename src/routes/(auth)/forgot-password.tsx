import { createFileRoute } from "@tanstack/solid-router";
import { ForgotPasswordScreen } from "@/screens/auth/forgot-password";

export const Route = createFileRoute("/(auth)/forgot-password")({
	component: ForgotPasswordScreen,
});
