import {
	BookIcon,
	CreditCardIcon,
	PackageIcon,
	ShieldCheckIcon,
	ShoppingBagIcon,
	Undo2Icon,
} from "lucide-solid";
import { Grid3 } from "@/ui/grid";
import { ScreenSectionCard } from "@/ui/screen-section-card";

const helpByTopic = [
	{
		title: "Getting Started",
		description:
			"Create your account, set up your profile, and learn the basics of buying and selling.",
		icon: BookIcon,
		class: "bg-brand-50 group-hover:bg-brand-100",
		color: "text-brand-600",
	},
	{
		title: "Orders & Shipping",
		description:
			"Track your packages, understand shipping times, and manage your orders.",
		icon: PackageIcon,
		class: "bg-amber-50 group-hover:bg-amber-100",
		color: "text-amber-600",
	},
	{
		title: "Returns & Refunds",
		description:
			"Initiate a return, check refund status, and understand our return policy.",
		icon: Undo2Icon,
		class: "bg-rose-50 group-hover:bg-rose-100",
		color: "text-rose-500",
	},
	{
		title: "Account & Security",
		description:
			"Update your password, manage privacy settings, and secure your account.",
		icon: ShieldCheckIcon,
		class: "bg-emerald-50 group-hover:bg-emerald-100",
		color: "text-emerald-600",
	},
	{
		title: "Payments & Billing",
		description:
			"Payment methods, billing issues, promo codes, and transaction history.",
		icon: CreditCardIcon,
		class: "bg-violet-50 group-hover:bg-violet-100",
		color: "text-violet-600",
	},
	{
		title: "Selling on MarketBay",
		description:
			"Set up your store, list products, manage orders, and run promotions.",
		icon: ShoppingBagIcon,
		class: "bg-cyan-50 group-hover:bg-cyan-100",
		color: "text-cyan-600",
	},
];

export const HelpByTopic = () => {
	return (
		<ScreenSectionCard title="Browse by topic">
			<Grid3>
				{helpByTopic.map((topic) => (
					<a
						href="/todo"
						class="category-card bg-white rounded-2xl border border-gray-100 p-6 transition-all duration-300 group"
					>
						<div class="flex items-start gap-4">
							<div
								class={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 group-hover:bg-brand-100 transition-colors ${topic.class}`}
							>
								<topic.icon class={`w-6 h-6 ${topic.color}`} />
							</div>
							<div>
								<h3 class="text-sm font-bold text-gray-900 group-hover:text-brand-600 transition-colors">
									{topic.title}
								</h3>
								<p class="text-xs text-gray-500 mt-1 leading-relaxed">
									{topic.description}
								</p>
							</div>
						</div>
					</a>
				))}
			</Grid3>
		</ScreenSectionCard>
	);
};
