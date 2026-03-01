import { Link } from "@tanstack/solid-router";
import { ArrowRightIcon } from "lucide-solid";
import { For } from "solid-js";
import { ScreenSectionCard } from "@/screens/_components/screen-section-card";

interface SubCategory {
	label: string;
	slug: string;
}

interface BrowseCategoryData {
	label: string;
	slug: string;
	productCount: string;
	storeCount: string;
	iconBg: string;
	iconColor: string;
	iconPath: string;
	subcategories: SubCategory[];
}

const BROWSE_CATEGORIES: BrowseCategoryData[] = [
	{
		label: "Electronics",
		slug: "electronics",
		productCount: "12,400+",
		storeCount: "340",
		iconBg: "bg-blue-100",
		iconColor: "text-blue-600",
		iconPath:
			"M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
		subcategories: [
			{ label: "Smartphones", slug: "smartphones" },
			{ label: "Laptops", slug: "laptops" },
			{ label: "Headphones", slug: "headphones" },
			{ label: "Monitors", slug: "monitors" },
			{ label: "Cameras", slug: "cameras" },
			{ label: "Tablets", slug: "tablets" },
			{ label: "Speakers", slug: "speakers" },
			{ label: "Wearables", slug: "wearables" },
		],
	},
	{
		label: "Fashion",
		slug: "fashion",
		productCount: "18,600+",
		storeCount: "520",
		iconBg: "bg-rose-100",
		iconColor: "text-rose-600",
		iconPath:
			"M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z",
		subcategories: [
			{ label: "Women's Clothing", slug: "womens-clothing" },
			{ label: "Men's Clothing", slug: "mens-clothing" },
			{ label: "Shoes", slug: "shoes" },
			{ label: "Bags & Wallets", slug: "bags-and-wallets" },
			{ label: "Jewelry", slug: "jewelry" },
			{ label: "Watches", slug: "watches" },
			{ label: "Activewear", slug: "activewear" },
			{ label: "Accessories", slug: "accessories" },
		],
	},
	{
		label: "Home & Garden",
		slug: "home-and-garden",
		productCount: "9,300+",
		storeCount: "280",
		iconBg: "bg-emerald-100",
		iconColor: "text-emerald-600",
		iconPath:
			"M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6",
		subcategories: [
			{ label: "Furniture", slug: "furniture" },
			{ label: "Lighting", slug: "lighting" },
			{ label: "Kitchen", slug: "kitchen" },
			{ label: "Bedding", slug: "bedding" },
			{ label: "Decor", slug: "decor" },
			{ label: "Garden Tools", slug: "garden-tools" },
			{ label: "Storage", slug: "storage" },
			{ label: "Outdoor", slug: "outdoor" },
		],
	},
	{
		label: "Beauty",
		slug: "beauty",
		productCount: "7,800+",
		storeCount: "190",
		iconBg: "bg-amber-100",
		iconColor: "text-amber-600",
		iconPath:
			"M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42",
		subcategories: [
			{ label: "Skincare", slug: "skincare" },
			{ label: "Makeup", slug: "makeup" },
			{ label: "Haircare", slug: "haircare" },
			{ label: "Fragrances", slug: "fragrances" },
			{ label: "Nail Care", slug: "nail-care" },
			{ label: "Bath & Body", slug: "bath-and-body" },
			{ label: "Tools & Brushes", slug: "tools-and-brushes" },
			{ label: "Organic", slug: "organic" },
		],
	},
	{
		label: "Sports & Fitness",
		slug: "sports-and-fitness",
		productCount: "6,500+",
		storeCount: "210",
		iconBg: "bg-cyan-100",
		iconColor: "text-cyan-600",
		iconPath:
			"M21 7.5l-2.25-1.313M21 7.5v2.25m0-2.25l-2.25 1.313M3 7.5l2.25-1.313M3 7.5l2.25 1.313M3 7.5v2.25m9 3l2.25-1.313M12 12.75l-2.25-1.313M12 12.75V15m0 6.75l2.25-1.313M12 21.75V19.5m0 2.25l-2.25-1.313m0-16.875L12 2.25l2.25 1.313M21 14.25v2.25l-2.25 1.313m-13.5 0L3 16.5v-2.25",
		subcategories: [
			{ label: "Exercise Equipment", slug: "exercise-equipment" },
			{ label: "Running", slug: "running" },
			{ label: "Cycling", slug: "cycling" },
			{ label: "Yoga & Pilates", slug: "yoga-and-pilates" },
			{ label: "Team Sports", slug: "team-sports" },
			{ label: "Swimming", slug: "swimming" },
			{ label: "Supplements", slug: "supplements" },
			{ label: "Outdoor Sports", slug: "outdoor-sports" },
		],
	},
	{
		label: "Books",
		slug: "books",
		productCount: "14,200+",
		storeCount: "85",
		iconBg: "bg-violet-100",
		iconColor: "text-violet-600",
		iconPath:
			"M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253",
		subcategories: [
			{ label: "Fiction", slug: "fiction" },
			{ label: "Non-Fiction", slug: "non-fiction" },
			{ label: "Self-Help", slug: "self-help" },
			{ label: "Business", slug: "business" },
			{ label: "Science & Tech", slug: "science-and-tech" },
			{ label: "Children's", slug: "childrens" },
			{ label: "Comics & Manga", slug: "comics-and-manga" },
			{ label: "Textbooks", slug: "textbooks" },
		],
	},
	{
		label: "Toys & Games",
		slug: "toys-and-games",
		productCount: "5,100+",
		storeCount: "150",
		iconBg: "bg-orange-100",
		iconColor: "text-orange-600",
		iconPath:
			"M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
		subcategories: [
			{ label: "Action Figures", slug: "action-figures" },
			{ label: "Board Games", slug: "board-games" },
			{ label: "Building Sets", slug: "building-sets" },
			{ label: "Dolls", slug: "dolls" },
			{ label: "Puzzles", slug: "puzzles" },
			{ label: "Remote Control", slug: "remote-control" },
			{ label: "Educational", slug: "educational" },
			{ label: "Outdoor Play", slug: "outdoor-play" },
		],
	},
	{
		label: "Automotive",
		slug: "automotive",
		productCount: "4,200+",
		storeCount: "120",
		iconBg: "bg-slate-100",
		iconColor: "text-slate-600",
		iconPath:
			"M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12",
		subcategories: [
			{ label: "Car Accessories", slug: "car-accessories" },
			{ label: "Interior", slug: "interior" },
			{ label: "Exterior", slug: "exterior" },
			{ label: "Car Electronics", slug: "car-electronics" },
			{ label: "Tools", slug: "tools" },
			{ label: "Cleaning", slug: "cleaning" },
			{ label: "Tires & Wheels", slug: "tires-and-wheels" },
			{ label: "Motorcycle", slug: "motorcycle" },
		],
	},
	{
		label: "Groceries",
		slug: "groceries",
		productCount: "3,900+",
		storeCount: "95",
		iconBg: "bg-lime-100",
		iconColor: "text-lime-600",
		iconPath:
			"M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.048 8.287 8.287 0 009 9.6a8.983 8.983 0 013.361-6.867 8.21 8.21 0 003 2.48z",
		subcategories: [
			{ label: "Snacks", slug: "snacks" },
			{ label: "Beverages", slug: "beverages" },
			{ label: "Organic Foods", slug: "organic-foods" },
			{ label: "Coffee & Tea", slug: "coffee-and-tea" },
			{ label: "Condiments", slug: "condiments" },
			{ label: "Pantry Staples", slug: "pantry-staples" },
			{ label: "Health Foods", slug: "health-foods" },
			{ label: "International", slug: "international" },
		],
	},
];

