export const PopularStores = () => {
	return (
		<section class="py-10 bg-white">
			<div class="max-w-7xl mx-auto px-4">
				<div class="flex items-end justify-between mb-6">
					<div>
						<h2 class="text-xl font-bold text-gray-900">Popular Stores</h2>
						<p class="text-gray-500 text-sm mt-0.5">
							Follow stores to get notified of new products &amp; deals
						</p>
					</div>
					<a
						href="#"
						class="text-sm font-semibold text-brand-600 hover:text-brand-700 transition hidden sm:inline-flex items-center gap-1"
					>
						All Stores <span>&rarr;</span>
					</a>
				</div>
				<div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
					<div class="store-card bg-white rounded-2xl border border-gray-100 p-5 transition-all duration-300">
						<div class="flex items-center gap-3">
							<div class="w-12 h-12 rounded-xl bg-linear-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-white text-sm font-bold flex-shrink-0 shadow-md shadow-blue-500/20">
								TV
							</div>
							<div class="min-w-0">
								<h3 class="font-semibold text-gray-900 text-sm truncate">
									TechVault
								</h3>
								<p class="text-xs text-gray-500 truncate">
									Electronics &bull; Gadgets
								</p>
								<div class="flex items-center gap-1 mt-0.5">
									<svg
										class="w-3 h-3 text-accent-500"
										fill="currentColor"
										viewBox="0 0 20 20"
									>
										<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
									</svg>
									<span class="text-xs text-gray-500">
										4.9 &bull; 2.1k reviews
									</span>
								</div>
							</div>
						</div>
						<div class="flex gap-2 mt-4">
							<button class="flex-1 px-3 py-2 bg-brand-50 hover:bg-brand-100 text-brand-600 text-xs font-semibold rounded-lg transition">
								Follow
							</button>
							<button
								class="px-3 py-2 bg-gray-50 hover:bg-gray-100 text-gray-500 text-xs font-semibold rounded-lg transition"
								aria-label="Chat with seller"
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
										d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
									/>
								</svg>
							</button>
							<a
								href="#"
								class="px-3 py-2 bg-gray-50 hover:bg-gray-100 text-gray-500 text-xs font-semibold rounded-lg transition"
								aria-label="Visit store"
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
										d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
									/>
								</svg>
							</a>
						</div>
					</div>
					<div class="store-card bg-white rounded-2xl border border-gray-100 p-5 transition-all duration-300">
						<div class="flex items-center gap-3">
							<div class="w-12 h-12 rounded-xl bg-linear-to-br from-rose-500 to-pink-600 flex items-center justify-center text-white text-sm font-bold flex-shrink-0 shadow-md shadow-rose-500/20">
								SH
							</div>
							<div class="min-w-0">
								<h3 class="font-semibold text-gray-900 text-sm truncate">
									StyleHouse
								</h3>
								<p class="text-xs text-gray-500 truncate">
									Fashion &bull; Accessories
								</p>
								<div class="flex items-center gap-1 mt-0.5">
									<svg
										class="w-3 h-3 text-accent-500"
										fill="currentColor"
										viewBox="0 0 20 20"
									>
										<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
									</svg>
									<span class="text-xs text-gray-500">
										4.8 &bull; 1.8k reviews
									</span>
								</div>
							</div>
						</div>
						<div class="flex gap-2 mt-4">
							<button class="flex-1 px-3 py-2 bg-brand-50 hover:bg-brand-100 text-brand-600 text-xs font-semibold rounded-lg transition">
								Follow
							</button>
							<button
								class="px-3 py-2 bg-gray-50 hover:bg-gray-100 text-gray-500 text-xs font-semibold rounded-lg transition"
								aria-label="Chat with seller"
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
										d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
									/>
								</svg>
							</button>
							<a
								href="#"
								class="px-3 py-2 bg-gray-50 hover:bg-gray-100 text-gray-500 text-xs font-semibold rounded-lg transition"
								aria-label="Visit store"
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
										d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
									/>
								</svg>
							</a>
						</div>
					</div>
					<div class="store-card bg-white rounded-2xl border border-gray-100 p-5 transition-all duration-300">
						<div class="flex items-center gap-3">
							<div class="w-12 h-12 rounded-xl bg-linear-to-br from-emerald-500 to-teal-600 flex items-center justify-center text-white text-sm font-bold flex-shrink-0 shadow-md shadow-emerald-500/20">
								GN
							</div>
							<div class="min-w-0">
								<h3 class="font-semibold text-gray-900 text-sm truncate">
									GreenNest
								</h3>
								<p class="text-xs text-gray-500 truncate">
									Beauty &bull; Wellness
								</p>
								<div class="flex items-center gap-1 mt-0.5">
									<svg
										class="w-3 h-3 text-accent-500"
										fill="currentColor"
										viewBox="0 0 20 20"
									>
										<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
									</svg>
									<span class="text-xs text-gray-500">
										4.9 &bull; 956 reviews
									</span>
								</div>
							</div>
						</div>
						<div class="flex gap-2 mt-4">
							<button class="flex-1 px-3 py-2 bg-brand-600 hover:bg-brand-700 text-white text-xs font-semibold rounded-lg transition">
								Following
							</button>
							<button
								class="px-3 py-2 bg-gray-50 hover:bg-gray-100 text-gray-500 text-xs font-semibold rounded-lg transition"
								aria-label="Chat with seller"
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
										d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
									/>
								</svg>
							</button>
							<a
								href="#"
								class="px-3 py-2 bg-gray-50 hover:bg-gray-100 text-gray-500 text-xs font-semibold rounded-lg transition"
								aria-label="Visit store"
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
										d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
									/>
								</svg>
							</a>
						</div>
					</div>
					<div class="store-card bg-white rounded-2xl border border-gray-100 p-5 transition-all duration-300">
						<div class="flex items-center gap-3">
							<div class="w-12 h-12 rounded-xl bg-linear-to-br from-orange-500 to-amber-600 flex items-center justify-center text-white text-sm font-bold flex-shrink-0 shadow-md shadow-orange-500/20">
								FG
							</div>
							<div class="min-w-0">
								<h3 class="font-semibold text-gray-900 text-sm truncate">
									FitGear Pro
								</h3>
								<p class="text-xs text-gray-500 truncate">
									Sports &bull; Fitness
								</p>
								<div class="flex items-center gap-1 mt-0.5">
									<svg
										class="w-3 h-3 text-accent-500"
										fill="currentColor"
										viewBox="0 0 20 20"
									>
										<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
									</svg>
									<span class="text-xs text-gray-500">
										4.7 &bull; 743 reviews
									</span>
								</div>
							</div>
						</div>
						<div class="flex gap-2 mt-4">
							<button class="flex-1 px-3 py-2 bg-brand-50 hover:bg-brand-100 text-brand-600 text-xs font-semibold rounded-lg transition">
								Follow
							</button>
							<button
								class="px-3 py-2 bg-gray-50 hover:bg-gray-100 text-gray-500 text-xs font-semibold rounded-lg transition"
								aria-label="Chat with seller"
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
										d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
									/>
								</svg>
							</button>
							<a
								href="#"
								class="px-3 py-2 bg-gray-50 hover:bg-gray-100 text-gray-500 text-xs font-semibold rounded-lg transition"
								aria-label="Visit store"
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
										d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
									/>
								</svg>
							</a>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};
