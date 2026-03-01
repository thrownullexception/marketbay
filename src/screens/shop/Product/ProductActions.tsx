import { Link } from "@tanstack/solid-router";
import { HeartIcon, MessageCircleIcon, ShoppingCartIcon } from "lucide-solid";
import { Button } from "@/ui/button";

export const ProductActions = () => {
	return (
		<>
			<div class="flex gap-3 mb-6">
				<Button
					label="Add to Cart"
					variant="primary"
					fullWidth
					Icon={ShoppingCartIcon}
				/>
				<Button label="Buy Now" variant="secondary" fullWidth />
				<button
					type="button"
					class="p-3.5 border border-gray-200 hover:bg-gray-50 text-gray-500 rounded-xl transition"
					aria-label="Save"
				>
					<HeartIcon class="w-5 h-5" />
				</button>
			</div>
			<Link
				to="/chat/$storeSlug"
				params={{ storeSlug: "todo" }}
				class="inline-flex items-center gap-2 text-sm font-medium text-brand-600 hover:text-brand-700 transition mb-6"
			>
				<MessageCircleIcon class="w-4 h-4" />
				Chat with seller about this product
			</Link>
		</>
	);
};
