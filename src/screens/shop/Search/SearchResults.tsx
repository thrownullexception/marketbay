import { LayoutGrid, ListIcon } from "lucide-solid";
import { For } from "solid-js";
import {
	ProductCard,
	type ProductCardData,
} from "@/screens/_components/product-card";
import { Pagination } from "@/ui/pagination";

const SEARCH_RESULTS: ProductCardData[] = [
	{
		storeName: "TechVault",
		name: "Pro Studio Wireless Headphones — ANC",
		rating: "4.9",
		ratingCount: "243",
		price: "$59.99",
		originalPrice: "$99.99",
		imageGradient: "from-blue-50 to-indigo-100",
		iconColor: "text-brand-200",
		badge: "-40%",
		badgeColor: "bg-red-500",
	},
	{
		storeName: "SoundArc",
		name: "AirPulse True Wireless Earbuds — ANC Pro",
		rating: "4.8",
		ratingCount: "189",
		price: "$79.99",
		imageGradient: "from-violet-50 to-purple-100",
		iconColor: "text-violet-200",
		badge: "New",
		badgeColor: "bg-brand-600",
		wishlisted: true,
	},
	{
		storeName: "SoundArc",
		name: "Studio Max Over-Ear Headphones — Hi-Res",
		rating: "4.7",
		ratingCount: "97",
		price: "$63.99",
		originalPrice: "$79.99",
		imageGradient: "from-rose-50 to-pink-100",
		iconColor: "text-rose-200",
		badge: "-20%",
		badgeColor: "bg-red-500",
	},
	{
		storeName: "FitGear Pro",
		name: "SportPods Wireless — IPX7 Waterproof",
		rating: "4.6",
		ratingCount: "312",
		price: "$54.99",
		imageGradient: "from-emerald-50 to-teal-100",
		iconColor: "text-emerald-200",
	},
	{
		storeName: "AudioHive",
		name: "BassX Wireless On-Ear — 50h Battery",
		rating: "4.5",
		ratingCount: "156",
		price: "$55.99",
		originalPrice: "$79.99",
		imageGradient: "from-amber-50 to-orange-100",
		iconColor: "text-amber-200",
		badge: "-30%",
		badgeColor: "bg-red-500",
	},
	{
		storeName: "TechVault",
		name: "Wireless Noise-Cancelling Earbuds — BT 5.3",
		rating: "4.9",
		ratingCount: "1.2k",
		price: "$79.99",
		imageGradient: "from-sky-50 to-blue-100",
		iconColor: "text-sky-200",
		badge: "#1 Best Seller",
		badgeColor: "bg-accent-500",
	},
];

export const SearchResults = () => {
	return (
		<div class="flex-1 min-w-0">
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
							type="button"
							class="p-2 bg-brand-50 text-brand-600"
							aria-label="Grid view"
						>
							<LayoutGrid class="w-4 h-4" />
						</button>
						<button
							type="button"
							class="p-2 text-gray-400 hover:text-gray-600"
							aria-label="List view"
						>
							<ListIcon class="w-4 h-4" />
						</button>
					</div>
				</div>
			</div>

			<div class="grid grid-cols-2 lg:grid-cols-3 gap-4">
				<For each={SEARCH_RESULTS}>
					{(product) => <ProductCard product={product} />}
				</For>
			</div>

			<Pagination />
		</div>
	);
};
