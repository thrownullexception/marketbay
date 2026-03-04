import {
	ActiveFilters,
	PriceRangeFilter,
	RatingFilter,
} from "@/screens/_components/product-filters";

export const SearchFilters = () => {
	return (
		<aside class="w-full lg:w-60 shrink-0">
			<div class="lg:sticky lg:top-[72px] space-y-6">
				<ActiveFilters />

				{/* <!-- Category filter --> */}
				<div class="bg-white rounded-xl border border-gray-100 p-4">
					<h3 class="text-sm font-semibold text-gray-900 mb-3">Category</h3>
					<ul class="space-y-2 text-sm">
						<li>
							<a
								href="#"
								class="flex items-center justify-between text-brand-600 font-medium"
							>
								<span>All Categories</span>
								<span class="text-xs text-gray-400">156</span>
							</a>
						</li>
						<li>
							<a
								href="#"
								class="flex items-center justify-between text-gray-600 hover:text-brand-600 transition"
							>
								<span>Over-Ear</span>
								<span class="text-xs text-gray-400">52</span>
							</a>
						</li>
						<li>
							<a
								href="#"
								class="flex items-center justify-between text-gray-600 hover:text-brand-600 transition"
							>
								<span>In-Ear / Earbuds</span>
								<span class="text-xs text-gray-400">64</span>
							</a>
						</li>
						<li>
							<a
								href="#"
								class="flex items-center justify-between text-gray-600 hover:text-brand-600 transition"
							>
								<span>On-Ear</span>
								<span class="text-xs text-gray-400">18</span>
							</a>
						</li>
						<li>
							<a
								href="#"
								class="flex items-center justify-between text-gray-600 hover:text-brand-600 transition"
							>
								<span>Gaming Headsets</span>
								<span class="text-xs text-gray-400">14</span>
							</a>
						</li>
						<li>
							<a
								href="#"
								class="flex items-center justify-between text-gray-600 hover:text-brand-600 transition"
							>
								<span>Sports / Workout</span>
								<span class="text-xs text-gray-400">8</span>
							</a>
						</li>
					</ul>
				</div>

				<PriceRangeFilter />
				<RatingFilter />

				{/* <!-- Seller filter --> */}
				<div class="bg-white rounded-xl border border-gray-100 p-4">
					<h3 class="text-sm font-semibold text-gray-900 mb-3">Seller</h3>
					<div class="space-y-2 text-sm">
						<label class="flex items-center gap-2 cursor-pointer">
							<input
								type="checkbox"
								class="rounded border-gray-300 text-brand-600 focus:ring-brand-500"
							/>
							<span class="text-gray-600">TechVault</span>
						</label>
						<label class="flex items-center gap-2 cursor-pointer">
							<input
								type="checkbox"
								class="rounded border-gray-300 text-brand-600 focus:ring-brand-500"
							/>
							<span class="text-gray-600">SoundArc</span>
						</label>
						<label class="flex items-center gap-2 cursor-pointer">
							<input
								type="checkbox"
								class="rounded border-gray-300 text-brand-600 focus:ring-brand-500"
							/>
							<span class="text-gray-600">FitGear Pro</span>
						</label>
						<label class="flex items-center gap-2 cursor-pointer">
							<input
								type="checkbox"
								class="rounded border-gray-300 text-brand-600 focus:ring-brand-500"
							/>
							<span class="text-gray-600">AudioHive</span>
						</label>
					</div>
					<button class="text-xs text-brand-600 font-medium mt-2 hover:text-brand-700 transition">
						Show 8 more
					</button>
				</div>

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
