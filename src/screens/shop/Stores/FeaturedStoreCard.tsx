import { Link } from "@tanstack/solid-router";
import { ArrowRightIcon, BadgeCheckIcon } from "lucide-solid";
import { StarIcon } from "@/ui/icons";

interface FeaturedStoreCardProps {
	slug: string;
	gradient: string;
	initials: string;
	name: string;
	subtextColor: string;
	description: string;
	rating: string;
	ratingCount: string;
	ratingTextColor: string;
	followers: string;
	followersTextColor: string;
}

export const FeaturedStoreCard = (props: FeaturedStoreCardProps) => {
	return (
		<Link
			to="/store/$storeSlug"
			params={{ storeSlug: props.slug }}
			class={`relative rounded-2xl overflow-hidden bg-linear-to-br ${props.gradient} min-h-[180px] flex flex-col justify-end p-6 group cursor-pointer`}
		>
			<div class="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48Y2lyY2xlIGN4PSIyMCIgY3k9IjIwIiByPSIxLjUiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4wNikiLz48L3N2Zz4=')] opacity-80"></div>
			<div class="absolute top-5 right-5">
				<div class="w-14 h-14 rounded-xl bg-white/15 backdrop-blur flex items-center justify-center text-white text-lg font-bold border border-white/20">
					{props.initials}
				</div>
			</div>
			<div class="relative">
				<div class="flex items-center gap-2 mb-1">
					<h3 class="text-lg font-bold text-white">{props.name}</h3>
					<span class="inline-flex items-center gap-0.5 px-1.5 py-0.5 bg-white/20 text-white text-[10px] font-semibold rounded-full">
						<BadgeCheckIcon class="w-2.5 h-2.5" />
						Verified
					</span>
				</div>
				<p class={`${props.subtextColor} text-sm`}>{props.description}</p>
				<div class="flex items-center gap-3 mt-2">
					<div class="flex items-center gap-1">
						<StarIcon class="w-3.5 h-3.5 text-yellow-500" />
						<span class="text-white text-sm font-semibold">{props.rating}</span>
						<span class={`${props.ratingTextColor} text-xs`}>
							({props.ratingCount})
						</span>
					</div>
					<span class={`${props.followersTextColor} text-xs`}>
						{props.followers} followers
					</span>
				</div>
			</div>
			<ArrowRightIcon class="absolute right-5 bottom-5 w-5 h-5 text-white/30 group-hover:text-white/60 group-hover:translate-x-1 transition-all" />
		</Link>
	);
};
