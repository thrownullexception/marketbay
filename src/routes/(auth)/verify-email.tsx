import { createFileRoute } from "@tanstack/solid-router";
import { VerifyEmailScreen } from "@/screens/auth/verify-email";

export const Route = createFileRoute("/(auth)/verify-email")({
	component: VerifyEmailScreen,
});
