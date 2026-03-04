import { Link } from "@tanstack/solid-router";
import { ShoppingBag } from "lucide-solid";
import { Show } from "solid-js";
import type { ProductCardData } from "./index";
import { AddToCart, WishListButton } from "./shared";

export const ProductCardList = (props: { product: ProductCardData }) => {
	return (
		<Link
			to="/product/$productSlug"
			params={{ productSlug: props.product.name }}
		>
			<div class="product-card bg-white rounded-2xl border border-gray-100 overflow-hidden transition-all duration-300 cursor-pointer flex">
				<div class="relative w-36 shrink-0 bg-gray-50">
					<div class="absolute inset-0 bg-linear-to-br from-blue-50 to-indigo-100 flex items-center justify-center">
						<ShoppingBag class="w-10 h-10 text-brand-300" />
					</div>
					<Show when={props.product.badge}>
						<span
							class={`absolute top-2 left-2 px-2 py-0.5 ${props.product.badgeColor ?? "bg-red-500"} text-white text-[10px] font-bold rounded-md uppercase`}
						>
							{props.product.badge}
						</span>
					</Show>
				</div>
				<div class="flex-1 p-4 flex flex-col justify-between min-w-0">
					<div>
						<div class="flex items-start justify-between gap-2">
							<div class="min-w-0">
								<span class="text-xs text-brand-600 font-medium">
									{props.product.storeName}
								</span>
								<h3 class="text-sm font-semibold text-gray-900 mt-0.5 line-clamp-1">
									{props.product.name}
								</h3>
							</div>
							<WishListButton wishlisted={props.product.wishlisted} />
						</div>
						<Show when={props.product.rating}>
							<div class="flex items-center gap-1 mt-1">
								<svg
									class="w-3.5 h-3.5 text-yellow-500"
									fill="currentColor"
									viewBox="0 0 20 20"
								>
									<title>Rating</title>
									<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
								</svg>
								<span class="text-xs text-gray-500">
									{props.product.rating} ({props.product.ratingCount})
								</span>
							</div>
						</Show>
					</div>
					<div class="flex items-center justify-between mt-2">
						<div class="flex items-baseline gap-1.5">
							<span class="text-lg font-bold text-gray-900">
								{props.product.price}
							</span>
							<Show when={props.product.originalPrice}>
								<span class="text-sm text-gray-400 line-through">
									{props.product.originalPrice}
								</span>
							</Show>
						</div>
						<AddToCart />
					</div>
				</div>
			</div>
		</Link>
	);
};
