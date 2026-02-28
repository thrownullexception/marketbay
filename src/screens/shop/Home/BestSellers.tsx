import { For } from "solid-js";

interface BestSellerProduct {
	rank: number;
	storeName: string;
	productName: string;
	rating: string;
	soldCount: string;
	price: string;
	gradientFrom: string;
	gradientTo: string;
	iconColor: string;
	iconPath: string;
}

const BEST_SELLERS: BestSellerProduct[] = [
	{
		rank: 1,
		storeName: "HomeHaven",
		productName: "Smart LED Floor Lamp — Dimmable",
		rating: "4.9",
		soldCount: "1.2k",
		price: "$54.99",
		gradientFrom: "from-amber-50",
		gradientTo: "to-yellow-100",
		iconColor: "text-amber-200",
		iconPath:
			"M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6",
	},
	{
		rank: 2,
		storeName: "TechVault",
		productName: "Phone Case — MagSafe Compatible",
		rating: "4.8",
		soldCount: "890",
		price: "$19.99",
		gradientFrom: "from-indigo-50",
		gradientTo: "to-blue-100",
		iconColor: "text-indigo-200",
		iconPath:
			"M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3",
	},
	{
		rank: 3,
		storeName: "GreenNest",
		productName: "Retinol Night Cream — Anti-Aging",
		rating: "4.9",
		soldCount: "745",
		price: "$29.99",
		gradientFrom: "from-green-50",
		gradientTo: "to-emerald-100",
		iconColor: "text-emerald-200",
		iconPath:
			"M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42",
	},
	{
		rank: 4,
		storeName: "StyleHouse",
		productName: "Canvas Tote Bag — Oversized",
		rating: "4.8",
		soldCount: "620",
		price: "$34.00",
		gradientFrom: "from-rose-50",
		gradientTo: "to-pink-100",
		iconColor: "text-rose-200",
		iconPath:
			"M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z",
	},
];

const ProductCard = (props: { product: BestSellerProduct }) => (
	<div class="product-card bg-white rounded-2xl border border-gray-100 overflow-hidden transition-all duration-300 cursor-pointer">
		<div class="relative aspect-square bg-gray-50">
			<div
				class={`absolute inset-0 bg-linear-to-br ${props.product.gradientFrom} ${props.product.gradientTo} flex items-center justify-center`}
			>
				<svg
					class={`w-16 h-16 ${props.product.iconColor}`}
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
					stroke-width="1"
				>
					<title>Product icon</title>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						d={props.product.iconPath}
					/>
				</svg>
			</div>
			<span class="absolute top-2 left-2 px-2 py-0.5 bg-accent-500 text-white text-[10px] font-bold rounded-md">
				#{props.product.rank}
			</span>
			<button
				type="button"
				class="absolute top-3 right-3 p-1.5 bg-white/80 backdrop-blur rounded-full hover:bg-white transition shadow-sm"
				aria-label="Bookmark"
			>
				<svg
					class="w-4 h-4 text-gray-400"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
					stroke-width="2"
				>
					<title>Bookmark</title>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
					/>
				</svg>
			</button>
		</div>
		<div class="p-4">
			<a
				href={`/store/${props.product.storeName.toLowerCase()}`}
				class="text-xs text-brand-600 font-medium hover:underline"
			>
				{props.product.storeName}
			</a>
			<h3 class="text-sm font-semibold text-gray-900 mt-1 line-clamp-2">
				{props.product.productName}
			</h3>
			<div class="flex items-center gap-1 mt-2">
				<svg
					class="w-3.5 h-3.5 text-accent-500"
					fill="currentColor"
					viewBox="0 0 20 20"
				>
					<title>Rating</title>
					<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
				</svg>
				<span class="text-xs text-gray-500">
					{props.product.rating} ({props.product.soldCount} sold)
				</span>
			</div>
			<div class="flex items-center justify-between mt-3">
				<span class="text-lg font-bold text-gray-900">
					{props.product.price}
				</span>
				<button
					type="button"
					class="p-2 bg-brand-600 hover:bg-brand-700 text-white rounded-xl transition"
					aria-label="Add to cart"
				>
					<svg
						class="w-4 h-4"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
						stroke-width="2"
					>
						<title>Add to cart</title>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							d="M12 4v16m8-8H4"
						/>
					</svg>
				</button>
			</div>
		</div>
	</div>
);

export const BestSellers = () => {
	return (
		<section class="py-10 bg-white">
			<div class="max-w-7xl mx-auto px-4">
				<div class="flex items-end justify-between mb-6">
					<div>
						<h2 class="text-xl font-bold text-gray-900">Best Sellers</h2>
						<p class="text-gray-500 text-sm mt-0.5">
							Top-rated products this month
						</p>
					</div>
					<a
						href="/best-sellers"
						class="text-sm font-semibold text-brand-600 hover:text-brand-700 transition hidden sm:inline-flex items-center gap-1"
					>
						See More <span>&rarr;</span>
					</a>
				</div>
				<div class="grid grid-cols-2 lg:grid-cols-4 gap-4">
					<For each={BEST_SELLERS}>
						{(product) => <ProductCard product={product} />}
					</For>
				</div>
			</div>
		</section>
	);
};
