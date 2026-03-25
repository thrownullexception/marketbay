import { linkOptions } from "@tanstack/solid-router";
import { For } from "solid-js";
import { Grid4 } from "@/ui/grid";
import { ProductCard, type ProductCardData } from "@/ui/product/card";
import { ScreenSectionCard } from "@/ui/screen-section-card";

const TODAYS_DEALS: ProductCardData[] = [
	{
		storeName: "TechVault",
		name: `Ultra HD 27" Monitor — 4K IPS Display`,
		rating: "4.9",
		ratingCount: "128",
		price: "$299",
		originalPrice: "$399",
		badge: "-25%",
	},
	{
		storeName: "StyleHouse",
		name: "Cashmere Blend Oversize Sweater",
		rating: "4.6",
		ratingCount: "64",
		price: "$59",
		originalPrice: "$89",
		badge: "-33%",
	},
	{
		storeName: "GreenNest",
		name: "Vitamin C Serum — Natural Glow",
		rating: "4.9",
		ratingCount: "312",
		price: "$24.99",
		originalPrice: "$34.99",
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
		badge: "-20%",
	},
];

export const TodaysDeals = () => {
	return (
		<ScreenSectionCard
			title="Today's Deals"
			description="Limited-time prices on top products"
			action={linkOptions({
				label: "View All",
				to: "/search",
				search: { deals: true },
			})}
		>
			<Grid4>
				<For each={TODAYS_DEALS}>
					{(product) => <ProductCard product={product} />}
				</For>
			</Grid4>
		</ScreenSectionCard>
	);
};
