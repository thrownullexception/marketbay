import { createFileRoute } from "@tanstack/solid-router";
import { AccountLayout } from "@/screens/account/_Layout";

export const Route = createFileRoute("/account")({
	component: AccountLayout,
});
