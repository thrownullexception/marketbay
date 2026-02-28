export const TodaysDeals = () => {
	return (
		<>
			{/* <!-- ========== TODAY'S DEALS ========== --> */}
			<section class="py-10 bg-gray-50">
				<div class="max-w-7xl mx-auto px-4">
					<div class="flex items-end justify-between mb-6">
						<div>
							<h2 class="text-xl font-bold text-gray-900">Today's Deals</h2>
							<p class="text-gray-500 text-sm mt-0.5">
								Limited-time prices on top products
							</p>
						</div>
						<a
							href="#"
							class="text-sm font-semibold text-brand-600 hover:text-brand-700 transition hidden sm:inline-flex items-center gap-1"
						>
							View All <span>&rarr;</span>
						</a>
					</div>
					<div class="grid grid-cols-2 lg:grid-cols-4 gap-4">
						<div class="product-card bg-white rounded-2xl border border-gray-100 overflow-hidden transition-all duration-300 cursor-pointer">
							<div class="relative aspect-square bg-gray-50 overflow-hidden">
								<div class="absolute inset-0 bg-linear-to-br from-blue-50 to-indigo-100 flex items-center justify-center">
									<svg
										class="w-16 h-16 text-brand-300"
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor"
										stroke-width="1"
									>
										<path
											stroke-linecap="round"
											stroke-linejoin="round"
											d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
										/>
									</svg>
								</div>
								<span class="absolute top-3 left-3 px-2 py-0.5 bg-red-500 text-white text-[10px] font-bold rounded-md uppercase">
									-25%
								</span>
								<button
									class="absolute top-3 right-3 p-1.5 bg-white/80 backdrop-blur rounded-full hover:bg-white transition shadow-sm"
									aria-label="Bookmark"
								>
									<svg
										class="w-4 h-4 text-gray-400"
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor"
										stroke-width="2"
									>
										<path
											stroke-linecap="round"
											stroke-linejoin="round"
											d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
										/>
									</svg>
								</button>
							</div>
							<div class="p-4">
								<a
									href="#"
									class="text-xs text-brand-600 font-medium hover:underline"
								>
									TechVault
								</a>
								<h3 class="text-sm font-semibold text-gray-900 mt-1 line-clamp-2">
									Ultra HD 27" Monitor — 4K IPS Display
								</h3>
								<div class="flex items-center gap-1 mt-2">
									<div class="flex text-accent-500">
										<svg
											class="w-3.5 h-3.5"
											fill="currentColor"
											viewBox="0 0 20 20"
										>
											<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
										</svg>
									</div>
									<span class="text-xs text-gray-500">4.9 (128)</span>
								</div>
								<div class="flex items-center justify-between mt-3">
									<div>
										<span class="text-lg font-bold text-gray-900">$299</span>
										<span class="text-sm text-gray-400 line-through ml-1">
											$399
										</span>
									</div>
									<button
										class="p-2 bg-brand-600 hover:bg-brand-700 text-white rounded-xl transition"
										aria-label="Add to cart"
									>
										<svg
											class="w-4 h-4"
											fill="none"
											viewBox="0 0 24 24"
											stroke="currentColor"
											stroke-width="2"
										>
											<path
												stroke-linecap="round"
												stroke-linejoin="round"
												d="M12 4v16m8-8H4"
											/>
										</svg>
									</button>
								</div>
							</div>
						</div>
						<div class="product-card bg-white rounded-2xl border border-gray-100 overflow-hidden transition-all duration-300 cursor-pointer">
							<div class="relative aspect-square bg-gray-50 overflow-hidden">
								<div class="absolute inset-0 bg-linear-to-br from-pink-50 to-rose-100 flex items-center justify-center">
									<svg
										class="w-16 h-16 text-rose-300"
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor"
										stroke-width="1"
									>
										<path
											stroke-linecap="round"
											stroke-linejoin="round"
											d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
										/>
									</svg>
								</div>
								<span class="absolute top-3 left-3 px-2 py-0.5 bg-red-500 text-white text-[10px] font-bold rounded-md uppercase">
									-33%
								</span>
								<button
									class="absolute top-3 right-3 p-1.5 bg-white/80 backdrop-blur rounded-full hover:bg-white transition shadow-sm"
									aria-label="Bookmark"
								>
									<svg
										class="w-4 h-4 text-gray-400"
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor"
										stroke-width="2"
									>
										<path
											stroke-linecap="round"
											stroke-linejoin="round"
											d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
										/>
									</svg>
								</button>
							</div>
							<div class="p-4">
								<a
									href="#"
									class="text-xs text-brand-600 font-medium hover:underline"
								>
									StyleHouse
								</a>
								<h3 class="text-sm font-semibold text-gray-900 mt-1 line-clamp-2">
									Cashmere Blend Oversize Sweater
								</h3>
								<div class="flex items-center gap-1 mt-2">
									<div class="flex text-accent-500">
										<svg
											class="w-3.5 h-3.5"
											fill="currentColor"
											viewBox="0 0 20 20"
										>
											<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
										</svg>
									</div>
									<span class="text-xs text-gray-500">4.6 (64)</span>
								</div>
								<div class="flex items-center justify-between mt-3">
									<div>
										<span class="text-lg font-bold text-gray-900">$59</span>
										<span class="text-sm text-gray-400 line-through ml-1">
											$89
										</span>
									</div>
									<button
										class="p-2 bg-brand-600 hover:bg-brand-700 text-white rounded-xl transition"
										aria-label="Add to cart"
									>
										<svg
											class="w-4 h-4"
											fill="none"
											viewBox="0 0 24 24"
											stroke="currentColor"
											stroke-width="2"
										>
											<path
												stroke-linecap="round"
												stroke-linejoin="round"
												d="M12 4v16m8-8H4"
											/>
										</svg>
									</button>
								</div>
							</div>
						</div>
						<div class="product-card bg-white rounded-2xl border border-gray-100 overflow-hidden transition-all duration-300 cursor-pointer">
							<div class="relative aspect-square bg-gray-50 overflow-hidden">
								<div class="absolute inset-0 bg-linear-to-br from-emerald-50 to-green-100 flex items-center justify-center">
									<svg
										class="w-16 h-16 text-emerald-300"
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor"
										stroke-width="1"
									>
										<path
											stroke-linecap="round"
											stroke-linejoin="round"
											d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42"
										/>
									</svg>
								</div>
								<span class="absolute top-3 left-3 px-2 py-0.5 bg-red-500 text-white text-[10px] font-bold rounded-md uppercase">
									-28%
								</span>
								<button
									class="absolute top-3 right-3 p-1.5 bg-white/80 backdrop-blur rounded-full hover:bg-white transition shadow-sm"
									aria-label="Bookmark"
								>
									<svg
										class="w-4 h-4 text-rose-500"
										fill="currentColor"
										viewBox="0 0 24 24"
									>
										<path d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
									</svg>
								</button>
							</div>
							<div class="p-4">
								<a
									href="#"
									class="text-xs text-brand-600 font-medium hover:underline"
								>
									GreenNest
								</a>
								<h3 class="text-sm font-semibold text-gray-900 mt-1 line-clamp-2">
									Vitamin C Serum — Natural Glow
								</h3>
								<div class="flex items-center gap-1 mt-2">
									<div class="flex text-accent-500">
										<svg
											class="w-3.5 h-3.5"
											fill="currentColor"
											viewBox="0 0 20 20"
										>
											<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
										</svg>
									</div>
									<span class="text-xs text-gray-500">4.9 (312)</span>
								</div>
								<div class="flex items-center justify-between mt-3">
									<div>
										<span class="text-lg font-bold text-gray-900">$24.99</span>
										<span class="text-sm text-gray-400 line-through ml-1">
											$34.99
										</span>
									</div>
									<button
										class="p-2 bg-brand-600 hover:bg-brand-700 text-white rounded-xl transition"
										aria-label="Add to cart"
									>
										<svg
											class="w-4 h-4"
											fill="none"
											viewBox="0 0 24 24"
											stroke="currentColor"
											stroke-width="2"
										>
											<path
												stroke-linecap="round"
												stroke-linejoin="round"
												d="M12 4v16m8-8H4"
											/>
										</svg>
									</button>
								</div>
							</div>
						</div>
						<div class="product-card bg-white rounded-2xl border border-gray-100 overflow-hidden transition-all duration-300 cursor-pointer">
							<div class="relative aspect-square bg-gray-50 overflow-hidden">
								<div class="absolute inset-0 bg-linear-to-br from-cyan-50 to-sky-100 flex items-center justify-center">
									<svg
										class="w-16 h-16 text-cyan-300"
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor"
										stroke-width="1"
									>
										<path
											stroke-linecap="round"
											stroke-linejoin="round"
											d="M21 7.5l-2.25-1.313M21 7.5v2.25m0-2.25l-2.25 1.313M3 7.5l2.25-1.313M3 7.5l2.25 1.313M3 7.5v2.25m9 3l2.25-1.313M12 12.75l-2.25-1.313M12 12.75V15m0 6.75l2.25-1.313M12 21.75V19.5m0 2.25l-2.25-1.313m0-16.875L12 2.25l2.25 1.313M21 14.25v2.25l-2.25 1.313m-13.5 0L3 16.5v-2.25"
										/>
									</svg>
								</div>
								<span class="absolute top-3 left-3 px-2 py-0.5 bg-red-500 text-white text-[10px] font-bold rounded-md uppercase">
									-20%
								</span>
								<button
									class="absolute top-3 right-3 p-1.5 bg-white/80 backdrop-blur rounded-full hover:bg-white transition shadow-sm"
									aria-label="Bookmark"
								>
									<svg
										class="w-4 h-4 text-gray-400"
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor"
										stroke-width="2"
									>
										<path
											stroke-linecap="round"
											stroke-linejoin="round"
											d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
										/>
									</svg>
								</button>
							</div>
							<div class="p-4">
								<a
									href="#"
									class="text-xs text-brand-600 font-medium hover:underline"
								>
									FitGear Pro
								</a>
								<h3 class="text-sm font-semibold text-gray-900 mt-1 line-clamp-2">
									Resistance Band Set — Pro Series
								</h3>
								<div class="flex items-center gap-1 mt-2">
									<div class="flex text-accent-500">
										<svg
											class="w-3.5 h-3.5"
											fill="currentColor"
											viewBox="0 0 20 20"
										>
											<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
										</svg>
									</div>
									<span class="text-xs text-gray-500">4.7 (203)</span>
								</div>
								<div class="flex items-center justify-between mt-3">
									<div>
										<span class="text-lg font-bold text-gray-900">$39.99</span>
										<span class="text-sm text-gray-400 line-through ml-1">
											$49.99
										</span>
									</div>
									<button
										class="p-2 bg-brand-600 hover:bg-brand-700 text-white rounded-xl transition"
										aria-label="Add to cart"
									>
										<svg
											class="w-4 h-4"
											fill="none"
											viewBox="0 0 24 24"
											stroke="currentColor"
											stroke-width="2"
										>
											<path
												stroke-linecap="round"
												stroke-linejoin="round"
												d="M12 4v16m8-8H4"
											/>
										</svg>
									</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};
