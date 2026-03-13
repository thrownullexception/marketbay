import { Link, linkOptions } from "@tanstack/solid-router";
import {
	type FilterConfig,
	ProductListing,
} from "@/components/product/listing";
import { Breadcrumb } from "@/ui/breadcrumb";
import { Container } from "@/ui/layout";

const CATEGORY_FILTERS: FilterConfig[] = [
	{
		type: "price_range",
		options: [
			{ label: "Under $25", value: "under_25" },
			{ label: "$25 - $50", value: "25_50" },
			{ label: "$50 - $100", value: "50_100" },
			{ label: "$100 - $300", value: "100_300" },
			{ label: "Over $300", value: "over_300" },
		],
	},
	{
		type: "checkbox",
		title: "Your Favourite Stores",
		name: "favourite_stores",
		options: [
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
		],
	},
	{
		type: "radio",
		title: "Condition",
		name: "condition",
		options: [
			{ label: "New", value: "new" },
			{ label: "Refurbished", value: "refurbished" },
			{ label: "Used", value: "used" },
		],
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
				<Container class="py-8 relative">
					<div class="flex items-center gap-4">
						<div class="w-14 h-14 rounded-2xl bg-white/10 backdrop-blur flex items-center justify-center shrink-0">
							<svg
								class="w-7 h-7 text-white"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
								stroke-width="1.5"
							>
								<title>todo</title>
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
				</Container>
			</section>

			<ProductListing dataSource="category" filters={CATEGORY_FILTERS} />
		</>
	);
};
