import { HeartIcon, ShoppingBag } from "lucide-solid";
import { Button } from "@/ui/button";

export const AddToCart = () => {
	return (
		<Button
			variant="primary"
			size="sm"
			label="Add to cart"
			Icon={ShoppingBag}
			onClick={() => {
				console.log("Add to cart");
			}}
		/>
	);
};

export const WishListButton = (props: { wishlisted?: boolean }) => {
	return (
		<button
			type="button"
			class="p-1.5 cursor-pointer rounded-full transition bg-white/80 backdrop-blur hover:bg-white shadow-sm"
			aria-label={`${props.wishlisted ? " Remove from wishlist" : "Add to wishlist"}`}
		>
			<HeartIcon
				class={`w-4 h-4 ${props.wishlisted ? "text-rose-500" : "text-gray-400"}`}
				fill={props.wishlisted ? "currentColor" : "none"}
			/>
		</button>
	);
};
