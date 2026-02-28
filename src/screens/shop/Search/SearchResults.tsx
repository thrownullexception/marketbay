export const SearchResults = () => {
	return (
		<div class="flex-1 min-w-0">
			{/* <!-- Sort & Results bar --> */}
			<div class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-6">
				<p class="text-sm text-gray-500">
					Showing <span class="font-semibold text-gray-700">1–12</span> of{" "}
					<span class="font-semibold text-gray-700">156</span> results
				</p>
				<div class="flex items-center gap-3">
					<select class="text-sm border border-gray-200 rounded-lg px-3 py-2 bg-white text-gray-600 focus:outline-none focus:ring-2 focus:ring-brand-400 focus:border-transparent cursor-pointer">
						<option>Sort: Best Match</option>
						<option>Price: Low to High</option>
						<option>Price: High to Low</option>
						<option>Newest First</option>
						<option>Top Rated</option>
						<option>Most Sold</option>
					</select>
					<div class="hidden sm:flex items-center border border-gray-200 rounded-lg overflow-hidden">
						<button
							class="p-2 bg-brand-50 text-brand-600"
							aria-label="Grid view"
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
									d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
								/>
							</svg>
						</button>
						<button
							class="p-2 text-gray-400 hover:text-gray-600"
							aria-label="List view"
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
									d="M4 6h16M4 12h16M4 18h16"
								/>
							</svg>
						</button>
					</div>
				</div>
			</div>

			{/* <!-- Product grid --> */}
			<div class="grid grid-cols-2 lg:grid-cols-3 gap-4">
				{/* <!-- Result 1 --> */}
				<a
					href="product.html"
					class="product-card bg-white rounded-2xl border border-gray-100 overflow-hidden transition-all duration-300"
				>
					<div class="relative aspect-square bg-gray-50">
						<div class="absolute inset-0 bg-linear-to-br from-blue-50 to-indigo-100 flex items-center justify-center">
							<svg
								class="w-14 h-14 text-brand-200"
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
						<span class="absolute top-2 left-2 px-2 py-0.5 bg-red-500 text-white text-[10px] font-bold rounded-md uppercase">
							-40%
						</span>
						<button
							class="absolute top-2 right-2 p-1.5 bg-white/80 backdrop-blur rounded-full hover:bg-white transition shadow-sm"
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
						<span class="text-xs text-brand-600 font-medium">TechVault</span>
						<h3 class="text-sm font-semibold text-gray-900 mt-1 line-clamp-2">
							Pro Studio Wireless Headphones — ANC
						</h3>
						<div class="flex items-center gap-1 mt-1.5">
							<svg
								class="w-3.5 h-3.5 text-accent-500"
								fill="currentColor"
								viewBox="0 0 20 20"
							>
								<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
							</svg>
							<span class="text-xs text-gray-500">4.9 (243)</span>
						</div>
						<div class="flex items-center justify-between mt-3">
							<div>
								<span class="text-lg font-bold text-gray-900">$59.99</span>
								<span class="text-sm text-gray-400 line-through ml-1">
									$99.99
								</span>
							</div>
							<button class="p-2 bg-brand-600 hover:bg-brand-700 text-white rounded-xl transition">
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
				</a>

				{/* <!-- Result 2 --> */}
				<div class="product-card bg-white rounded-2xl border border-gray-100 overflow-hidden transition-all duration-300 cursor-pointer">
					<div class="relative aspect-square bg-gray-50">
						<div class="absolute inset-0 bg-linear-to-br from-violet-50 to-purple-100 flex items-center justify-center">
							<svg
								class="w-14 h-14 text-violet-200"
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
						<button
							class="absolute top-2 right-2 p-1.5 bg-white/80 backdrop-blur rounded-full hover:bg-white transition shadow-sm"
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
						<span class="text-xs text-brand-600 font-medium">SoundArc</span>
						<h3 class="text-sm font-semibold text-gray-900 mt-1 line-clamp-2">
							AirPulse True Wireless Earbuds — ANC Pro
						</h3>
						<div class="flex items-center gap-1 mt-1.5">
							<svg
								class="w-3.5 h-3.5 text-accent-500"
								fill="currentColor"
								viewBox="0 0 20 20"
							>
								<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
							</svg>
							<span class="text-xs text-gray-500">4.8 (189)</span>
						</div>
						<div class="flex items-center justify-between mt-3">
							<span class="text-lg font-bold text-gray-900">$79.99</span>
							<button class="p-2 bg-brand-600 hover:bg-brand-700 text-white rounded-xl transition">
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

				{/* <!-- Result 3 --> */}
				<div class="product-card bg-white rounded-2xl border border-gray-100 overflow-hidden transition-all duration-300 cursor-pointer">
					<div class="relative aspect-square bg-gray-50">
						<div class="absolute inset-0 bg-linear-to-br from-rose-50 to-pink-100 flex items-center justify-center">
							<svg
								class="w-14 h-14 text-rose-200"
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
						<span class="absolute top-2 left-2 px-2 py-0.5 bg-red-500 text-white text-[10px] font-bold rounded-md uppercase">
							-20%
						</span>
						<button
							class="absolute top-2 right-2 p-1.5 bg-white/80 backdrop-blur rounded-full hover:bg-white transition shadow-sm"
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
						<span class="text-xs text-brand-600 font-medium">SoundArc</span>
						<h3 class="text-sm font-semibold text-gray-900 mt-1 line-clamp-2">
							Studio Max Over-Ear Headphones — Hi-Res
						</h3>
						<div class="flex items-center gap-1 mt-1.5">
							<svg
								class="w-3.5 h-3.5 text-accent-500"
								fill="currentColor"
								viewBox="0 0 20 20"
							>
								<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
							</svg>
							<span class="text-xs text-gray-500">4.7 (97)</span>
						</div>
						<div class="flex items-center justify-between mt-3">
							<div>
								<span class="text-lg font-bold text-gray-900">$63.99</span>
								<span class="text-sm text-gray-400 line-through ml-1">
									$79.99
								</span>
							</div>
							<button class="p-2 bg-brand-600 hover:bg-brand-700 text-white rounded-xl transition">
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

				{/* <!-- Result 4 --> */}
				<div class="product-card bg-white rounded-2xl border border-gray-100 overflow-hidden transition-all duration-300 cursor-pointer">
					<div class="relative aspect-square bg-gray-50">
						<div class="absolute inset-0 bg-linear-to-br from-emerald-50 to-teal-100 flex items-center justify-center">
							<svg
								class="w-14 h-14 text-emerald-200"
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
						<button
							class="absolute top-2 right-2 p-1.5 bg-white/80 backdrop-blur rounded-full hover:bg-white transition shadow-sm"
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
						<span class="text-xs text-brand-600 font-medium">FitGear Pro</span>
						<h3 class="text-sm font-semibold text-gray-900 mt-1 line-clamp-2">
							SportPods Wireless — IPX7 Waterproof
						</h3>
						<div class="flex items-center gap-1 mt-1.5">
							<svg
								class="w-3.5 h-3.5 text-accent-500"
								fill="currentColor"
								viewBox="0 0 20 20"
							>
								<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
							</svg>
							<span class="text-xs text-gray-500">4.6 (312)</span>
						</div>
						<div class="flex items-center justify-between mt-3">
							<span class="text-lg font-bold text-gray-900">$54.99</span>
							<button class="p-2 bg-brand-600 hover:bg-brand-700 text-white rounded-xl transition">
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

				{/* <!-- Result 5 --> */}
				<div class="product-card bg-white rounded-2xl border border-gray-100 overflow-hidden transition-all duration-300 cursor-pointer">
					<div class="relative aspect-square bg-gray-50">
						<div class="absolute inset-0 bg-linear-to-br from-amber-50 to-orange-100 flex items-center justify-center">
							<svg
								class="w-14 h-14 text-amber-200"
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
						<span class="absolute top-2 left-2 px-2 py-0.5 bg-red-500 text-white text-[10px] font-bold rounded-md uppercase">
							-30%
						</span>
						<button
							class="absolute top-2 right-2 p-1.5 bg-white/80 backdrop-blur rounded-full hover:bg-white transition shadow-sm"
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
						<span class="text-xs text-brand-600 font-medium">AudioHive</span>
						<h3 class="text-sm font-semibold text-gray-900 mt-1 line-clamp-2">
							BassX Wireless On-Ear — 50h Battery
						</h3>
						<div class="flex items-center gap-1 mt-1.5">
							<svg
								class="w-3.5 h-3.5 text-accent-500"
								fill="currentColor"
								viewBox="0 0 20 20"
							>
								<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
							</svg>
							<span class="text-xs text-gray-500">4.5 (156)</span>
						</div>
						<div class="flex items-center justify-between mt-3">
							<div>
								<span class="text-lg font-bold text-gray-900">$55.99</span>
								<span class="text-sm text-gray-400 line-through ml-1">
									$79.99
								</span>
							</div>
							<button class="p-2 bg-brand-600 hover:bg-brand-700 text-white rounded-xl transition">
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

				{/* <!-- Result 6 --> */}
				<div class="product-card bg-white rounded-2xl border border-gray-100 overflow-hidden transition-all duration-300 cursor-pointer">
					<div class="relative aspect-square bg-gray-50">
						<div class="absolute inset-0 bg-linear-to-br from-sky-50 to-blue-100 flex items-center justify-center">
							<svg
								class="w-14 h-14 text-sky-200"
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
						<span class="absolute top-2 left-2 px-2 py-0.5 bg-accent-500 text-white text-[10px] font-bold rounded-md">
							#1 Best Seller
						</span>
						<button
							class="absolute top-2 right-2 p-1.5 bg-white/80 backdrop-blur rounded-full hover:bg-white transition shadow-sm"
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
						<span class="text-xs text-brand-600 font-medium">TechVault</span>
						<h3 class="text-sm font-semibold text-gray-900 mt-1 line-clamp-2">
							Wireless Noise-Cancelling Earbuds — BT 5.3
						</h3>
						<div class="flex items-center gap-1 mt-1.5">
							<svg
								class="w-3.5 h-3.5 text-accent-500"
								fill="currentColor"
								viewBox="0 0 20 20"
							>
								<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
							</svg>
							<span class="text-xs text-gray-500">4.9 (1.2k)</span>
						</div>
						<div class="flex items-center justify-between mt-3">
							<span class="text-lg font-bold text-gray-900">$79.99</span>
							<button class="p-2 bg-brand-600 hover:bg-brand-700 text-white rounded-xl transition">
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

			{/* <!-- Pagination --> */}
			<div class="flex items-center justify-center gap-1 mt-10">
				<button
					class="w-9 h-9 rounded-lg text-sm text-gray-400 hover:bg-gray-100 transition flex items-center justify-center"
					disabled
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
							d="M15 19l-7-7 7-7"
						/>
					</svg>
				</button>
				<button class="w-9 h-9 rounded-lg text-sm font-semibold bg-brand-600 text-white">
					1
				</button>
				<button class="w-9 h-9 rounded-lg text-sm font-medium text-gray-600 hover:bg-gray-100 transition">
					2
				</button>
				<button class="w-9 h-9 rounded-lg text-sm font-medium text-gray-600 hover:bg-gray-100 transition">
					3
				</button>
				<button class="w-9 h-9 rounded-lg text-sm font-medium text-gray-600 hover:bg-gray-100 transition">
					4
				</button>
				<span class="w-9 h-9 flex items-center justify-center text-gray-400 text-sm">
					...
				</span>
				<button class="w-9 h-9 rounded-lg text-sm font-medium text-gray-600 hover:bg-gray-100 transition">
					13
				</button>
				<button class="w-9 h-9 rounded-lg text-sm text-gray-600 hover:bg-gray-100 transition flex items-center justify-center">
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
							d="M9 5l7 7-7 7"
						/>
					</svg>
				</button>
			</div>
		</div>
	);
};
