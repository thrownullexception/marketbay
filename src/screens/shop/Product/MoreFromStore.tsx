import { linkOptions } from "@tanstack/solid-router";
import { For } from "solid-js";
import { Grid4 } from "@/ui/grid";
import { ProductCard, type ProductCardData } from "@/ui/product/card";
import { ScreenSectionCard } from "@/ui/screen-section-card";

const MORE_PRODUCTS: ProductCardData[] = [
	{
		storeName: "TechVault",
		name: `Ultra HD 27" Monitor`,
		rating: "4.9",
		ratingCount: "128",
		price: "$299",
		originalPrice: "$399",
		badge: "-25%",
	},
	{
		storeName: "TechVault",
		name: "MagSafe Case — Frosted",
		rating: "4.8",
		ratingCount: "890",
		price: "$19.99",
	},
	{
		storeName: "TechVault",
		name: "Mechanical Keyboard",
		rating: "4.7",
		ratingCount: "312",
		price: "$89.99",
	},
	{
		storeName: "TechVault",
		name: "Bluetooth Speaker",
		rating: "4.8",
		ratingCount: "456",
		price: "$42.49",
		originalPrice: "$49.99",
		badge: "-15%",
	},
];

export const MoreFromStore = () => {
	return (
		<ScreenSectionCard
			title="More from TechVault"
			description="Other products from this seller"
			action={linkOptions({
				label: "Visit Store",
				to: "/store/$storeSlug",
				params: { storeSlug: "techvault" },
			})}
		>
			<Grid4>
				<For each={MORE_PRODUCTS}>
					{(product) => <ProductCard product={product} />}
				</For>
			</Grid4>
		</ScreenSectionCard>
	);
};
