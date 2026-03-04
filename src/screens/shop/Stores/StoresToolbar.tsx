import { getRouteApi, Link } from "@tanstack/solid-router";
import { createEffect } from "solid-js";

const categories = [
	{ name: "All Stores", value: "all" },
	{ name: "Electronics", value: "electronics" },
	{ name: "Fashion", value: "fashion" },
	{ name: "Beauty", value: "beauty" },
	{ name: "Home", value: "home" },
	{ name: "Sports", value: "sports" },
	{ name: "Books", value: "books" },
	{ name: "Groceries", value: "groceries" },
];

export const StoresToolbar = () => {
	const routeApi = getRouteApi("/(app)/stores");
	const foo = routeApi.useLoaderData();

	createEffect(() => {
		console.log(foo());
	});

	return (
		<div class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
			<div class="flex items-center gap-2 overflow-x-auto scrollbar-hide pb-1">
				{categories.map((cat) => (
					<Link
						to="/stores"
						search={{ category: cat.value }}
						activeOptions={{ exact: true, includeSearch: true }}
						class="px-4 py-2 text-xs font-semibold rounded-full whitespace-nowrap"
						activeProps={{
							class: "bg-brand-600 text-white",
						}}
						inactiveProps={{
							class:
								"bg-white text-gray-600 border border-gray-200 hover:border-brand-300 hover:text-brand-600 transition",
						}}
					>
						{cat.name}
					</Link>
				))}
			</div>
			<select class="text-sm border border-gray-200 rounded-lg px-3 py-2 bg-white text-gray-600 focus:outline-none focus:ring-2 focus:ring-brand-400 focus:border-transparent cursor-pointer shrink-0">
				<option>Sort: Most Popular</option>
				<option>Top Rated</option>
				<option>Most Products</option>
				<option>Most Followers</option>
				<option>Newest</option>
			</select>
		</div>
	);
};
