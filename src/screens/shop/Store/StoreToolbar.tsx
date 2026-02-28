export const StoreToolbar = () => {
	return (
		<div class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-6">
			<p class="text-sm text-gray-500">
				Showing <span class="font-semibold text-gray-700">1–12</span> of{" "}
				<span class="font-semibold text-gray-700">342</span> products
			</p>
			<div class="flex items-center gap-3">
				<select class="text-sm border border-gray-200 rounded-lg px-3 py-2 bg-white text-gray-600 focus:outline-none focus:ring-2 focus:ring-brand-400 focus:border-transparent cursor-pointer">
					<option>Sort: Best Match</option>
					<option>Price: Low to High</option>
					<option>Price: High to Low</option>
					<option>Newest First</option>
					<option>Top Rated</option>
					<option>Most Popular</option>
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
	);
};
