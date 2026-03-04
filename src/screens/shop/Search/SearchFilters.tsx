import {
	ActiveFilters,
	FilterOptions,
	PriceRangeFilter,
	RatingFilter,
} from "@/screens/_components/product-filters";

export const SearchFilters = () => {
	return (
		<aside class="w-full lg:w-60 shrink-0">
			<div class="lg:sticky lg:top-[72px] space-y-6">
				<ActiveFilters />
				<FilterOptions
					type="checkbox"
					title="Category"
					name="category"
					options={[
						{ label: "Over-Ear", value: "over_ear", count: "52" },
						{ label: "In-Ear / Earbuds", value: "in_ear", count: "64" },
						{ label: "On-Ear", value: "on_ear", count: "18" },
						{ label: "Gaming Headsets", value: "gaming_headsets", count: "14" },
						{ label: "Sports / Workout", value: "sports_workout", count: "8" },
					]}
					values={["over_ear"]}
				/>
				<PriceRangeFilter
					options={[
						{ label: "Under $25", value: "under_25" },
						{ label: "$25 – $50", value: "25_50" },
						{ label: "$50 – $100", value: "50_100" },
						{ label: "$100 – $300", value: "100_300" },
						{ label: "Over $300", value: "over_300" },
					]}
				/>
				<RatingFilter />
				<FilterOptions
					type="checkbox"
					name="favourite_stores"
					options={[
						{ label: "TechVault", value: "techvault", count: "412" },
						{ label: "GadgetWorld", value: "gadgetworld", count: "289" },
						{ label: "PixelHub", value: "pixelhub", count: "176" },
						{ label: "SoundLab", value: "soundlab", count: "143" },
						{ label: "HomeHaven", value: "homehaven", count: "98" },
						{ label: "SoundLab", value: "soundlab", count: "143" },
						{ label: "HomeHaven", value: "homehaven", count: "98" },
						{ label: "SoundLab", value: "soundlab", count: "143" },
						{ label: "HomeHaven", value: "homehaven", count: "98" },
						{ label: "SoundLab", value: "soundlab", count: "143" },
						{ label: "HomeHaven", value: "homehaven", count: "98" },
					]}
					values={[]}
					title="Your Favourite Stores"
				/>
				{/* <!-- Features filter --> */}
				<div class="bg-white rounded-xl border border-gray-100 p-4">
					<h3 class="text-sm font-semibold text-gray-900 mb-3">Features</h3>
					<div class="space-y-2 text-sm">
						<label class="flex items-center gap-2 cursor-pointer">
							<input
								type="checkbox"
								class="rounded border-gray-300 text-brand-600 focus:ring-brand-500"
							/>
							<span class="text-gray-600">Noise Cancelling</span>
						</label>
						<label class="flex items-center gap-2 cursor-pointer">
							<input
								type="checkbox"
								class="rounded border-gray-300 text-brand-600 focus:ring-brand-500"
							/>
							<span class="text-gray-600">Bluetooth 5.0+</span>
						</label>
						<label class="flex items-center gap-2 cursor-pointer">
							<input
								type="checkbox"
								class="rounded border-gray-300 text-brand-600 focus:ring-brand-500"
							/>
							<span class="text-gray-600">Waterproof</span>
						</label>
						<label class="flex items-center gap-2 cursor-pointer">
							<input
								type="checkbox"
								class="rounded border-gray-300 text-brand-600 focus:ring-brand-500"
							/>
							<span class="text-gray-600">Built-in Microphone</span>
						</label>
						<label class="flex items-center gap-2 cursor-pointer">
							<input
								type="checkbox"
								class="rounded border-gray-300 text-brand-600 focus:ring-brand-500"
							/>
							<span class="text-gray-600">Foldable</span>
						</label>
					</div>
				</div>
			</div>
		</aside>
	);
};
