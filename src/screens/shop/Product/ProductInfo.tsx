import { Link } from "@tanstack/solid-router";
import { BadgeCheckIcon, CircleCheckIcon } from "lucide-solid";
import { For } from "solid-js";
import { StarIcon } from "lucide-solid";

export const ProductInfo = () => {
	return (
		<>
			<Link
				to="/store/$storeSlug"
				params={{ storeSlug: "techvault" }}
				class="inline-flex items-center gap-2 mb-3 group"
			>
				<div class="w-7 h-7 rounded-lg bg-linear-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-white text-[10px] font-bold">
					TV
				</div>
				<span class="text-sm font-medium text-brand-600 group-hover:underline">
					TechVault
				</span>
				<span class="inline-flex items-center gap-0.5 px-1.5 py-0.5 bg-green-50 text-green-600 text-[10px] font-semibold rounded-full border border-green-100">
					<BadgeCheckIcon class="w-2.5 h-2.5" />
					Verified
				</span>
			</Link>

			<h1 class="text-2xl lg:text-3xl font-extrabold text-gray-900 leading-tight">
				Pro Studio Wireless Headphones — Active Noise Cancelling
			</h1>

			<div class="flex items-center gap-3 mt-3">
				<div class="flex items-center gap-1">
					<div class="flex text-yellow-500">
						<For each={Array(5).fill(0)}>
							{() => <StarIcon class="w-4 h-4" fill="currentColor" />}
						</For>
					</div>
					<span class="text-sm font-semibold text-gray-700">4.9</span>
				</div>
				<a href="#todo" class="text-sm text-brand-600 hover:underline">
					243 reviews
				</a>
				<span class="text-gray-300">|</span>
				<span class="text-sm text-gray-500">1.2k sold</span>
			</div>

			<div class="mt-5 flex items-baseline gap-3">
				<span class="text-3xl font-extrabold text-gray-900">$59.99</span>
				<span class="text-lg text-gray-400 line-through">$99.99</span>
				<span class="px-2.5 py-1 bg-red-50 text-red-600 text-sm font-bold rounded-lg">
					-40%
				</span>
			</div>
			<p class="text-xs text-emerald-600 font-medium mt-1.5 flex items-center gap-1">
				<CircleCheckIcon class="w-3.5 h-3.5" />
				In stock
			</p>
		</>
	);
};
