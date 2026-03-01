import { CircleCheck, MinusIcon, PlusIcon, XIcon } from "lucide-solid";
import type { JSX } from "solid-js";

interface CartItemProps {
	href: string;
	image: JSX.Element;
	imageGradient: string;
	name: JSX.Element;
	variant: JSX.Element;
	price: string;
	originalPrice: string;
	discount: string;
	quantity: number;
	isLast?: boolean;
}

export const CartItem = (props: CartItemProps) => {
	return (
		<div class={`p-5 ${props.isLast ? "" : "border-b border-gray-50"}`}>
			<div class="flex gap-4">
				<a
					href={props.href}
					class={`w-24 h-24 sm:w-28 sm:h-28 rounded-xl bg-linear-to-br ${props.imageGradient} flex items-center justify-center shrink-0 overflow-hidden`}
				>
					{props.image}
				</a>
				<div class="flex-1 min-w-0">
					<div class="flex items-start justify-between gap-3">
						<div>
							<a
								href={props.href}
								class="text-sm font-semibold text-gray-900 hover:text-brand-600 transition line-clamp-2"
							>
								{props.name}
							</a>
							<div class="flex items-center gap-2 mt-1.5 flex-wrap">
								<span class="text-xs text-gray-400">{props.variant}</span>
								<span class="text-gray-200">|</span>
								<span class="text-xs text-emerald-600 font-medium flex items-center gap-0.5">
									<CircleCheck class="w-3 h-3" />
									In stock
								</span>
							</div>
						</div>
						<button
							class="p-1.5 text-gray-300 hover:text-red-400 hover:bg-red-50 rounded-lg transition shrink-0"
							aria-label="Remove item"
							type="button"
						>
							<XIcon class="w-4 h-4" />
						</button>
					</div>
					<div class="flex items-center justify-between mt-4">
						<div class="inline-flex items-center border border-gray-200 rounded-xl overflow-hidden">
							<button
								type="button"
								class="w-8 h-8 flex items-center justify-center text-gray-400 hover:bg-gray-50 hover:text-gray-600 transition"
							>
								<MinusIcon class="w-3.5 h-3.5" />
							</button>
							<span class="w-10 h-8 flex items-center justify-center text-sm font-semibold text-gray-900 border-x border-gray-200">
								{props.quantity}
							</span>
							<button
								type="button"
								class="w-8 h-8 flex items-center justify-center text-gray-400 hover:bg-gray-50 hover:text-gray-600 transition"
							>
								<PlusIcon class="w-3.5 h-3.5" />
							</button>
						</div>
						<div class="text-right">
							<span class="text-lg font-bold text-gray-900">{props.price}</span>
							<span class="text-sm text-gray-400 line-through ml-1.5">
								{props.originalPrice}
							</span>
							<span class="block text-[11px] text-red-500 font-semibold mt-0.5">
								{props.discount}
							</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
