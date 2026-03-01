import { linkOptions } from "@tanstack/solid-router";
import { For } from "solid-js";
import {
	ProductCard,
	type ProductCardData,
} from "@/screens/_components/product-card";
import { SearchToolbar } from "@/screens/_components/search-toolbar";
import { Breadcrumb } from "@/ui/breadcrumb";
import { Pagination } from "@/ui/pagination";
import { StoreHero } from "./StoreHero";
import { StorePromo } from "./StorePromo";
import { StoreReviews } from "./StoreReviews";
import { StoreSidebar } from "./StoreSidebar";
import { StoreTabs } from "./StoreTabs";

const STORE_PRODUCTS: ProductCardData[] = [
	{
		storeName: "TechVault",
		name: "Pro Studio Wireless Headphones — ANC",
		rating: "4.9",
		ratingCount: "243",
		price: "$59.99",
		originalPrice: "$99.99",
		badge: "-40%",
	},
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
		storeName: "TechVault",
		name: "MagSafe Case — Frosted Matte Finish",
		rating: "4.8",
		ratingCount: "890",
		price: "$19.99",
		badge: "New",
		badgeColor: "bg-brand-600",
		wishlisted: true,
	},
	{
		storeName: "TechVault",
		name: "Mechanical Keyboard — Cherry MX Brown",
		rating: "4.7",
		ratingCount: "312",
		price: "$89.99",
	},
	{
		storeName: "TechVault",
		name: "Tablet Stand — Adjustable Aluminum",
		rating: "4.6",
		ratingCount: "76",
		price: "$33.99",
		originalPrice: "$39.99",
		badge: "-15%",
	},
	{
		storeName: "TechVault",
		name: "Portable Bluetooth Speaker — Waterproof",
		rating: "4.8",
		ratingCount: "456",
		price: "$49.99",
	},
];

export const ShopStoreScreen = () => {
	return (
		<>
			<Breadcrumb
				items={linkOptions([
					{ label: "Home", to: "/" },
					{ label: "Stores", to: "/stores" },
					{
						label: "TechVault",
						to: "/store/$storeSlug",
						params: { storeSlug: "techvault" },
					},
				])}
			/>
			<StoreHero />
			<StorePromo />
			<StoreTabs />
			<main class="max-w-7xl mx-auto px-4 py-8">
				<div class="flex flex-col lg:flex-row gap-8">
					<StoreSidebar />
					<div class="flex-1 min-w-0">
						<SearchToolbar />
						<div class="grid grid-cols-2 lg:grid-cols-3 gap-4">
							<For each={STORE_PRODUCTS}>
								{(product) => <ProductCard product={product} />}
							</For>
						</div>
						<Pagination />
					</div>
				</div>
			</main>
			<StoreReviews />
		</>
	);
};
