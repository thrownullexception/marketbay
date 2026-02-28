const verifiedBadgePath =
	"M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z";

interface FeaturedStoreCardProps {
	href: string;
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
		<a
			href={props.href}
			class={`relative rounded-2xl overflow-hidden bg-gradient-to-br ${props.gradient} min-h-[180px] flex flex-col justify-end p-6 group cursor-pointer`}
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
						<svg
							class="w-2.5 h-2.5"
							fill="currentColor"
							viewBox="0 0 20 20"
						>
							<path
								fill-rule="evenodd"
								d={verifiedBadgePath}
								clip-rule="evenodd"
							/>
						</svg>
						Verified
					</span>
				</div>
				<p class={`${props.subtextColor} text-sm`}>{props.description}</p>
				<div class="flex items-center gap-3 mt-2">
					<div class="flex items-center gap-1">
						<svg
							class="w-3.5 h-3.5 text-accent-400"
							fill="currentColor"
							viewBox="0 0 20 20"
						>
							<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
						</svg>
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
			<svg
				class="absolute right-5 bottom-5 w-5 h-5 text-white/30 group-hover:text-white/60 group-hover:translate-x-1 transition-all"
				fill="none"
				viewBox="0 0 24 24"
				stroke="currentColor"
				stroke-width="2"
			>
				<path
					stroke-linecap="round"
					stroke-linejoin="round"
					d="M17 8l4 4m0 0l-4 4m4-4H3"
				/>
			</svg>
		</a>
	);
};
