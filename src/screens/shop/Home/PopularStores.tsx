import { linkOptions } from "@tanstack/solid-router";
import { For } from "solid-js";
import { Grid4 } from "@/ui/grid";
import { ScreenSectionCard } from "@/ui/screen-section-card";
import { StoreCard, type StoreCardData } from "@/ui/store-card";

const POPULAR_STORES: StoreCardData[] = [
	{
		name: "TechVault",
		initials: "TV",
		category: "Electronics \u2022 Gadgets",
		rating: "4.9",
		reviewCount: "2.1k reviews",
		avatarGradient: "from-blue-500 to-indigo-600",
		avatarShadow: "shadow-blue-500/20",
	},
	{
		name: "StyleHouse",
		initials: "SH",
		category: "Fashion \u2022 Accessories",
		rating: "4.8",
		reviewCount: "1.8k reviews",
		avatarGradient: "from-rose-500 to-pink-600",
		avatarShadow: "shadow-rose-500/20",
	},
	{
		name: "GreenNest",
		initials: "GN",
		category: "Beauty \u2022 Wellness",
		rating: "4.9",
		reviewCount: "956 reviews",
		avatarGradient: "from-emerald-500 to-teal-600",
		avatarShadow: "shadow-emerald-500/20",
		following: true,
	},
	{
		name: "FitGear Pro",
		initials: "FG",
		category: "Sports \u2022 Fitness",
		rating: "4.7",
		reviewCount: "743 reviews",
		avatarGradient: "from-orange-500 to-amber-600",
		avatarShadow: "shadow-orange-500/20",
	},
];

export const PopularStores = () => {
	return (
		<ScreenSectionCard
			title="Popular Stores"
			alternate
			description="Follow stores to get notified of new products &amp; deals"
			action={linkOptions({ label: "All Stores", to: "/stores" })}
		>
			<Grid4>
				{/* <For each={POPULAR_STORES}>
					{(store) => <StoreCard store={store} />}
				</For> */}
			</Grid4>
		</ScreenSectionCard>
	);
};
