export const SearchFilters = () => {
	return (
		<aside class="w-full lg:w-60 flex-shrink-0">
			<div class="lg:sticky lg:top-[72px] space-y-6">
				<div class="bg-white rounded-xl border border-gray-100 p-4">
					<div class="flex items-center justify-between mb-3">
						<h3 class="text-sm font-semibold text-gray-900">Active Filters</h3>
						<button class="text-xs text-brand-600 hover:text-brand-700 font-medium transition">
							Clear all
						</button>
					</div>
					<div class="flex flex-wrap gap-1.5">
						<span class="inline-flex items-center gap-1 px-2.5 py-1 bg-brand-50 text-brand-700 text-xs font-medium rounded-lg">
							$50 – $100
							<button class="hover:text-brand-900 transition">
								<svg
									class="w-3 h-3"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
									stroke-width="2"
								>
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										d="M6 18L18 6M6 6l12 12"
									/>
								</svg>
							</button>
						</span>
						<span class="inline-flex items-center gap-1 px-2.5 py-1 bg-brand-50 text-brand-700 text-xs font-medium rounded-lg">
							4 stars &amp; up
							<button class="hover:text-brand-900 transition">
								<svg
									class="w-3 h-3"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
									stroke-width="2"
								>
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										d="M6 18L18 6M6 6l12 12"
									/>
								</svg>
							</button>
						</span>
					</div>
				</div>

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

				{/* <!-- Price filter --> */}
				<div class="bg-white rounded-xl border border-gray-100 p-4">
					<h3 class="text-sm font-semibold text-gray-900 mb-3">Price Range</h3>
					<div class="space-y-2 text-sm">
						<label class="flex items-center gap-2 cursor-pointer">
							<input
								type="checkbox"
								class="rounded border-gray-300 text-brand-600 focus:ring-brand-500"
							/>
							<span class="text-gray-600">Under $25</span>
						</label>
						<label class="flex items-center gap-2 cursor-pointer">
							<input
								type="checkbox"
								class="rounded border-gray-300 text-brand-600 focus:ring-brand-500"
							/>
							<span class="text-gray-600">$25 – $50</span>
						</label>
						<label class="flex items-center gap-2 cursor-pointer">
							<input
								type="checkbox"
								class="rounded border-gray-300 text-brand-600 focus:ring-brand-500"
								checked
							/>
							<span class="text-gray-600">$50 – $100</span>
						</label>
						<label class="flex items-center gap-2 cursor-pointer">
							<input
								type="checkbox"
								class="rounded border-gray-300 text-brand-600 focus:ring-brand-500"
							/>
							<span class="text-gray-600">$100 – $200</span>
						</label>
						<label class="flex items-center gap-2 cursor-pointer">
							<input
								type="checkbox"
								class="rounded border-gray-300 text-brand-600 focus:ring-brand-500"
							/>
							<span class="text-gray-600">Over $200</span>
						</label>
					</div>
				</div>

				{/* <!-- Rating filter --> */}
				<div class="bg-white rounded-xl border border-gray-100 p-4">
					<h3 class="text-sm font-semibold text-gray-900 mb-3">
						Minimum Rating
					</h3>
					<div class="space-y-2 text-sm">
						<label class="flex items-center gap-2 cursor-pointer">
							<input
								type="radio"
								name="rating"
								class="border-gray-300 text-brand-600 focus:ring-brand-500"
								checked
							/>
							<div class="flex items-center gap-1">
								<div class="flex text-accent-500">
									<svg
										class="w-3.5 h-3.5"
										fill="currentColor"
										viewBox="0 0 20 20"
									>
										<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
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
										<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
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
							/>
							<span class="text-gray-600">All ratings</span>
						</label>
					</div>
				</div>

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
