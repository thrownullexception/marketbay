import { createFileRoute } from "@tanstack/solid-router";
import { ForgotPasswordScreen } from "@/screens/auth/ForgotPassword";

export const Route = createFileRoute("/(auth)/forgotpassword")({
	component: ForgotPasswordScreen,
});
