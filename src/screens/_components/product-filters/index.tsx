import { XIcon } from "lucide-solid";
import { For, type JSX } from "solid-js";
import { StarIcon } from "@/ui/icons";

export const FilterShell = (props: {
	title: string;
	children: JSX.Element;
}) => {
	return (
		<div class="bg-white rounded-xl border border-gray-100 p-4">
			<h3 class="text-sm font-semibold text-gray-900 mb-3">{props.title}</h3>
			<div class="space-y-2 text-sm">{props.children}</div>
		</div>
	);
};

export const PriceRangeFilter = () => {
	const ranges = [
		{ label: "Under $25" },
		{ label: "$25 – $50" },
		{ label: "$50 – $100", checked: true },
		{ label: "$100 – $300" },
		{ label: "Over $300" },
	];

	return (
		<FilterShell title="Price Range">
			<For each={ranges}>
				{(range) => (
					<label class="flex items-center gap-2 cursor-pointer">
						<input
							type="checkbox"
							class="rounded border-gray-300 text-brand-600 focus:ring-brand-500"
							checked={range.checked}
						/>
						<span class="text-gray-600">{range.label}</span>
					</label>
				)}
			</For>
		</FilterShell>
	);
};

export const RatingFilter = () => {
	return (
		<FilterShell title="Minimum Rating">
			<label class="flex items-center gap-2 cursor-pointer">
				<input
					type="radio"
					name="rating"
					class="border-gray-300 text-brand-600 focus:ring-brand-500"
				/>
				<div class="flex items-center gap-1">
					<div class="flex text-accent-500">
						<StarIcon class="w-3.5 h-3.5" />
					</div>
					<span class="text-gray-600">4 &amp; up</span>
				</div>
			</label>
			<label class="flex items-center gap-2 cursor-pointer">
				<input
					type="radio"
					name="rating"
					class="border-gray-300 text-brand-600 focus:ring-brand-500"
				/>
				<div class="flex items-center gap-1">
					<div class="flex text-accent-500">
						<StarIcon class="w-3.5 h-3.5" />
					</div>
					<span class="text-gray-600">3 &amp; up</span>
				</div>
			</label>
			<label class="flex items-center gap-2 cursor-pointer">
				<input
					type="radio"
					name="rating"
					class="border-gray-300 text-brand-600 focus:ring-brand-500"
					checked
				/>
				<span class="text-gray-600">All ratings</span>
			</label>
		</FilterShell>
	);
};

export const ActiveFilters = () => {
	return (
		<div class="bg-white rounded-xl border border-gray-100 p-4">
			<div class="flex items-center justify-between mb-3">
				<h3 class="text-sm font-semibold text-gray-900">Active Filters</h3>
				<button class="text-xs text-brand-600 hover:text-brand-700 font-medium transition">
					Clear all
				</button>
			</div>
			<div class="flex flex-wrap gap-1.5">
				<For each={[{ label: "$50 – $100" }, { label: "4 stars & up" }]}>
					{(filter) => (
						<span class="inline-flex items-center gap-1 px-2.5 py-1 bg-brand-50 text-brand-700 text-xs font-medium rounded-lg">
							{filter.label}
							<button type="button" class="hover:text-brand-900 transition">
								<XIcon class="w-3 h-3" aria-label="Remove filter" />
							</button>
						</span>
					)}
				</For>
			</div>
		</div>
	);
};
