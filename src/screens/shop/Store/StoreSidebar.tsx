export const StoreSidebar = () => {
	return (
		<aside class="w-full lg:w-60 shrink-0">
			<div class="lg:sticky lg:top-[120px] space-y-6">
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

const PriceRangeFilter = () => {
	const ranges = [
		{ label: "Under $25" },
		{ label: "$25 – $50" },
		{ label: "$50 – $100", checked: true },
		{ label: "$100 – $300" },
		{ label: "Over $300" },
	];

	return (
		<div class="bg-white rounded-xl border border-gray-100 p-4">
			<h3 class="text-sm font-semibold text-gray-900 mb-3">Price Range</h3>
			<div class="space-y-2 text-sm">
				{ranges.map((range) => (
					<label class="flex items-center gap-2 cursor-pointer">
						<input
							type="checkbox"
							class="rounded border-gray-300 text-brand-600 focus:ring-brand-500"
							checked={range.checked}
						/>
						<span class="text-gray-600">{range.label}</span>
					</label>
				))}
			</div>
		</div>
	);
};

const RatingFilter = () => {
	const starPath =
		"M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z";

	return (
		<div class="bg-white rounded-xl border border-gray-100 p-4">
			<h3 class="text-sm font-semibold text-gray-900 mb-3">Minimum Rating</h3>
			<div class="space-y-2 text-sm">
				<label class="flex items-center gap-2 cursor-pointer">
					<input
						type="radio"
						name="rating"
						class="border-gray-300 text-brand-600 focus:ring-brand-500"
					/>
					<div class="flex items-center gap-1">
						<div class="flex text-accent-500">
							<svg
								class="w-3.5 h-3.5"
								fill="currentColor"
								viewBox="0 0 20 20"
							>
								<path d={starPath} />
							</svg>
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
							<svg
								class="w-3.5 h-3.5"
								fill="currentColor"
								viewBox="0 0 20 20"
							>
								<path d={starPath} />
							</svg>
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
			</div>
		</div>
	);
};
