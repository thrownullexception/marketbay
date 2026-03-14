import { For, Match, Switch } from "solid-js";
import { ProductCard, type ProductCardData } from "@/components/product/card";
import {
	ActiveFilters,
	FilterOptions,
	PriceRangeFilter,
	RatingFilter,
} from "@/components/product/filters";
import { Grid3 } from "@/ui/grid";
import { Container, SideBar } from "@/ui/layout";
import { Pagination } from "@/ui/pagination";
import { SearchToolbar } from "./toolbar";

type FilterOption = {
	label: string;
	value: string;
	count?: string;
};

export type FilterConfig =
	| { type: "price_range"; options: FilterOption[] }
	| { type: "rating" }
	| {
			type: "checkbox";
			title: string;
			name: string;
			options: FilterOption[];
			values?: string[];
	  }
	| {
			type: "radio";
			title: string;
			name: string;
			options: FilterOption[];
			values?: string[];
	  };

const PRODUCT_DATA: Record<string, ProductCardData[]> = {
	store: [
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
	],
	category: [
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
	],
	search: [
		{
			storeName: "TechVault",
			name: "Pro Studio Wireless Headphones — ANC",
			rating: "4.9",
			ratingCount: "243",
			price: "$59.99",
			originalPrice: "$99.99",
			badge: "-40%",
			badgeColor: "bg-red-500",
		},
		{
			storeName: "SoundArc",
			name: "AirPulse True Wireless Earbuds — ANC Pro",
			rating: "4.8",
			ratingCount: "189",
			price: "$79.99",
			badge: "New",
			badgeColor: "bg-brand-600",
			wishlisted: true,
		},
		{
			storeName: "SoundArc",
			name: "Studio Max Over-Ear Headphones — Hi-Res",
			rating: "4.7",
			ratingCount: "97",
			price: "$63.99",
			originalPrice: "$79.99",
			badge: "-20%",
			badgeColor: "bg-red-500",
		},
		{
			storeName: "FitGear Pro",
			name: "SportPods Wireless — IPX7 Waterproof",
			rating: "4.6",
			ratingCount: "312",
			price: "$54.99",
		},
		{
			storeName: "AudioHive",
			name: "BassX Wireless On-Ear — 50h Battery",
			rating: "4.5",
			ratingCount: "156",
			price: "$55.99",
			originalPrice: "$79.99",
			badge: "-30%",
			badgeColor: "bg-red-500",
		},
		{
			storeName: "TechVault",
			name: "Wireless Noise-Cancelling Earbuds — BT 5.3",
			rating: "4.9",
			ratingCount: "1.2k",
			price: "$79.99",
			badge: "#1 Best Seller",
			badgeColor: "bg-accent-500",
		},
		{
			storeName: "TechVault",
			name: "Pro Studio Wireless Headphones — ANC",
			rating: "4.9",
			ratingCount: "243",
			price: "$59.99",
			originalPrice: "$99.99",
			badge: "-40%",
			badgeColor: "bg-red-500",
		},
		{
			storeName: "SoundArc",
			name: "AirPulse True Wireless Earbuds — ANC Pro",
			rating: "4.8",
			ratingCount: "189",
			price: "$79.99",
			badge: "New",
			badgeColor: "bg-brand-600",
			wishlisted: true,
		},
		{
			storeName: "SoundArc",
			name: "Studio Max Over-Ear Headphones — Hi-Res",
			rating: "4.7",
			ratingCount: "97",
			price: "$63.99",
			originalPrice: "$79.99",
			badge: "-20%",
			badgeColor: "bg-red-500",
		},
		{
			storeName: "FitGear Pro",
			name: "SportPods Wireless — IPX7 Waterproof",
			rating: "4.6",
			ratingCount: "312",
			price: "$54.99",
		},
		{
			storeName: "AudioHive",
			name: "BassX Wireless On-Ear — 50h Battery",
			rating: "4.5",
			ratingCount: "156",
			price: "$55.99",
			originalPrice: "$79.99",
			badge: "-30%",
			badgeColor: "bg-red-500",
		},
		{
			storeName: "TechVault",
			name: "Wireless Noise-Cancelling Earbuds — BT 5.3",
			rating: "4.9",
			ratingCount: "1.2k",
			price: "$79.99",
			badge: "#1 Best Seller",
			badgeColor: "bg-accent-500",
		},
	],
};

const ProductFilters = (props: { filters: FilterConfig[] }) => {
	return (
		<aside class="w-full lg:w-60 shrink-0 lg:sticky lg:top-24 lg:self-start">
			<div class="space-y-6">
				<ActiveFilters />
				<For each={props.filters}>
					{(filter) => (
						<Switch>
							<Match when={filter.type === "price_range" && filter}>
								{(f) => (
									<PriceRangeFilter
										options={
											(f() as Extract<FilterConfig, { type: "price_range" }>)
												.options
										}
									/>
								)}
							</Match>
							<Match when={filter.type === "rating"}>
								<RatingFilter />
							</Match>
							<Match
								when={
									(filter.type === "checkbox" || filter.type === "radio") &&
									filter
								}
							>
								{(f) => {
									const cfg = f() as Extract<
										FilterConfig,
										{ type: "checkbox" | "radio" }
									>;
									return (
										<FilterOptions
											type={cfg.type}
											name={cfg.name}
											options={cfg.options}
											values={cfg.values ?? []}
											title={cfg.title}
										/>
									);
								}}
							</Match>
						</Switch>
					)}
				</For>
			</div>
		</aside>
	);
};

export const ProductListing = (props: {
	dataSource: string;
	filters: FilterConfig[];
}) => {
	const products = () => PRODUCT_DATA[props.dataSource] ?? [];

	return (
		<Container class="py-8">
			<SideBar
				left={<ProductFilters filters={props.filters} />}
				right={
					<>
						<SearchToolbar />
						<Grid3>
							<For each={products()}>
								{(product) => <ProductCard product={product} />}
							</For>
						</Grid3>
						<Pagination />
					</>
				}
			/>
		</Container>
	);
};
