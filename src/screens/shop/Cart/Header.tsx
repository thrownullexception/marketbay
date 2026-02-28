import { Trash2Icon } from "lucide-solid";

export const CartHeader = () => {
	return (
		<div class="flex items-center justify-between mb-8">
			<div>
				<h1 class="text-2xl lg:text-3xl font-extrabold text-gray-900">
					Shopping Cart
				</h1>
				<p class="text-sm text-gray-500 mt-1">3 items from 2 stores</p>
			</div>
			<button
				type="button"
				class="hidden sm:inline-flex items-center gap-1.5 text-sm font-medium text-gray-400 hover:text-red-500 transition"
			>
				<Trash2Icon class="w-4 h-4" />
				Clear Cart
			</button>
		</div>
	);
};
