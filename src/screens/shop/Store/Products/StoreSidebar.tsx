import {
	ActiveFilters,
	FilterOptions,
	PriceRangeFilter,
	RatingFilter,
} from "@/screens/_components/product-filters";

export const StoreSidebar = () => {
	return (
		<aside class="w-full lg:w-60 shrink-0">
			<div class="lg:sticky lg:top-[120px] space-y-6">
				<ActiveFilters />
				<FilterOptions
					type="checkbox"
					name="category"
					options={[
						{ label: "Headphones", value: "headphones", count: "48" },
						{ label: "Monitors", value: "monitors", count: "32" },
						{ label: "Keyboards", value: "keyboards", count: "27" },
						{ label: "Speakers", value: "speakers", count: "41" },
						{
							label: "Cables & Adapters",
							value: "cables_adapters",
							count: "89",
						},
						{
							label: "Phone Accessories",
							value: "phone_accessories",
							count: "65",
						},
					]}
					values={[]}
					title="Category"
				/>
				<PriceRangeFilter
					options={[
						{ label: "Under $25", value: "under_25" },
						{ label: "$25 – $50", value: "25_50" },
						{ label: "$50 – $100", value: "50_100" },
						{ label: "$100 – $300", value: "100_300" },
						{ label: "Over $300", value: "over_300" },
					]}
				/>
				<RatingFilter />
			</div>
		</aside>
	);
};
