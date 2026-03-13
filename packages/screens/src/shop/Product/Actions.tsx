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
				<Button variant="default" Icon={HeartIcon} label="Save" iconOnly />
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
