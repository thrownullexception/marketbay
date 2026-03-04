import { RefreshCwIcon, ShieldCheckIcon, TruckIcon } from "lucide-solid";

export const CartBenefits = () => {
	return (
		<div class="mt-4 bg-white rounded-2xl border border-gray-100 p-5">
			<div class="space-y-3">
				<div class="flex items-center gap-3">
					<div class="w-8 h-8 rounded-lg bg-brand-50 flex items-center justify-center shrink-0">
						<TruckIcon
							class="w-4 h-4 text-brand-600"
							aria-label="Free Shipping"
						/>
					</div>
					<div>
						<p class="text-sm font-semibold text-gray-900">Free Delivery</p>
						<p class="text-xs text-gray-500">On orders over N50,000</p>
					</div>
				</div>
				<div class="flex items-center gap-3">
					<div class="w-8 h-8 rounded-lg bg-emerald-50 flex items-center justify-center shrink-0">
						<ShieldCheckIcon
							class="w-4 h-4 text-emerald-600"
							aria-label="Buyer Protection"
						/>
					</div>
					<div>
						<p class="text-sm font-semibold text-gray-900">Buyer Protection</p>
						<p class="text-xs text-gray-500">Full refund if not as described</p>
					</div>
				</div>
				<div class="flex items-center gap-3">
					<div class="w-8 h-8 rounded-lg bg-amber-50 flex items-center justify-center shrink-0">
						<RefreshCwIcon
							class="w-4 h-4 text-amber-600"
							aria-label="30-Day Returns"
						/>
					</div>
					<div>
						<p class="text-sm font-semibold text-gray-900">30-Day Returns</p>
						<p class="text-xs text-gray-500">Easy returns & exchanges</p>
					</div>
				</div>
			</div>
		</div>
	);
};
