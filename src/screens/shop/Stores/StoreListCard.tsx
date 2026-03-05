import { BadgeCheckIcon } from "lucide-solid";
import { StoreCardActions } from "@/screens/_components/store-card/actions";
import { StarIcon } from "lucide-solid";

interface StoreListCardProps {
	bannerGradient: string;
	avatarGradient: string;
	initials: string;
	name: string;
	verified?: boolean;
	categories: string;
	description: string;
	rating: string;
	ratingCount: string;
	productCount: string;
	followers: string;
	following?: boolean;
}

export const StoreListCard = (props: StoreListCardProps) => {
	return (
		<div class="store-card bg-white rounded-2xl border border-gray-100 overflow-hidden transition-all duration-300">
			<div class={`h-20 bg-linear-to-r ${props.bannerGradient} relative`}>
				<div class="absolute -bottom-5 left-5">
					<div
						class={`w-14 h-14 rounded-xl bg-linear-to-br ${props.avatarGradient} flex items-center justify-center text-white text-lg font-bold border-3 border-white shadow-md`}
					>
						{props.initials}
					</div>
				</div>
			</div>
			<div class="pt-8 px-5 pb-5">
				<div class="flex items-center gap-2">
					<h3 class="font-bold text-gray-900">{props.name}</h3>
					{props.verified && (
						<span class="inline-flex items-center gap-0.5 px-1.5 py-0.5 bg-green-50 text-green-700 text-[10px] font-semibold rounded-full border border-blue-100">
							<BadgeCheckIcon class="w-2.5 h-2.5" />
							Verified
						</span>
					)}
				</div>
				<p class="text-xs text-gray-500 mt-1">{props.categories}</p>
				<p class="text-xs text-gray-400 mt-2 line-clamp-2">
					{props.description}
				</p>
				<div class="flex items-center gap-4 mt-3 text-xs text-gray-500">
					<div class="flex items-center gap-1">
						<StarIcon class="w-3.5 h-3.5 text-yellow-500" fill="currentColor" />
						<span class="font-semibold text-gray-700">{props.rating}</span>
						<span>({props.ratingCount})</span>
					</div>
					<span>{props.productCount} products</span>
					<span>{props.followers} followers</span>
				</div>
				<StoreCardActions following={props.following} slug="todo" />
			</div>
		</div>
	);
};
