import { Link } from "@tanstack/solid-router";
import { ArrowRightIcon, CheckCircleIcon, ShieldCheckIcon } from "lucide-solid";

export const OrderSummary = () => {
	return (
		<div class="bg-white rounded-2xl border border-gray-100 p-6 sticky top-24">
			<h2 class="text-lg font-bold text-gray-900 mb-5">Order Summary</h2>

			<div class="mb-5">
				<label
					for="promo-code"
					class="text-xs font-medium text-gray-500 mb-1.5 block"
				>
					Promo Code
				</label>
				<div class="flex gap-2">
					<input
						id="promo-code"
						type="text"
						placeholder="Enter code"
						class="flex-1 px-3.5 py-2.5 rounded-xl border border-gray-200 bg-gray-50 text-sm focus:outline-none focus:ring-2 focus:ring-brand-400 focus:border-transparent transition"
					/>
					<button
						type="button"
						class="px-4 py-2.5 bg-gray-100 hover:bg-gray-200 text-gray-700 text-sm font-semibold rounded-xl transition"
					>
						Apply
					</button>
				</div>
			</div>

			<hr class="border-gray-100 mb-5" />

			<dl class="space-y-3 text-sm">
				<div class="flex justify-between">
					<dt class="text-gray-500">Subtotal (3 items)</dt>
					<dd class="font-medium text-gray-900">$533.98</dd>
				</div>
				<div class="flex justify-between">
					<dt class="text-gray-500">Discounts</dt>
					<dd class="font-medium text-red-500">-$149.00</dd>
				</div>
				<div class="flex justify-between">
					<dt class="text-gray-500">Shipping</dt>
					<dd class="font-medium text-emerald-600">Free</dd>
				</div>
				<div class="flex justify-between text-xs">
					<dt class="text-gray-400">Estimated Tax</dt>
					<dd class="text-gray-500">$30.72</dd>
				</div>
			</dl>

			<hr class="border-gray-100 my-5" />

			<div class="flex justify-between items-baseline mb-6">
				<span class="text-base font-bold text-gray-900">Total</span>
				<div class="text-right">
					<span class="text-2xl font-extrabold text-gray-900">$415.70</span>
					<span class="block text-xs text-gray-400 mt-0.5">Including VAT</span>
				</div>
			</div>

			<div class="bg-emerald-50 border border-emerald-100 rounded-xl px-4 py-3 mb-5 flex items-center gap-2.5">
				<CheckCircleIcon class="w-5 h-5 text-emerald-600 shrink-0" />
				<p class="text-sm text-emerald-700 font-medium">
					You're saving <span class="font-bold">$149.00</span> on this order!
				</p>
			</div>

			<Link
				to="/checkout"
				class="w-full py-3.5 bg-accent-500 hover:bg-accent-600 text-white font-semibold rounded-xl transition shadow-sm flex items-center justify-center gap-2 text-sm"
			>
				<ArrowRightIcon class="w-5 h-5" aria-label="Proceed to Checkout" />
				Proceed to Checkout
			</Link>

			<div class="mt-4 flex items-center justify-center gap-2 text-xs text-gray-400">
				<ShieldCheckIcon class="w-4 h-4 text-green-500" />
				Secure checkout &bull; Buyer protection included
			</div>

			<div class="mt-5 pt-5 border-t border-gray-100">
				<p class="text-xs text-gray-400 text-center mb-3">
					Accepted Payment Methods
				</p>
				<div class="flex items-center justify-center gap-3">
					<div class="w-10 h-6 rounded bg-gray-100 flex items-center justify-center">
						<span class="text-[9px] font-bold text-gray-500">VISA</span>
					</div>
					<div class="w-10 h-6 rounded bg-gray-100 flex items-center justify-center">
						<span class="text-[9px] font-bold text-gray-500">MC</span>
					</div>
					<div class="w-10 h-6 rounded bg-gray-100 flex items-center justify-center">
						<span class="text-[9px] font-bold text-gray-500">AMEX</span>
					</div>
					<div class="w-10 h-6 rounded bg-gray-100 flex items-center justify-center">
						<span class="text-[8px] font-bold text-gray-500">PayPal</span>
					</div>
				</div>
			</div>
		</div>
	);
};
