import { ShoppingCartIcon } from "lucide-solid";
import type { JSX } from "solid-js";

interface SavedItemProps {
	href: string;
	image: JSX.Element;
	imageGradient: string;
	storeName: string;
	name: string;
	price: string;
	originalPrice?: string;
	discount?: string;
}

export const SavedItem = (props: SavedItemProps) => {
	return (
		<div class="product-card bg-white rounded-2xl border border-gray-100 overflow-hidden transition-all duration-300 cursor-pointer">
			<div class="relative aspect-square bg-gray-50">
				<div
					class={`absolute inset-0 bg-linear-to-br ${props.imageGradient} flex items-center justify-center`}
				>
					{props.image}
				</div>
				{props.discount && (
					<span class="absolute top-2 left-2 px-2 py-0.5 bg-red-500 text-white text-[10px] font-bold rounded-md uppercase">
						{props.discount}
					</span>
				)}
			</div>
			<div class="p-3">
				<a
					href={props.href}
					class="text-[11px] text-brand-600 font-medium hover:underline"
				>
					{props.storeName}
				</a>
				<h3 class="text-sm font-semibold text-gray-900 mt-0.5 line-clamp-2">
					{props.name}
				</h3>
				<div class="flex items-center justify-between mt-2">
					<div>
						<span class="text-base font-bold text-gray-900">{props.price}</span>
						{props.originalPrice && (
							<span class="text-xs text-gray-400 line-through ml-1">
								{props.originalPrice}
							</span>
						)}
					</div>
					<button
						class="p-1.5 bg-brand-600 hover:bg-brand-700 text-white rounded-lg transition"
						aria-label="Move to cart"
						type="button"
					>
						<ShoppingCartIcon class="w-3.5 h-3.5" />
					</button>
				</div>
			</div>
		</div>
	);
};
