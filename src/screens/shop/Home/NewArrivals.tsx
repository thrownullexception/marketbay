export const NewArrivals = () => {
	return (
		<>
			{/* <!-- ========== NEW ARRIVALS ========== --> */}
			<section class="py-10 bg-gray-50">
				<div class="max-w-7xl mx-auto px-4">
					<div class="flex items-end justify-between mb-6">
						<div>
							<h2 class="text-xl font-bold text-gray-900">New Arrivals</h2>
							<p class="text-gray-500 text-sm mt-0.5">
								Just listed across all stores
							</p>
						</div>
						<div class="hidden sm:flex items-center gap-2">
							<button class="px-3 py-1.5 text-xs font-semibold rounded-full bg-brand-600 text-white">
								All
							</button>
							<button class="px-3 py-1.5 text-xs font-semibold rounded-full bg-gray-100 text-gray-600 hover:bg-gray-200 transition">
								Electronics
							</button>
							<button class="px-3 py-1.5 text-xs font-semibold rounded-full bg-gray-100 text-gray-600 hover:bg-gray-200 transition">
								Fashion
							</button>
							<button class="px-3 py-1.5 text-xs font-semibold rounded-full bg-gray-100 text-gray-600 hover:bg-gray-200 transition">
								Home
							</button>
							<button class="px-3 py-1.5 text-xs font-semibold rounded-full bg-gray-100 text-gray-600 hover:bg-gray-200 transition">
								Beauty
							</button>
						</div>
					</div>
					<div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
						<div class="product-card bg-white rounded-2xl border border-gray-100 overflow-hidden transition-all duration-300 cursor-pointer">
							<div class="relative aspect-square bg-gray-50">
								<div class="absolute inset-0 bg-linear-to-br from-violet-50 to-purple-100 flex items-center justify-center">
									<svg
										class="w-12 h-12 text-violet-300"
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor"
										stroke-width="1"
									>
										<path
											stroke-linecap="round"
											stroke-linejoin="round"
											d="M19.114 5.636a9 9 0 010 12.728M16.463 8.288a5.25 5.25 0 010 7.424M6.75 8.25l4.72-4.72a.75.75 0 011.28.53v15.88a.75.75 0 01-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.01 9.01 0 012.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75z"
										/>
									</svg>
								</div>
								<span class="absolute top-2 left-2 px-2 py-0.5 bg-brand-600 text-white text-[10px] font-bold rounded-md uppercase">
									New
								</span>
							</div>
							<div class="p-3">
								<a
									href="#"
									class="text-[11px] text-brand-600 font-medium hover:underline"
								>
									TechVault
								</a>
								<h3 class="text-sm font-semibold text-gray-900 mt-0.5 line-clamp-2">
									Wireless Noise-Cancelling Earbuds
								</h3>
								<div class="flex items-center justify-between mt-2">
									<span class="text-base font-bold text-gray-900">$79.99</span>
									<button
										type="button"
										class="p-1.5 bg-brand-600 hover:bg-brand-700 text-white rounded-lg transition"
										aria-label="Add to cart"
									>
										<svg
											class="w-3.5 h-3.5"
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
							<div class="relative aspect-square bg-gray-50">
								<div class="absolute inset-0 bg-linear-to-br from-amber-50 to-orange-100 flex items-center justify-center">
									<svg
										class="w-12 h-12 text-amber-300"
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor"
										stroke-width="1"
									>
										<path
											stroke-linecap="round"
											stroke-linejoin="round"
											d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
										/>
									</svg>
								</div>
								<span class="absolute top-2 left-2 px-2 py-0.5 bg-brand-600 text-white text-[10px] font-bold rounded-md uppercase">
									New
								</span>
							</div>
							<div class="p-3">
								<a
									href="#"
									class="text-[11px] text-brand-600 font-medium hover:underline"
								>
									BookNook
								</a>
								<h3 class="text-sm font-semibold text-gray-900 mt-0.5 line-clamp-2">
									The Art of Focus — 2026 Bestseller
								</h3>
								<div class="flex items-center justify-between mt-2">
									<span class="text-base font-bold text-gray-900">$16.99</span>
									<button
										class="p-1.5 bg-brand-600 hover:bg-brand-700 text-white rounded-lg transition"
										aria-label="Add to cart"
									>
										<svg
											class="w-3.5 h-3.5"
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
							<div class="relative aspect-square bg-gray-50">
								<div class="absolute inset-0 bg-linear-to-br from-teal-50 to-emerald-100 flex items-center justify-center">
									<svg
										class="w-12 h-12 text-teal-300"
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor"
										stroke-width="1"
									>
										<path
											stroke-linecap="round"
											stroke-linejoin="round"
											d="M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.048 8.287 8.287 0 009 9.6a8.983 8.983 0 013.361-6.867 8.21 8.21 0 003 2.48z"
										/>
									</svg>
								</div>
								<span class="absolute top-2 left-2 px-2 py-0.5 bg-brand-600 text-white text-[10px] font-bold rounded-md uppercase">
									New
								</span>
							</div>
							<div class="p-3">
								<a
									href="#"
									class="text-[11px] text-brand-600 font-medium hover:underline"
								>
									GreenNest
								</a>
								<h3 class="text-sm font-semibold text-gray-900 mt-0.5 line-clamp-2">
									Organic Tea Tree Oil 30ml
								</h3>
								<div class="flex items-center justify-between mt-2">
									<span class="text-base font-bold text-gray-900">$12.49</span>
									<button
										type="button"
										class="p-1.5 bg-brand-600 hover:bg-brand-700 text-white rounded-lg transition"
										aria-label="Add to cart"
									>
										<svg
											class="w-3.5 h-3.5"
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
							<div class="relative aspect-square bg-gray-50">
								<div class="absolute inset-0 bg-linear-to-br from-pink-50 to-fuchsia-100 flex items-center justify-center">
									<svg
										class="w-12 h-12 text-pink-300"
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
								<span class="absolute top-2 left-2 px-2 py-0.5 bg-brand-600 text-white text-[10px] font-bold rounded-md uppercase">
									New
								</span>
							</div>
							<div class="p-3">
								<a
									href="#"
									class="text-[11px] text-brand-600 font-medium hover:underline"
								>
									StyleHouse
								</a>
								<h3 class="text-sm font-semibold text-gray-900 mt-0.5 line-clamp-2">
									Linen Blend Summer Dress
								</h3>
								<div class="flex items-center justify-between mt-2">
									<span class="text-base font-bold text-gray-900">$64.00</span>
									<button
										class="p-1.5 bg-brand-600 hover:bg-brand-700 text-white rounded-lg transition"
										aria-label="Add to cart"
									>
										<svg
											class="w-3.5 h-3.5"
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
							<div class="relative aspect-square bg-gray-50">
								<div class="absolute inset-0 bg-linear-to-br from-sky-50 to-blue-100 flex items-center justify-center">
									<svg
										class="w-12 h-12 text-sky-300"
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
								<span class="absolute top-2 left-2 px-2 py-0.5 bg-brand-600 text-white text-[10px] font-bold rounded-md uppercase">
									New
								</span>
							</div>
							<div class="p-3">
								<a
									href="#"
									class="text-[11px] text-brand-600 font-medium hover:underline"
								>
									FitGear Pro
								</a>
								<h3 class="text-sm font-semibold text-gray-900 mt-0.5 line-clamp-2">
									Adjustable Dumbbell Set 25kg
								</h3>
								<div class="flex items-center justify-between mt-2">
									<span class="text-base font-bold text-gray-900">$149.00</span>
									<button
										class="p-1.5 bg-brand-600 hover:bg-brand-700 text-white rounded-lg transition"
										aria-label="Add to cart"
									>
										<svg
											class="w-3.5 h-3.5"
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
