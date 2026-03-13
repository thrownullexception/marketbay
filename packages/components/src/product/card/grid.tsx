import { Link } from "@tanstack/solid-router";
import { ShoppingBag, StarIcon } from "lucide-solid";
import { Show } from "solid-js";
import { TextLink } from "@/ui/link";
import type { ProductCardData } from "./index";
import { AddToCart, WishListButton } from "./shared";

export const ProductCardGrid = (props: { product: ProductCardData }) => {
	return (
		<div class="product-card bg-white rounded-2xl border border-gray-100 overflow-hidden transition-all duration-300">
			<div class="relative aspect-square bg-gray-50">
				<Link
					to="/product/$productSlug"
					params={{ productSlug: props.product.name }}
				>
					<div
						class={`absolute inset-0 bg-linear-to-br from-blue-50 to-indigo-100 flex items-center justify-center`}
					>
						<ShoppingBag class={`w-14 h-14 text-brand-300`} />
					</div>
				</Link>
				<Show when={props.product.badge}>
					<span
						class={`absolute top-2 left-2 px-2 py-0.5 ${props.product.badgeColor ?? "bg-red-500"} text-white text-[10px] font-bold rounded-md uppercase`}
					>
						{props.product.badge}
					</span>
				</Show>
				<div class="absolute top-2 right-2">
					<WishListButton wishlisted={props.product.wishlisted} />
				</div>
			</div>
			<div class="p-4">
				<TextLink
					to="/store/$storeSlug"
					params={{ storeSlug: props.product.storeName }}
					label={props.product.storeName}
				/>
				<Link
					to="/product/$productSlug"
					params={{ productSlug: props.product.name }}
				>
					<h3 class="text-sm font-semibold text-gray-900 mt-1 line-clamp-2">
						{props.product.name}
					</h3>
				</Link>
				<Show when={props.product.rating}>
					<div class="flex items-center gap-1 mt-1.5">
						<StarIcon class="w-3.5 h-3.5 text-yellow-500" fill="currentColor" />
						<span class="text-xs text-gray-500">
							{props.product.rating} ({props.product.ratingCount})
						</span>
					</div>
				</Show>
				<div class="flex items-center justify-between mt-3">
					<div>
						<span class="text-lg font-bold text-gray-900">
							{props.product.price}
						</span>
						<Show when={props.product.originalPrice}>
							<span class="text-sm text-gray-400 line-through ml-1">
								{props.product.originalPrice}
							</span>
						</Show>
					</div>
					<AddToCart />
				</div>
			</div>
		</div>
	);
};
