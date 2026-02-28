import { Link } from "@tanstack/solid-router";
export const StoreTabs = () => {
	return (
		<div class="bg-white border-b border-gray-100 sticky top-[57px] z-40">
			<div class="max-w-7xl mx-auto px-4">
				<div class="flex items-center gap-6 overflow-x-auto scrollbar-hide">
					<Link
						to="/store/$storeSlug"
						params={{ storeSlug: "techvault" }}
						class="tab-active whitespace-nowrap py-3 text-sm font-semibold border-b-2 transition"
					>
						All Products
					</Link>
					<Link
						to="/store/$storeSlug"
						params={{ storeSlug: "techvault" }}
						class="whitespace-nowrap py-3 text-sm font-medium text-gray-400 border-b-2 border-transparent hover:text-gray-600 transition"
					>
						On Sale
					</Link>
					<Link
						to="/store/$storeSlug"
						params={{ storeSlug: "techvault" }}
						class="whitespace-nowrap py-3 text-sm font-medium text-gray-400 border-b-2 border-transparent hover:text-gray-600 transition"
					>
						New Arrivals
					</Link>
					<Link
						to="/store/$storeSlug"
						params={{ storeSlug: "techvault" }}
						class="whitespace-nowrap py-3 text-sm font-medium text-gray-400 border-b-2 border-transparent hover:text-gray-600 transition"
					>
						Best Sellers
					</Link>
					<Link
						to="/store/$storeSlug"
						params={{ storeSlug: "techvault" }}
						class="whitespace-nowrap py-3 text-sm font-medium text-gray-400 border-b-2 border-transparent hover:text-gray-600 transition"
					>
						Ratings &amp; Reviews
					</Link>
					<Link
						to="/store/$storeSlug"
						params={{ storeSlug: "techvault" }}
						class="whitespace-nowrap py-3 text-sm font-medium text-gray-400 border-b-2 border-transparent hover:text-gray-600 transition"
					>
						About
					</Link>
				</div>
			</div>
		</div>
	);
};
