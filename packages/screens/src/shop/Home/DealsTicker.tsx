import { Link } from "@tanstack/solid-router";
import { ArrowRightIcon } from "lucide-solid";
import { For } from "solid-js";
import { Container } from "@/ui/layout";

interface Promo {
	store: string;
	storeInitials: string;
	badge: string;
	badgeColor: string;
	bgGradient: string;
	title: string;
	detail: string;
}

const PROMOS: Promo[] = [
	{
		store: "TechVault",
		storeInitials: "TV",
		badge: "30% OFF",
		badgeColor: "bg-accent-50 text-accent-700 border-accent-200",
		bgGradient: "from-blue-500 to-indigo-600",
		title: "All headphones & speakers",
		detail: "Ends tonight",
	},
	{
		store: "StyleHouse",
		storeInitials: "SH",
		badge: "BUY 2 GET 1",
		badgeColor: "bg-rose-50 text-rose-700 border-rose-200",
		bgGradient: "from-rose-400 to-pink-600",
		title: "Winter collection",
		detail: "While stocks last",
	},
	{
		store: "GreenNest",
		storeInitials: "GN",
		badge: "FROM $9.99",
		badgeColor: "bg-emerald-50 text-emerald-700 border-emerald-200",
		bgGradient: "from-emerald-400 to-teal-600",
		title: "Organic skincare flash sale",
		detail: "Limited time",
	},
	{
		store: "FitGear Pro",
		storeInitials: "FG",
		badge: "FREE SHIPPING",
		badgeColor: "bg-amber-50 text-amber-700 border-amber-200",
		bgGradient: "from-amber-400 to-orange-600",
		title: "New arrivals this week",
		detail: "No minimum order",
	},
	{
		store: "BookNook",
		storeInitials: "BN",
		badge: "CODE: READ20",
		badgeColor: "bg-violet-50 text-violet-700 border-violet-200",
		bgGradient: "from-violet-400 to-purple-600",
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
		<Link to="/store/$storeSlug" params={{ storeSlug: props.promo.store }}>
			<div class="flex-none w-56 rounded-xl bg-white border border-gray-100 overflow-hidden cursor-pointer group hover:border-gray-200 hover:shadow-sm transition">
				<div class={`relative h-16 bg-linear-to-br ${props.promo.bgGradient}`}>
					<div class="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48Y2lyY2xlIGN4PSIyMCIgY3k9IjIwIiByPSIxLjUiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4xKSIvPjwvc3ZnPg==')] opacity-80" />
					<div class="absolute bottom-2 left-3">
						<span
							class={`inline-block px-2 py-0.5 bg-white/90 backdrop-blur-sm text-[10px] font-bold rounded uppercase tracking-wide shadow-sm ${props.promo.badgeColor}`}
						>
							{props.promo.badge}
						</span>
					</div>
				</div>
				<div class="px-4 pt-3 pb-3">
					<div class="flex items-center gap-2 mb-2">
						<div class="w-5 h-5 rounded-md bg-gray-100 flex items-center justify-center text-[8px] font-bold text-gray-500">
							{props.promo.storeInitials}
						</div>
						<span class="text-xs font-medium text-gray-500">
							{props.promo.store}
						</span>
					</div>
					<p class="text-sm font-semibold text-gray-800 leading-snug">
						{props.promo.title}
					</p>
					<div class="flex items-center justify-between mt-2">
						<span class="text-[11px] text-gray-400">{props.promo.detail}</span>
						<ArrowRightIcon class="w-3.5 h-3.5 text-gray-300 group-hover:text-gray-500 transition" />
					</div>
				</div>
			</div>
		</Link>
	);
};
