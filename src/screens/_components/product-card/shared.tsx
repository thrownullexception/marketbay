import { HeartIcon, ShoppingBag } from "lucide-solid";
import { Button } from "@/ui/button";

export const AddToCart = () => {
	return (
		<Button
			variant="primary"
			size="sm"
			label="Add to cart"
			Icon={ShoppingBag}
		/>
	);
};

export const WishListButton = (props: { wishlisted?: boolean }) => {
	return (
		<div class="absolute top-2 right-2 p-1.5 bg-white/80 backdrop-blur rounded-full hover:bg-white transition shadow-sm">
			<Button
				type="button"
				aria-label="Bookmark"
				variant="primary"
				size="sm"
				label="Wishlist"
				iconOnly
				Icon={HeartIcon}
			/>
			{/* <HeartIcon
				class={`w-4 h-4 ${props.wishlisted ? "text-rose-500" : "text-gray-400"}`}
			/> */}
		</div>
	);
};