const CategoryCard = (props: { category: BrowseCategoryData }) => (
	<div class="cat-card bg-white rounded-2xl border border-gray-100 p-6 transition-all duration-300">
		<div class="flex items-center gap-4 mb-5">
			<div
				class={`cat-icon w-14 h-14 rounded-2xl ${props.category.iconBg} flex items-center justify-center transition-transform duration-300`}
			>
				<svg
					class={`w-7 h-7 ${props.category.iconColor}`}
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
			<div>
				<h3 class="font-bold text-gray-900">{props.category.label}</h3>
				<p class="text-xs text-gray-500 mt-0.5">
					{props.category.productCount} products &bull;{" "}
					{props.category.storeCount} stores
				</p>
			</div>
		</div>
		<div class="grid grid-cols-2 gap-x-4 gap-y-1.5">
			<For each={props.category.subcategories}>
				{(sub) => (
					<Link
						to="/category/$categorySlug"
						params={{ categorySlug: sub.slug }}
						class="subcat-link text-sm text-gray-600 hover:text-brand-600 py-1 px-2 -mx-2 rounded-lg transition"
					>
						{sub.label}
					</Link>
				)}
			</For>
		</div>
		<Link
			to="/category/$categorySlug"
			params={{ categorySlug: props.category.slug }}
			class="inline-flex items-center gap-1 text-xs font-semibold text-brand-600 hover:text-brand-700 mt-4 transition"
		>
			View all {props.category.label} <ArrowRightIcon class="w-3.5 h-3.5" />
		</Link>
	</div>
);

export const BrowseAllCategories = () => {
	return (
		<ScreenSectionCard title="Browse All Categories" alternate>
			<div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
				<For each={BROWSE_CATEGORIES}>
					{(category) => <CategoryCard category={category} />}
				</For>
			</div>
		</ScreenSectionCard>
	);
};
