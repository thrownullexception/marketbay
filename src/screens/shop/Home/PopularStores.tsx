import { For } from "solid-js";
import {
	StoreCard,
	type StoreCardData,
} from "@/screens/_components/store-card";

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
		<section class="py-10 bg-white">
			<div class="max-w-7xl mx-auto px-4">
				<div class="flex items-end justify-between mb-6">
					<div>
						<h2 class="text-xl font-bold text-gray-900">Popular Stores</h2>
						<p class="text-gray-500 text-sm mt-0.5">
							Follow stores to get notified of new products &amp; deals
						</p>
					</div>
					<a
						href="/stores"
						class="text-sm font-semibold text-brand-600 hover:text-brand-700 transition hidden sm:inline-flex items-center gap-1"
					>
						All Stores <span>&rarr;</span>
					</a>
				</div>
				<div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
					<For each={POPULAR_STORES}>
						{(store) => <StoreCard store={store} />}
					</For>
				</div>
			</div>
		</section>
	);
};
