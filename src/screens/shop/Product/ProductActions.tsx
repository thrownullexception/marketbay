import { Link } from "@tanstack/solid-router";
import { HeartIcon, MessageCircleIcon, ShoppingCartIcon } from "lucide-solid";

export const ProductActions = () => {
	return (
		<>
			<div class="flex gap-3 mb-6">
				<button
					type="button"
					class="flex-1 py-3.5 bg-brand-600 hover:bg-brand-700 text-white font-semibold rounded-xl transition shadow-sm flex items-center justify-center gap-2 text-sm"
				>
					<ShoppingCartIcon class="w-5 h-5" />
					Add to Cart
				</button>
				<button
					type="button"
					class="flex-1 py-3.5 bg-accent-500 hover:bg-accent-600 text-white font-semibold rounded-xl transition shadow-sm flex items-center justify-center gap-2 text-sm"
				>
					Buy Now
				</button>
				<button
					type="button"
					class="p-3.5 border border-gray-200 hover:bg-gray-50 text-gray-500 rounded-xl transition"
					aria-label="Save"
				>
					<HeartIcon class="w-5 h-5" />
				</button>
			</div>
			<Link
				to="/messages/$storeSlug"
				params={{ storeSlug: "todo" }}
				class="inline-flex items-center gap-2 text-sm font-medium text-brand-600 hover:text-brand-700 transition mb-6"
			>
				<MessageCircleIcon class="w-4 h-4" />
				Chat with seller about this product
			</Link>
		</>
	);
};
