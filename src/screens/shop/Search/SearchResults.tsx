import { For } from "solid-js";
import {
	ProductCard,
	type ProductCardData,
} from "@/screens/_components/product-card";
import { SearchToolbar } from "@/screens/_components/search-toolbar";
import { Pagination } from "@/ui/pagination";

const SEARCH_RESULTS: ProductCardData[] = [
	{
		storeName: "TechVault",
		name: "Pro Studio Wireless Headphones — ANC",
		rating: "4.9",
		ratingCount: "243",
		price: "$59.99",
		originalPrice: "$99.99",
		badge: "-40%",
		badgeColor: "bg-red-500",
	},
	{
		storeName: "SoundArc",
		name: "AirPulse True Wireless Earbuds — ANC Pro",
		rating: "4.8",
		ratingCount: "189",
		price: "$79.99",
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
		badge: "-20%",
		badgeColor: "bg-red-500",
	},
	{
		storeName: "FitGear Pro",
		name: "SportPods Wireless — IPX7 Waterproof",
		rating: "4.6",
		ratingCount: "312",
		price: "$54.99",
	},
	{
		storeName: "AudioHive",
		name: "BassX Wireless On-Ear — 50h Battery",
		rating: "4.5",
		ratingCount: "156",
		price: "$55.99",
		originalPrice: "$79.99",
		badge: "-30%",
		badgeColor: "bg-red-500",
	},
	{
		storeName: "TechVault",
		name: "Wireless Noise-Cancelling Earbuds — BT 5.3",
		rating: "4.9",
		ratingCount: "1.2k",
		price: "$79.99",
		badge: "#1 Best Seller",
		badgeColor: "bg-accent-500",
	},
];

export const SearchResults = () => {
	return (
		<div class="flex-1 min-w-0">
			<SearchToolbar />
			<div class="grid grid-cols-2 lg:grid-cols-3 gap-4">
				<For each={SEARCH_RESULTS}>
					{(product) => <ProductCard product={product} />}
				</For>
			</div>

			<Pagination />
		</div>
	);
};
