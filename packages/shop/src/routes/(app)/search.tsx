import { createFileRoute, stripSearchParams } from "@tanstack/solid-router";
import * as v from "valibot";
import { SearchScreen } from "@/screens/shop/Search";

const defaultValues = {
	deals: false,
	newArrivals: false,
	bestSellers: false,
	page: 1,
	filter: "",
	sort: "newest",
} as const;

const productSearchSchema = v.object({
	page: v.optional(
		v.fallback(v.number(), defaultValues.page),
		defaultValues.page,
	),
	filter: v.optional(
		v.fallback(v.string(), defaultValues.filter),
		defaultValues.filter,
	),
	sort: v.optional(
		v.fallback(v.picklist(["newest", "oldest", "price"]), defaultValues.sort),
		defaultValues.sort,
	),
	deals: v.optional(
		v.fallback(v.boolean(), defaultValues.deals),
		defaultValues.deals,
	),
	newArrivals: v.optional(
		v.fallback(v.boolean(), defaultValues.newArrivals),
		defaultValues.newArrivals,
	),
	bestSellers: v.optional(
		v.fallback(v.boolean(), defaultValues.bestSellers),
		defaultValues.bestSellers,
	),
});

export const Route = createFileRoute("/(app)/search")({
	component: SearchScreen,
	validateSearch: productSearchSchema,
	search: {
		middlewares: [stripSearchParams(defaultValues)],
	},
});
