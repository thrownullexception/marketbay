export const StoresToolbar = () => {
	const categories = [
		{ name: "All Stores", active: true },
		{ name: "Electronics" },
		{ name: "Fashion" },
		{ name: "Beauty" },
		{ name: "Home" },
		{ name: "Sports" },
		{ name: "Books" },
		{ name: "Groceries" },
	];

	return (
		<div class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
			<div class="flex items-center gap-2 overflow-x-auto scrollbar-hide pb-1">
				{categories.map((cat) => (
					<button
						class={`px-4 py-2 text-xs font-semibold rounded-full whitespace-nowrap ${
							cat.active
								? "bg-brand-600 text-white"
								: "bg-white text-gray-600 border border-gray-200 hover:border-brand-300 hover:text-brand-600 transition"
						}`}
					>
						{cat.name}
					</button>
				))}
			</div>
			<select class="text-sm border border-gray-200 rounded-lg px-3 py-2 bg-white text-gray-600 focus:outline-none focus:ring-2 focus:ring-brand-400 focus:border-transparent cursor-pointer flex-shrink-0">
				<option>Sort: Most Popular</option>
				<option>Top Rated</option>
				<option>Most Products</option>
				<option>Most Followers</option>
				<option>Newest</option>
			</select>
		</div>
	);
};
