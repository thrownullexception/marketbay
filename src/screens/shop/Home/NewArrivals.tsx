import { useQuery } from "@tanstack/solid-query";
import { linkOptions } from "@tanstack/solid-router";
import { For } from "solid-js";
import { getShopTreaty } from "@/solid-start/shop.treaty";
import { createTreatyQueryOptions } from "@/solid-start/treaty-key";
import { Grid5 } from "@/ui/grid";
import {
	ProductCard,
	type ProductCardData,
} from "@/ui/product/card";
import { ScreenSectionCard } from "@/ui/screen-section-card";

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

export const newArrivalsQuery = createTreatyQueryOptions(
	getShopTreaty,
	(t) => t["user-adresses"].get(),
	{ initialData: [] },
);

export const NewArrivals = () => {
	const { data } = useQuery(() => newArrivalsQuery)	

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
{JSON.stringify(newArrivalsQuery.queryKey)}
				{/* {JSON.stringify(data)} */}
			<Grid5>
				<For each={newArrivals}>
					{(product) => <ProductCard product={product} />}
				</For>
			</Grid5>
		</ScreenSectionCard>
	);
};
