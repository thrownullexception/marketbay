import { Link, linkOptions } from "@tanstack/solid-router";
import { For } from "solid-js";
import { ScreenSectionCard } from "@/components/screen-section-card";

interface Category {
	label: string;
	slug: string;
	bgColor: string;
	hoverBgColor: string;
	iconColor: string;
	iconPath: string;
}

const CATEGORIES: Category[] = [
	{
		label: "Electronics",
		slug: "electronics",
		bgColor: "bg-blue-100",
		hoverBgColor: "group-hover:bg-blue-200",
		iconColor: "text-blue-600",
		iconPath:
			"M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
	},
	{
		label: "Fashion",
		slug: "fashion",
		bgColor: "bg-rose-100",
		hoverBgColor: "group-hover:bg-rose-200",
		iconColor: "text-rose-600",
		iconPath:
			"M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z",
	},
	{
		label: "Home",
		slug: "home",
		bgColor: "bg-emerald-100",
		hoverBgColor: "group-hover:bg-emerald-200",
		iconColor: "text-emerald-600",
		iconPath:
			"M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6",
	},
	{
		label: "Beauty",
		slug: "beauty",
		bgColor: "bg-amber-100",
		hoverBgColor: "group-hover:bg-amber-200",
		iconColor: "text-amber-600",
		iconPath:
			"M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42",
	},
	{
		label: "Books",
		slug: "books",
		bgColor: "bg-violet-100",
		hoverBgColor: "group-hover:bg-violet-200",
		iconColor: "text-violet-600",
		iconPath:
			"M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253",
	},
	{
		label: "Toys",
		slug: "toys",
		bgColor: "bg-orange-100",
		hoverBgColor: "group-hover:bg-orange-200",
		iconColor: "text-orange-600",
		iconPath:
			"M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
	},
	{
		label: "Sports",
		slug: "sports",
		bgColor: "bg-cyan-100",
		hoverBgColor: "group-hover:bg-cyan-200",
		iconColor: "text-cyan-600",
		iconPath:
			"M21 7.5l-2.25-1.313M21 7.5v2.25m0-2.25l-2.25 1.313M3 7.5l2.25-1.313M3 7.5l2.25 1.313M3 7.5v2.25m9 3l2.25-1.313M12 12.75l-2.25-1.313M12 12.75V15m0 6.75l2.25-1.313M12 21.75V19.5m0 2.25l-2.25-1.313m0-16.875L12 2.25l2.25 1.313M21 14.25v2.25l-2.25 1.313m-13.5 0L3 16.5v-2.25",
	},
	{
		label: "Groceries",
		slug: "groceries",
		bgColor: "bg-lime-100",
		hoverBgColor: "group-hover:bg-lime-200",
		iconColor: "text-lime-600",
		iconPath:
			"M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.048 8.287 8.287 0 009 9.6a8.983 8.983 0 013.361-6.867 8.21 8.21 0 003 2.48z",
	},
	{
		label: "Auto",
		slug: "auto",
		bgColor: "bg-slate-100",
		hoverBgColor: "group-hover:bg-slate-200",
		iconColor: "text-slate-600",
		iconPath:
			"M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12",
	},
];

const CategoryItem = (props: { category: Category }) => (
	<Link
		to="/category/$categorySlug"
		params={{ categorySlug: props.category.slug }}
		class="group flex flex-col items-center p-3 rounded-xl hover:bg-brand-50 transition-all"
	>
		<div
			class={`w-12 h-12 rounded-xl ${props.category.bgColor} ${props.category.hoverBgColor} flex items-center justify-center mb-1.5 transition-colors`}
		>
			<svg
				class={`w-6 h-6 ${props.category.iconColor}`}
				fill="none"
				viewBox="0 0 24 24"
				stroke="currentColor"
				stroke-width="1.5"
			>
				<title>{props.category.label}</title>
				<path
					stroke-linecap="round"
					stroke-linejoin="round"
					d={props.category.iconPath}
				/>
			</svg>
		</div>
		<span class="text-xs font-medium text-gray-600 group-hover:text-brand-600 transition-colors text-center">
			{props.category.label}
		</span>
	</Link>
);

export const ShopByCategory = () => {
	return (
		<ScreenSectionCard
			title="Shop by Category"
			alternate
			action={linkOptions({ label: "View All", to: "/categories" })}
		>
			<div class="grid grid-cols-3 sm:grid-cols-5 lg:grid-cols-10 gap-3">
				<For each={CATEGORIES}>
					{(category) => <CategoryItem category={category} />}
				</For>
			</div>
		</ScreenSectionCard>
	);
};
