import {
	ActiveFilters,
	PriceRangeFilter,
	RatingFilter,
} from "@/screens/_components/product-filters";

export const StoreSidebar = () => {
	return (
		<aside class="w-full lg:w-60 shrink-0">
			<div class="lg:sticky lg:top-[120px] space-y-6">
				<ActiveFilters />
				<CategoryFilter />
				<PriceRangeFilter />
				<RatingFilter />
			</div>
		</aside>
	);
};

const CategoryFilter = () => {
	const categories = [
		{ name: "All Products", count: "342", active: true },
		{ name: "Headphones", count: "48" },
		{ name: "Monitors", count: "32" },
		{ name: "Keyboards", count: "27" },
		{ name: "Speakers", count: "41" },
		{ name: "Cables & Adapters", count: "89" },
		{ name: "Phone Accessories", count: "65" },
		{ name: "Smart Home", count: "40" },
	];

	return (
		<div class="bg-white rounded-xl border border-gray-100 p-4">
			<h3 class="text-sm font-semibold text-gray-900 mb-3">Category</h3>
			<ul class="space-y-2 text-sm">
				{categories.map((cat) => (
					<li>
						<a
							href="#"
							class={`flex items-center justify-between ${
								cat.active
									? "text-brand-600 font-medium"
									: "text-gray-600 hover:text-brand-600 transition"
							}`}
						>
							<span>{cat.name}</span>
							<span class="text-xs text-gray-400">{cat.count}</span>
						</a>
					</li>
				))}
			</ul>
		</div>
	);
};
