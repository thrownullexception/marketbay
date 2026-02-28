import { For } from "solid-js";
import {
	ProductCard,
	type ProductCardData,
} from "@/screens/_components/product-card";

const TODAYS_DEALS: ProductCardData[] = [
	{
		storeName: "TechVault",
		name: `Ultra HD 27" Monitor — 4K IPS Display`,
		rating: "4.9",
		ratingCount: "128",
		price: "$299",
		originalPrice: "$399",
		imageGradient: "from-blue-50 to-indigo-100",
		iconColor: "text-brand-300",
		badge: "-25%",
	},
	{
		storeName: "StyleHouse",
		name: "Cashmere Blend Oversize Sweater",
		rating: "4.6",
		ratingCount: "64",
		price: "$59",
		originalPrice: "$89",
		imageGradient: "from-pink-50 to-rose-100",
		iconColor: "text-rose-300",
		badge: "-33%",
	},
	{
		storeName: "GreenNest",
		name: "Vitamin C Serum — Natural Glow",
		rating: "4.9",
		ratingCount: "312",
		price: "$24.99",
		originalPrice: "$34.99",
		imageGradient: "from-emerald-50 to-green-100",
		iconColor: "text-emerald-300",
		badge: "-28%",
		wishlisted: true,
	},
	{
		storeName: "FitGear Pro",
		name: "Resistance Band Set — Pro Series",
		rating: "4.7",
		ratingCount: "203",
		price: "$39.99",
		originalPrice: "$49.99",
		imageGradient: "from-cyan-50 to-sky-100",
		iconColor: "text-cyan-300",
		badge: "-20%",
	},
];

export const TodaysDeals = () => {
	return (
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
						href="/deals"
						class="text-sm font-semibold text-brand-600 hover:text-brand-700 transition hidden sm:inline-flex items-center gap-1"
					>
						View All <span>&rarr;</span>
					</a>
				</div>
				<div class="grid grid-cols-2 lg:grid-cols-4 gap-4">
					<For each={TODAYS_DEALS}>
						{(product) => <ProductCard product={product} />}
					</For>
				</div>
			</div>
		</section>
	);
};
