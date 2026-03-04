import { Link, linkOptions } from "@tanstack/solid-router";
import { For } from "solid-js";
import {
	ProductCard,
	type ProductCardData,
} from "@/screens/_components/product-card";
import {
	ActiveFilters,
	FilterOptions,
	PriceRangeFilter,
	RatingFilter,
} from "@/screens/_components/product-filters";
import { SearchToolbar } from "@/screens/_components/search-toolbar";
import { Breadcrumb } from "@/ui/breadcrumb";
import { Grid3 } from "@/ui/grid";
import { Pagination } from "@/ui/pagination";

const CATEGORY_PRODUCTS: ProductCardData[] = [
	{
		storeName: "TechVault",
		name: "Pro Studio Wireless Headphones — Active Noise Cancelling",
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
		name: "MagSafe Phone Case — Frosted Clear",
		rating: "4.8",
		ratingCount: "890",
		price: "$19.99",
		wishlisted: true,
	},
	{
		storeName: "GadgetWorld",
		name: "Mechanical Keyboard — RGB Hot-Swap",
		rating: "4.7",
		ratingCount: "156",
		price: "$89.99",
		badge: "New",
		badgeColor: "bg-brand-600",
	},
	{
		storeName: "SoundLab",
		name: "Portable Bluetooth Speaker — Waterproof IPX7",
		rating: "4.6",
		ratingCount: "312",
		price: "$42.49",
		originalPrice: "$49.99",
		badge: "-15%",
	},
	{
		storeName: "HomeHaven",
		name: "Smart LED Floor Lamp — Dimmable WiFi",
		rating: "4.9",
		ratingCount: "1.2k",
		price: "$54.99",
	},
	{
		storeName: "PixelHub",
		name: "Action Camera 4K — Underwater 30m",
		rating: "4.5",
		ratingCount: "87",
		price: "$79.99",
		originalPrice: "$99.99",
		badge: "-20%",
	},
	{
		storeName: "TechVault",
		name: "Fast Wireless Charger Pad — 15W MagSafe",
		rating: "4.7",
		ratingCount: "445",
		price: "$24.99",
	},
	{
		storeName: "HomeHaven",
		name: "Smart WiFi Router — Mesh System 3-Pack",
		rating: "4.8",
		ratingCount: "203",
		price: "$149.00",
		badge: "New",
		badgeColor: "bg-brand-600",
	},
];

export const CategoryScreen = () => {
	return (
		<>
			<Breadcrumb
				items={[
					{ label: "Home", link: linkOptions({ to: "/" }) },
					{
						label: "Electronics",
						link: linkOptions({
							to: "/category/$categorySlug",
							params: { categorySlug: "todo" },
						}),
					},
				]}
			/>

			<section class="bg-linear-to-r from-brand-700 to-brand-900 relative overflow-hidden">
				<div class="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48Y2lyY2xlIGN4PSIyMCIgY3k9IjIwIiByPSIxLjUiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4wNikiLz48L3N2Zz4=')] opacity-80"></div>
				<div class="max-w-7xl mx-auto px-4 py-8 relative">
					<div class="flex items-center gap-4">
						<div class="w-14 h-14 rounded-2xl bg-white/10 backdrop-blur flex items-center justify-center shrink-0">
							<svg
								aria-hidden="true"
								class="w-7 h-7 text-white"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
								stroke-width="1.5"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
								/>
							</svg>
						</div>
						<div>
							<h1 class="text-2xl lg:text-3xl font-extrabold text-white">
								Electronics
							</h1>
							<p class="text-brand-200 text-sm mt-0.5">
								1,248 products from 86 stores
							</p>
						</div>
					</div>
					<div class="flex gap-2 mt-5 overflow-x-auto scrollbar-hide pb-1">
						{[
							{ label: "Headphones", href: "#" },
							{ label: "Monitors", href: "#" },
							{ label: "Keyboards", href: "#" },
							{ label: "Speakers", href: "#" },
							{ label: "Phone Cases", href: "#" },
							{ label: "Chargers", href: "#" },
							{ label: "Cameras", href: "#" },
							{ label: "Smart Home", href: "#" },
						].map((category) => (
							<Link
								to="/category/$categorySlug"
								params={{ categorySlug: "todo" }}
								class="whitespace-nowrap px-3.5 py-1.5 bg-white/15 hover:bg-white/25 text-white text-xs font-medium rounded-full transition"
							>
								{category.label}
							</Link>
						))}
					</div>
				</div>
			</section>

			<main class="max-w-7xl mx-auto px-4 py-6 lg:py-8">
				<div class="flex gap-8">
					<aside class="hidden lg:block w-60 shrink-0">
						<div class="sticky top-24 space-y-6">
							<ActiveFilters />
							<PriceRangeFilter
								options={[
									{ label: "Under $25", value: "under_25" },
									{ label: "$25 – $50", value: "25_50" },
									{ label: "$50 – $100", value: "50_100" },
									{ label: "$100 – $300", value: "100_300" },
									{ label: "Over $300", value: "over_300" },
								]}
							/>
							<FilterOptions
								type="checkbox"
								name="favourite_stores"
								options={[
									{ label: "TechVault", value: "techvault", count: "412" },
									{ label: "GadgetWorld", value: "gadgetworld", count: "289" },
									{ label: "PixelHub", value: "pixelhub", count: "176" },
									{ label: "SoundLab", value: "soundlab", count: "143" },
									{ label: "HomeHaven", value: "homehaven", count: "98" },
									{ label: "SoundLab", value: "soundlab", count: "143" },
									{ label: "HomeHaven", value: "homehaven", count: "98" },
									{ label: "SoundLab", value: "soundlab", count: "143" },
									{ label: "HomeHaven", value: "homehaven", count: "98" },
									{ label: "SoundLab", value: "soundlab", count: "143" },
									{ label: "HomeHaven", value: "homehaven", count: "98" },
								]}
								values={[]}
								title="Your Favourite Stores"
							/>
							<RatingFilter />
							<FilterOptions
								type="radio"
								name="condition"
								options={[
									{ label: "New", value: "new" },
									{ label: "Refurbished", value: "refurbished" },
									{ label: "Used", value: "used" },
								]}
								values={[]}
								title="Condition"
							/>
						</div>
					</aside>

					<div class="flex-1 min-w-0">
						<SearchToolbar />
						<Grid3>
							<For each={CATEGORY_PRODUCTS}>
								{(product) => <ProductCard product={product} />}
							</For>
						</Grid3>
						<Pagination />
					</div>
				</div>
			</main>
		</>
	);
};
