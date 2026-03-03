import type { LucideIcon } from "lucide-solid";
import {
	ClockIcon,
	CreditCardIcon,
	RefreshCcwIcon,
	ShieldCheckIcon,
	TruckIcon,
} from "lucide-solid";
import { Container } from "@/ui/layout";

const POLICIES: PolicyCardProps[] = [
	{
		Icon: TruckIcon,
		iconColor: "text-brand-600 bg-brand-50",
		title: "Shipping Policy",
		items: [
			"Free standard shipping on all orders over $50",
			"Standard delivery: 3–7 business days",
			"Express delivery: 1–2 business days ($9.99)",
			"We ship to all 50 US states and select international destinations",
			"Tracking number provided via email once your order ships",
		],
	},
	{
		Icon: RefreshCcwIcon,
		iconColor: "text-emerald-600 bg-emerald-50",
		title: "Returns & Refunds",
		items: [
			"30-day hassle-free return window from date of delivery",
			"Items must be unused and in original packaging",
			"Refunds processed within 5–7 business days after inspection",
			"Return shipping is free for defective or incorrect items",
			"Exchanges available for size/color variants at no extra cost",
		],
	},
	{
		Icon: ShieldCheckIcon,
		iconColor: "text-indigo-600 bg-indigo-50",
		title: "Warranty",
		items: [
			"All electronics include a 1-year manufacturer warranty",
			"Extended 2-year protection plan available at checkout",
			"Warranty covers defects in materials and workmanship",
			"Accidental damage not covered under standard warranty",
			"Contact us within 48 hours of receiving a damaged product",
		],
	},
	{
		Icon: CreditCardIcon,
		iconColor: "text-amber-600 bg-amber-50",
		title: "Payment & Security",
		items: [
			"We accept Visa, Mastercard, Amex, PayPal, and Apple Pay",
			"All transactions are encrypted with 256-bit SSL",
			"No card information is stored on our servers",
			"Installment payments available via Afterpay for orders over $100",
			"Prices are in USD and include applicable taxes at checkout",
		],
	},
];

export const ShopStorePolicies = () => {
	return (
		<Container>
			<div class="mb-8">
				<h2 class="text-xl font-bold text-gray-900">Store Policies</h2>
				<p class="text-sm text-gray-500 mt-1">
					Everything you need to know before placing an order with TechVault.
				</p>
			</div>
			<div class="grid md:grid-cols-2 gap-6">
				{POLICIES.map((policy) => (
					<PolicyCard {...policy} />
				))}
			</div>
			<div class="mt-8 rounded-xl bg-gray-50 border border-gray-100 p-5 flex items-start gap-3">
				<ClockIcon class="w-5 h-5 text-gray-400 mt-0.5 shrink-0" />
				<div>
					<p class="text-sm font-semibold text-gray-700">
						Last updated: February 2026
					</p>
					<p class="text-xs text-gray-500 mt-0.5">
						Policies may be updated periodically. We recommend checking this
						page before each purchase.
					</p>
				</div>
			</div>
		</Container>
	);
};

interface PolicyCardProps {
	Icon: LucideIcon;
	iconColor: string;
	title: string;
	items: string[];
}

const PolicyCard = (props: PolicyCardProps) => {
	return (
		<div class="bg-white rounded-2xl border border-gray-100 p-6">
			<div class="flex items-center gap-3 mb-4">
				<div
					class={`w-10 h-10 rounded-xl ${props.iconColor} flex items-center justify-center`}
				>
					<props.Icon class="w-5 h-5" />
				</div>
				<h3 class="text-base font-bold text-gray-900">{props.title}</h3>
			</div>
			<ul class="space-y-2.5">
				{props.items.map((item) => (
					<li class="flex items-start gap-2 text-sm text-gray-600">
						<span class="w-1.5 h-1.5 rounded-full bg-gray-300 mt-1.5 shrink-0" />
						{item}
					</li>
				))}
			</ul>
		</div>
	);
};
