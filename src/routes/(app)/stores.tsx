import { createFileRoute, stripSearchParams } from "@tanstack/solid-router";
import * as v from "valibot";
import { StoresScreen } from "@/screens/shop/Stores";
import { DefaultCatchBoundary } from "@/ui/error";

const defaultValues = {
	category: "all",
} as const;

const storesSearchSchema = v.object({
	category: v.optional(v.string(), defaultValues.category),
});

export const Route = createFileRoute("/(app)/stores")({
	component: StoresScreen,
	loaderDeps: ({ search: { category } }) => ({ category }),
	loader: async ({ deps }) => {
		const category = deps.category;
		return { category, foo: "bar" };
	},
	errorComponent: DefaultCatchBoundary,
	validateSearch: storesSearchSchema,
	search: {
		middlewares: [stripSearchParams(defaultValues)],
	},
});
