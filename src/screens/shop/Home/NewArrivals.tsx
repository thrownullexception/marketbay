import { linkOptions } from "@tanstack/solid-router";
import { For } from "solid-js";
import {
	ProductCard,
	type ProductCardData,
} from "@/screens/_components/product/card";
import { ScreenSectionCard } from "@/screens/_components/screen-section-card";
import { Grid5 } from "@/ui/grid";

const newArrivals: ProductCardData[] = [
	{
		storeName: "TechVault",
		name: "Wireless Noise-Cancelling Earbuds",
		price: "$79.99",
		badge: "New",
		badgeColor: "bg-brand-600",
	},
	{
		storeName: "BookNook",
		name: "The Art of Focus — 2026 Bestseller",
		price: "$16.99",
		badge: "New",
		badgeColor: "bg-brand-600",
	},
	{
		storeName: "GreenNest",
		name: "Organic Tea Tree Oil 30ml",
		price: "$12.49",
		badge: "New",
		badgeColor: "bg-brand-600",
	},
	{
		storeName: "StyleHouse",
		name: "Linen Blend Summer Dress",
		price: "$64.00",
		badge: "New",
		badgeColor: "bg-brand-600",
	},
	{
		storeName: "FitGear Pro",
		name: "Adjustable Dumbbell Set 25kg",
		price: "$149.00",
		badge: "New",
		badgeColor: "bg-brand-600",
	},
];

export const NewArrivals = () => {
	return (
		<ScreenSectionCard
			title="New Arrivals"
			description="Just listed across all stores"
			action={linkOptions({
				label: "View All",
				to: "/search",
				search: { newArrivals: true },
			})}
		>
			<Grid5>
				<For each={newArrivals}>
					{(product) => <ProductCard product={product} />}
				</For>
			</Grid5>
		</ScreenSectionCard>
	);
};
