import { linkOptions } from "@tanstack/solid-router";
import { For } from "solid-js";
import {
	ProductCard,
	type ProductCardData,
} from "@/screens/_components/product-card";
import { ScreenSectionCard } from "@/screens/_components/screen-section-card";

const BEST_SELLERS: ProductCardData[] = [
	{
		badge: "#1",
		badgeColor: "bg-accent-500",
		storeName: "HomeHaven",
		name: "Smart LED Floor Lamp — Dimmable",
		rating: "4.9",
		ratingCount: "1.2k",
		price: "$54.99",
	},
	{
		badge: "#2",
		badgeColor: "bg-accent-500",
		storeName: "TechVault",
		name: "Phone Case — MagSafe Compatible",
		rating: "4.8",
		ratingCount: "890",
		price: "$19.99",
	},
	{
		badge: "#3",
		badgeColor: "bg-accent-500",
		storeName: "GreenNest",
		name: "Retinol Night Cream — Anti-Aging",
		rating: "4.9",
		ratingCount: "745",
		price: "$29.99",
	},
	{
		badge: "#4",
		badgeColor: "bg-accent-500",
		storeName: "StyleHouse",
		name: "Canvas Tote Bag — Oversized",
		rating: "4.8",
		ratingCount: "620",
		price: "$34.00",
	},
];

export const BestSellers = () => {
	return (
		<ScreenSectionCard
			title="Best Sellers"
			description="Top-rated products this month"
			action={linkOptions({
				label: "View All",
				to: "/search",
				search: { bestSellers: true },
			})}
		>
			<div class="grid grid-cols-2 lg:grid-cols-4 gap-4">
				<For each={BEST_SELLERS}>
					{(product) => <ProductCard product={product} />}
				</For>
			</div>
		</ScreenSectionCard>
	);
};
