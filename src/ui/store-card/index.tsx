import "./styles.css";
import { StarIcon } from "lucide-solid";
import { CATEGORY_CONFIG } from "@/schemas/category";
import type { StoreListItemTransformer } from "@/server/modules/stores/stores/types";
import { getInitials } from "@/shared/utils/strings";


// TODO
export const StoreCard = (props: StoreListItemTransformer) => (
	<div class="store-card bg-white rounded-2xl border border-gray-100 p-5 transition-all duration-300">
		<div class="flex items-center gap-3">
			<div
				class={`w-12 h-12 rounded-xl bg-linear-to-br ${props.store.avatarGradient} flex items-center justify-center text-white text-sm font-bold shrink-0 shadow-md ${props.store.avatarShadow}`}
			>
				{getInitials(props.name)}
			</div>
			<div class="min-w-0">
				<h3 class="font-semibold text-gray-900 text-sm truncate">
					{props.name}
				</h3>
				<p class="text-xs text-gray-500 truncate">{CATEGORY_CONFIG[props.primaryCategoryId].label}</p>
				<div class="flex items-center gap-1 mt-0.5">
					<StarIcon class="w-3 h-3 text-yellow-500" fill="currentColor" />
					<span class="text-xs text-gray-500">
						{props.avgRating} &bull; {props.ratingsCount}
					</span>
				</div>
			</div>
		</div>
	</div>
);
