import { ArrowRightIcon } from "lucide-solid";
import { For } from "solid-js";
import { Container } from "@/ui/layout";

interface Promo {
	store: string;
	storeInitials: string;
	badge: string;
	badgeColor: string;
	title: string;
	detail: string;
}

const PROMOS: Promo[] = [
	{
		store: "TechVault",
		storeInitials: "TV",
		badge: "30% OFF",
		badgeColor: "bg-accent-50 text-accent-700 border-accent-200",
		title: "All headphones & speakers",
		detail: "Ends tonight",
	},
	{
		store: "StyleHouse",
		storeInitials: "SH",
		badge: "BUY 2 GET 1",
		badgeColor: "bg-rose-50 text-rose-700 border-rose-200",
		title: "Winter collection",
		detail: "While stocks last",
	},
	{
		store: "GreenNest",
		storeInitials: "GN",
		badge: "FROM $9.99",
		badgeColor: "bg-emerald-50 text-emerald-700 border-emerald-200",
		title: "Organic skincare flash sale",
		detail: "Limited time",
	},
	{
		store: "FitGear Pro",
		storeInitials: "FG",
		badge: "FREE SHIPPING",
		badgeColor: "bg-amber-50 text-amber-700 border-amber-200",
		title: "New arrivals this week",
		detail: "No minimum order",
	},
	{
		store: "BookNook",
		storeInitials: "BN",
		badge: "CODE: READ20",
		badgeColor: "bg-violet-50 text-violet-700 border-violet-200",
		title: "20% off all bestsellers",
		detail: "Ends Sunday",
	},
];

export const DealsTicker = () => {
	return (
		<section class="bg-gray-50 border-b border-gray-100 py-4">
			<Container>
				<div class="flex gap-3 overflow-x-auto pb-1 -mb-1 scrollbar-hide">
					<For each={PROMOS}>{(promo) => <PromoCard promo={promo} />}</For>
				</div>
			</Container>
		</section>
	);
};

const PromoCard = (props: { promo: Promo }) => {
	return (
		<div class="flex-none w-56 rounded-xl bg-white border border-gray-100 px-4 pt-3.5 pb-3 cursor-pointer group hover:border-gray-200 hover:shadow-sm transition">
			<div class="flex items-center gap-2 mb-2.5">
				<div class="w-6 h-6 rounded-md bg-gray-100 flex items-center justify-center text-[9px] font-bold text-gray-500">
					{props.promo.storeInitials}
				</div>
				<span class="text-xs font-medium text-gray-500">
					{props.promo.store}
				</span>
			</div>
			<span
				class={`inline-block px-2 py-0.5 ${props.promo.badgeColor} border text-[10px] font-bold rounded uppercase tracking-wide`}
			>
				{props.promo.badge}
			</span>
			<p class="text-sm font-semibold text-gray-800 mt-2 leading-snug">
				{props.promo.title}
			</p>
			<div class="flex items-center justify-between mt-2">
				<span class="text-[11px] text-gray-400">{props.promo.detail}</span>
				<ArrowRightIcon class="w-3.5 h-3.5 text-gray-300 group-hover:text-gray-500 transition" />
			</div>
		</div>
	);
};
