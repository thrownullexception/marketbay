import { MinusIcon, PlusIcon } from "lucide-solid";
import { Button } from "@/ui/button";

export const ProductOptions = () => {
	return (
		<>
			<div class="mb-5">
				<p class="text-sm font-medium text-gray-700 mb-2.5">Quantity</p>
				<div class="flex gap-2">
					<Button variant="softBorder" size="sm" label="32" />
					<Button variant="default" size="sm" label="27" />
				</div>
			</div>

			<div class="mb-5">
				<p class="text-sm font-medium text-gray-700 mb-2.5">
					Color: <span class="text-gray-900 font-semibold">Matte Black</span>
				</p>
				<div class="flex gap-2.5">
					<button
						type="button"
						class="w-9 h-9 rounded-full bg-gray-900 ring-2 ring-brand-500 ring-offset-2 transition"
						aria-label="Matte Black"
					/>
					<button
						type="button"
						class="w-9 h-9 rounded-full bg-white border border-gray-200 hover:ring-2 hover:ring-gray-300 hover:ring-offset-2 transition"
						aria-label="Pearl White"
					/>
					<button
						type="button"
						class="w-9 h-9 rounded-full bg-blue-800 hover:ring-2 hover:ring-blue-400 hover:ring-offset-2 transition"
						aria-label="Navy Blue"
					/>
					<button
						type="button"
						class="w-9 h-9 rounded-full bg-rose-400 hover:ring-2 hover:ring-rose-300 hover:ring-offset-2 transition"
						aria-label="Rose Gold"
					/>
				</div>
			</div>

			<div class="mb-6">
				<p class="text-sm font-medium text-gray-700 mb-2.5">Quantity</p>
				<div class="inline-flex items-center border border-gray-200 rounded-xl overflow-hidden">
					<button
						type="button"
						class="w-10 h-10 flex items-center justify-center text-gray-500 hover:bg-gray-50 transition"
						aria-label="Decrease quantity"
					>
						<MinusIcon class="w-4 h-4" />
					</button>
					<span class="w-12 h-10 flex items-center justify-center text-sm font-semibold text-gray-900 border-x border-gray-200">
						1
					</span>
					<button
						type="button"
						class="w-10 h-10 flex items-center justify-center text-gray-500 hover:bg-gray-50 transition"
						aria-label="Increase quantity"
					>
						<PlusIcon class="w-4 h-4" />
					</button>
				</div>
			</div>
		</>
	);
};
