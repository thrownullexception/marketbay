import "./styles.css";
import { StarIcon } from "@/ui/icons";
import { StoreCardActions } from "./actions";

export interface StoreCardData {
	name: string;
	initials: string;
	category: string;
	rating: string;
	reviewCount: string;
	avatarGradient: string;
	avatarShadow: string;
	following?: boolean;
}

export const StoreCard = (props: { store: StoreCardData }) => (
	<div class="store-card bg-white rounded-2xl border border-gray-100 p-5 transition-all duration-300">
		<div class="flex items-center gap-3">
			<div
				class={`w-12 h-12 rounded-xl bg-linear-to-br ${props.store.avatarGradient} flex items-center justify-center text-white text-sm font-bold shrink-0 shadow-md ${props.store.avatarShadow}`}
			>
				{props.store.initials}
			</div>
			<div class="min-w-0">
				<h3 class="font-semibold text-gray-900 text-sm truncate">
					{props.store.name}
				</h3>
				<p class="text-xs text-gray-500 truncate">{props.store.category}</p>
				<div class="flex items-center gap-1 mt-0.5">
					<StarIcon class="w-3 h-3 text-yellow-500" />
					<span class="text-xs text-gray-500">
						{props.store.rating} &bull; {props.store.reviewCount}
					</span>
				</div>
			</div>
		</div>
		<StoreCardActions following={props.store.following ?? false} slug="todo" />
	</div>
);
