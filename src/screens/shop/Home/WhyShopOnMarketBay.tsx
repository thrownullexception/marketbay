import {
	BadgeCheckIcon,
	BellRingIcon,
	MessageCircleIcon,
	Search,
	ShieldCheckIcon,
	StarIcon,
} from "lucide-solid";
import { For, type JSX } from "solid-js";
import { ScreenSectionCard } from "@/screens/_components/screen-section-card";
import { Grid3 } from "@/ui/grid";

const REASONS: {
	icon: () => JSX.Element;
	title: string;
	description: string;
}[] = [
	{
		icon: () => <Search class="w-6 h-6" />,
		title: "Find Anything",
		description:
			"Search millions of products from thousands of independent sellers",
	},
	{
		icon: () => <BadgeCheckIcon class="w-6 h-6" />,
		title: "Verified Sellers",
		description:
			"All stores go through a strict verification process so you can shop with confidence.",
	},
	{
		icon: () => <ShieldCheckIcon class="w-6 h-6" />,
		title: "Buyer Protection",
		description:
			"Every purchase is covered. Get a full refund if your item doesn't arrive or isn't as described.",
	},

	{
		icon: () => <MessageCircleIcon class="w-6 h-6" />,
		title: "Chat with Sellers",
		description:
			"Message stores directly to ask questions, negotiate, or get personalized recommendations.",
	},
	{
		icon: () => <BellRingIcon class="w-6 h-6" />,
		title: "Store Subscriptions",
		description:
			"Follow your favorite stores and get notified whenever they drop new products or deals.",
	},
	{
		icon: () => <StarIcon class="w-6 h-6" />,
		title: "Honest Reviews",
		description:
			"Only verified buyers can leave reviews, so you always get the real picture.",
	},
];

export const WhyShopOnMarketBay = () => {
	return (
		<ScreenSectionCard
			title="Why Shop on MarketBay"
			description="We're building the most trusted marketplace"
			alternate
		>
			<Grid3>
				<For each={REASONS}>
					{(reason) => (
						<div class="bg-white rounded-2xl border border-gray-100 p-6 flex gap-4 items-start">
							<div class="w-10 h-10 rounded-xl bg-brand-50 text-brand-600 flex items-center justify-center shrink-0">
								{reason.icon()}
							</div>
							<div>
								<h3 class="text-sm font-semibold text-gray-900">
									{reason.title}
								</h3>
								<p class="text-xs text-gray-500 mt-1 leading-relaxed">
									{reason.description}
								</p>
							</div>
						</div>
					)}
				</For>
			</Grid3>
		</ScreenSectionCard>
	);
};
