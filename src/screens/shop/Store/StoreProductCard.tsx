import type { JSX } from "solid-js";

interface StoreProductCardProps {
	image: JSX.Element;
	imageGradient: string;
	name: string;
	rating: string;
	ratingCount: string;
	price: string;
	originalPrice?: string;
	badge?: string;
	badgeColor?: string;
	wishlisted?: boolean;
}

export const StoreProductCard = (props: StoreProductCardProps) => {
	return (
		<div class="product-card bg-white rounded-2xl border border-gray-100 overflow-hidden transition-all duration-300 cursor-pointer">
			<div class="relative aspect-square bg-gray-50">
				<div
					class={`absolute inset-0 bg-linear-to-br ${props.imageGradient} flex items-center justify-center`}
				>
					{props.image}
				</div>
				{props.badge && (
					<span
						class={`absolute top-2 left-2 px-2 py-0.5 ${props.badgeColor ?? "bg-red-500"} text-white text-[10px] font-bold rounded-md uppercase`}
					>
						{props.badge}
					</span>
				)}
				<button class="absolute top-2 right-2 p-1.5 bg-white/80 backdrop-blur rounded-full hover:bg-white transition shadow-sm">
					{props.wishlisted ? (
						<svg
							class="w-4 h-4 text-rose-500"
							fill="currentColor"
							viewBox="0 0 24 24"
						>
							<path d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
						</svg>
					) : (
						<svg
							class="w-4 h-4 text-gray-400"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
							stroke-width="2"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
							/>
						</svg>
					)}
				</button>
			</div>
			<div class="p-4">
				<h3 class="text-sm font-semibold text-gray-900 line-clamp-2">
					{props.name}
				</h3>
				<div class="flex items-center gap-1 mt-1.5">
					<svg
						class="w-3.5 h-3.5 text-accent-500"
						fill="currentColor"
						viewBox="0 0 20 20"
					>
						<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
					</svg>
					<span class="text-xs text-gray-500">
						{props.rating} ({props.ratingCount})
					</span>
				</div>
				<div class="flex items-center justify-between mt-3">
					<div>
						<span class="text-lg font-bold text-gray-900">{props.price}</span>
						{props.originalPrice && (
							<span class="text-sm text-gray-400 line-through ml-1">
								{props.originalPrice}
							</span>
						)}
					</div>
					<button class="p-2 bg-brand-600 hover:bg-brand-700 text-white rounded-xl transition">
						<svg
							class="w-4 h-4"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
							stroke-width="2"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								d="M12 4v16m8-8H4"
							/>
						</svg>
					</button>
				</div>
			</div>
		</div>
	);
};
