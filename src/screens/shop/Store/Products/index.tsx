import {
	type FilterConfig,
	ProductListing,
} from "@/screens/_components/product-listing";

const STORE_FILTERS: FilterConfig[] = [
	{
		type: "checkbox",
		title: "Category",
		name: "category",
		options: [
			{ label: "Headphones", value: "headphones", count: "48" },
			{ label: "Monitors", value: "monitors", count: "32" },
			{ label: "Keyboards", value: "keyboards", count: "27" },
			{ label: "Speakers", value: "speakers", count: "41" },
			{ label: "Cables & Adapters", value: "cables_adapters", count: "89" },
			{
				label: "Phone Accessories",
				value: "phone_accessories",
				count: "65",
			},
		],
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
];

export const ShopStoreProducts = () => {
	return <ProductListing dataSource="store" filters={STORE_FILTERS} />;
};
