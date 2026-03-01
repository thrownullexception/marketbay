import { Link } from "@tanstack/solid-router";
import { For } from "solid-js";
import {
	ProductCard,
	type ProductCardData,
} from "@/screens/_components/product-card";

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
		<section class="mt-14 border-t border-gray-100 pt-10">
			<div class="flex items-end justify-between mb-6">
				<div>
					<h2 class="text-xl font-bold text-gray-900">More from TechVault</h2>
					<p class="text-sm text-gray-500 mt-0.5">
						Other products from this seller
					</p>
				</div>
				<Link
					to="/store/$storeSlug"
					params={{ storeSlug: "techvault" }}
					class="text-sm font-semibold text-brand-600 hover:text-brand-700 transition hidden sm:inline-flex items-center gap-1"
				>
					Visit Store <span>&rarr;</span>
				</Link>
			</div>
			<div class="grid grid-cols-2 lg:grid-cols-4 gap-4">
				<For each={MORE_PRODUCTS}>
					{(product) => <ProductCard product={product} />}
				</For>
			</div>
		</section>
	);
};
