import { linkOptions } from "@tanstack/solid-router";
import {
	type FilterConfig,
	ProductListing,
} from "@/screens/_components/product-listing";
import { Breadcrumb } from "@/ui/breadcrumb";
import { MatchingStores } from "./MatchingStores";
import { SearchHeader } from "./SearchHeader";

const SEARCH_FILTERS: FilterConfig[] = [
	{
		type: "checkbox",
		title: "Category",
		name: "category",
		options: [
			{ label: "Over-Ear", value: "over_ear", count: "52" },
			{ label: "In-Ear / Earbuds", value: "in_ear", count: "64" },
			{ label: "On-Ear", value: "on_ear", count: "18" },
			{ label: "Gaming Headsets", value: "gaming_headsets", count: "14" },
			{ label: "Sports / Workout", value: "sports_workout", count: "8" },
		],
		values: ["over_ear"],
	},
	{
		type: "price_range",
		options: [
			{ label: "Under $25", value: "under_25" },
			{ label: "$25 – $50", value: "25_50" },
			{ label: "$50 – $100", value: "50_100" },
			{ label: "$100 – $300", value: "100_300" },
			{ label: "Over $300", value: "over_300" },
		],
	},
	{ type: "rating" },
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
		type: "checkbox",
		title: "Specifications",
		name: "specifications",
		options: [
			{ label: "Noise Cancelling", value: "noise_cancelling", count: "412" },
			{ label: "Bluetooth 5.0+", value: "bluetooth_5_0", count: "289" },
			{ label: "Waterproof", value: "waterproof", count: "176" },
			{
				label: "Built-in Microphone",
				value: "built_in_microphone",
				count: "143",
			},
			{ label: "Foldable", value: "foldable", count: "98" },
		],
	},
];

export const SearchScreen = () => {
	return (
		<>
			<Breadcrumb
				items={[
					{ label: "Home", link: linkOptions({ to: "/" }) },
					{
						label: "Search results for 'wireless headphones'",
						link: linkOptions({ to: "/search" }),
					},
				]}
			/>
			<SearchHeader />
			<MatchingStores />
			<ProductListing dataSource="search" filters={SEARCH_FILTERS} />
		</>
	);
};
