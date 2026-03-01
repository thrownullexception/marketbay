import { Link } from "@tanstack/solid-router";
import {
	ArrowRightIcon,
	ComputerIcon,
	HomeIcon,
	ShirtIcon,
} from "lucide-solid";
import { For } from "solid-js";
import { ScreenSectionCard } from "@/screens/_components/screen-section-card";

const CATEGORIES = [
	{
		label: "Electronics",
		slug: "electronics",
		productCount: 12400,
		gradient: "from-blue-600 to-indigo-800",
		textColor: "text-blue-200",
		Icon: ComputerIcon,
	},
	{
		label: "Fashion",
		slug: "fashion",
		productCount: 18600,
		gradient: "from-rose-500 to-pink-700",
		textColor: "text-rose-200",
		Icon: ShirtIcon,
	},
	{
		label: "Home & Garden",
		slug: "home-and-garden",
		productCount: 9300,
		gradient: "from-emerald-500 to-teal-700",
		textColor: "text-emerald-200",
		Icon: HomeIcon,
	},
];

const FeaturedCategory = (props: (typeof CATEGORIES)[number]) => {
	return (
		<Link
			to="/category/$categorySlug"
			params={{ categorySlug: "todo" }}
			class={`relative rounded-2xl overflow-hidden bg-linear-to-br ${props.gradient} min-h-[160px] flex items-end p-6 group cursor-pointer`}
		>
			<div class="absolute inset-0  opacity-80"></div>
			<div class="absolute top-5 right-5 opacity-20 group-hover:opacity-30 transition">
				<props.Icon stroke-width={1} class="w-24 h-24 text-white" />
			</div>
			<div class="relative">
				<h3 class="text-xl font-bold text-white">{props.label}</h3>
				<p class={`${props.textColor} text-sm mt-0.5`}>
					{props.productCount}+ products
				</p>
			</div>
			<ArrowRightIcon class="absolute right-5 bottom-5 w-5 h-5 text-white/40 group-hover:text-white/70 group-hover:translate-x-1 transition-all" />
		</Link>
	);
};

export const FeaturedCategories = () => {
	return (
		<ScreenSectionCard title="Featured Categories">
			<div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
				<For each={CATEGORIES}>
					{(category) => <FeaturedCategory {...category} />}
				</For>
			</div>
		</ScreenSectionCard>
	);
};
