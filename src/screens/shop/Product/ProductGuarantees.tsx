import {
	ClockIcon,
	RefreshCwIcon,
	ShieldCheckIcon,
	TruckIcon,
} from "lucide-solid";

export const ProductGuarantees = () => {
	return (
		<div class="grid grid-cols-2 gap-4">
			<div class="flex items-start gap-3">
				<div class="w-9 h-9 rounded-lg bg-brand-50 flex items-center justify-center shrink-0">
					<TruckIcon class="w-4.5 h-4.5 text-brand-600" />
				</div>
				<div>
					<p class="text-sm font-semibold text-gray-900">Free Shipping</p>
					<p class="text-xs text-gray-500">Orders over $50</p>
				</div>
			</div>
			<div class="flex items-start gap-3">
				<div class="w-9 h-9 rounded-lg bg-emerald-50 flex items-center justify-center shrink-0">
					<ShieldCheckIcon class="w-5 h-5 text-emerald-600" />
				</div>
				<div>
					<p class="text-sm font-semibold text-gray-900">Buyer Protection</p>
					<p class="text-xs text-gray-500">
						Full refund if not as described
					</p>
				</div>
			</div>
			<div class="flex items-start gap-3">
				<div class="w-9 h-9 rounded-lg bg-amber-50 flex items-center justify-center shrink-0">
					<RefreshCwIcon class="w-5 h-5 text-amber-600" />
				</div>
				<div>
					<p class="text-sm font-semibold text-gray-900">30-Day Returns</p>
					<p class="text-xs text-gray-500">Easy returns &amp; exchanges</p>
				</div>
			</div>
			<div class="flex items-start gap-3">
				<div class="w-9 h-9 rounded-lg bg-violet-50 flex items-center justify-center shrink-0">
					<ClockIcon class="w-5 h-5 text-violet-600" />
				</div>
				<div>
					<p class="text-sm font-semibold text-gray-900">Ships in 24h</p>
					<p class="text-xs text-gray-500">Fast processing</p>
				</div>
			</div>
		</div>
	);
};
