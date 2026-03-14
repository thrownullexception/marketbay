import { LayoutGrid, ListIcon, SlidersHorizontalIcon } from "lucide-solid";
import { SimpleSelect } from "@/ui/input-select";

export const SearchToolbar = () => {
	return (
		<div class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-6">
			<div class="flex items-center gap-3">
				<button
					type="button"
					class="lg:hidden inline-flex items-center gap-1.5 px-3.5 py-2 border border-gray-200 rounded-xl text-sm font-semibold text-gray-600 hover:bg-gray-50 transition"
				>
					<SlidersHorizontalIcon class="w-4 h-4" />
					Filters
				</button>
				<p class="text-sm text-gray-500">
					Showing <span class="font-semibold text-gray-700">1–12</span> of{" "}
					<span class="font-semibold text-gray-700">156</span> results
				</p>
			</div>
			<div class="flex items-center gap-3">
				<SimpleSelect
					options={[
						{ label: "Best Match", value: "best_match" },
						{ label: "Price: Low to High", value: "price_low_to_high" },
						{ label: "Price: High to Low", value: "price_high_to_low" },
						{ label: "Newest First", value: "newest_first" },
						{ label: "Top Rated", value: "top_rated" },
						{ label: "Most Sold", value: "most_sold" },
					]}
				/>
				<div class="hidden sm:flex items-center border border-gray-200 rounded-lg overflow-hidden">
					<button
						type="button"
						class="p-2 bg-brand-50 text-brand-600"
						aria-label="Grid view"
					>
						<LayoutGrid class="w-4 h-4" />
					</button>
					<button
						type="button"
						class="p-2 text-gray-400 hover:text-gray-600"
						aria-label="List view"
					>
						<ListIcon class="w-4 h-4" />
					</button>
				</div>
			</div>
		</div>
	);
};
