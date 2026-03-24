import { Link } from "@tanstack/solid-router";
import { ArrowRightIcon, BadgeCheckIcon, StarIcon } from "lucide-solid";
import { CATEGORY_CONFIG } from "@/schemas/category";
import { COLOR_CODES } from "@/schemas/colors";
import type { StoreListItemTransformer } from "@/server/modules/stores/stores/types";
import { shorten } from "@/shared/utils/numbers";
import { getInitials } from "@/shared/utils/strings";

export const StoreListCard = (props: StoreListItemTransformer) => {
	const { banner, avatar } =
		COLOR_CODES[CATEGORY_CONFIG[props.primaryCategoryId].color];
	return (
		<Link
			to="/store/$storeSlug"
			params={{ storeSlug: props.slug }}
			class="relative store-card bg-white rounded-2xl border border-gray-100 overflow-hidden transition-all duration-300  group cursor-pointer"
		>
			<div class={`h-20 bg-linear-to-r ${banner} relative`}>
				<div class="absolute -bottom-5 left-5">
					<div
						class={`w-14 h-14 rounded-xl bg-linear-to-br ${avatar} flex items-center justify-center text-white text-lg font-bold border-3 border-white shadow-md`}
					>
						{getInitials(props.name)}
					</div>
				</div>
			</div>
			<div class="pt-8 px-5 pb-5">
				<div class="flex items-center gap-2">
					<h3 class="font-bold text-gray-900">{props.name}</h3>
					{props.isVerified && (
						<span class="inline-flex items-center gap-0.5 px-1.5 py-0.5 bg-green-50 text-green-700 text-[10px] font-semibold rounded-full border border-blue-100">
							<BadgeCheckIcon class="w-2.5 h-2.5" />
							Verified
						</span>
					)}
				</div>
				<p class="text-xs text-gray-500 mt-1">
					{CATEGORY_CONFIG[props.primaryCategoryId].label}{" "}
					{props.secondaryCategoryId
						? `• ${CATEGORY_CONFIG[props.secondaryCategoryId].label}`
						: ""}
				</p>
				<p class="text-xs text-gray-400 mt-2 line-clamp-2">{props.tagline}</p>
				<div class="flex items-center gap-4 mt-3 text-xs text-gray-500">
					<div class="flex items-center gap-1">
						<StarIcon class="w-3.5 h-3.5 text-yellow-500" fill="currentColor" />
						<span class="font-semibold text-gray-700">{props.avgRating}</span>
						<span>({shorten(props.ratingsCount)})</span>
					</div>
					<span>{shorten(props.productsCount)} products</span>
					<span>{shorten(props.followersCount)} followers</span>
				</div>
			</div>
			<ArrowRightIcon class="absolute right-5 bottom-5 w-5 h-5 text-primary/30 group-hover:text-primary/60 group-hover:translate-x-1 transition-all" />
		</Link>
	);
};
