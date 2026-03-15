import { For } from "solid-js";
import { Container } from "@/ui/container";
import {
	StoreCard,
	type StoreCardData,
} from "@/ui/store-card";

const MATCHING_STORES: StoreCardData[] = [
	{
		name: "TechVault",
		initials: "TV",
		category: "Electronics \u2022 Gadgets",
		rating: "4.9",
		reviewCount: "48 headphone listings",
		avatarGradient: "from-blue-500 to-indigo-600",
		avatarShadow: "shadow-blue-500/20",
	},
	{
		name: "SoundArc",
		initials: "SA",
		category: "Audio \u2022 Music",
		rating: "4.7",
		reviewCount: "92 audio products",
		avatarGradient: "from-violet-500 to-purple-600",
		avatarShadow: "shadow-violet-500/20",
	},
	{
		name: "FitGear Pro",
		initials: "FG",
		category: "Sports \u2022 Fitness",
		rating: "4.7",
		reviewCount: "16 sport headphones",
		avatarGradient: "from-orange-500 to-amber-600",
		avatarShadow: "shadow-orange-500/20",
	},
];

export const MatchingStores = () => {
	return (
		<div class="bg-white border-b border-gray-100">
			<Container class="py-5">
				<h2 class="text-sm font-semibold text-gray-900 mb-3">
					Stores matching "wireless headphones"
				</h2>
				<div class="flex gap-4 overflow-x-auto scrollbar-hide pb-1">
					<For each={MATCHING_STORES}>
						{(store) => (
							<div class="shrink-0 w-72">
								<StoreCard store={store} />
							</div>
						)}
					</For>
				</div>
			</Container>
		</div>
	);
};
