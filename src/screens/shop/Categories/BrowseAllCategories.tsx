import { Link } from "@tanstack/solid-router";
import {
	ArrowRightIcon,
	BookIcon,
	CarIcon,
	ComputerIcon,
	GamepadIcon,
	HomeIcon,
	type LucideIcon,
	Paintbrush,
	ShirtIcon,
	ShoppingBagIcon,
	WeightIcon,
} from "lucide-solid";
import { For } from "solid-js";
import { Grid3 } from "@/ui/grid";
import { ScreenSectionCard } from "@/ui/screen-section-card";

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
	Icon: LucideIcon;
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
		Icon: ComputerIcon,
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
		Icon: ShirtIcon,
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
		Icon: HomeIcon,
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
		Icon: Paintbrush,
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
		Icon: WeightIcon,
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
		Icon: BookIcon,
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
		Icon: GamepadIcon,
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
		Icon: CarIcon,
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
		Icon: ShoppingBagIcon,
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
				<props.category.Icon class={`w-7 h-7 ${props.category.iconColor}`} />
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
			<Grid3>
				<For each={BROWSE_CATEGORIES}>
					{(category) => <CategoryCard category={category} />}
				</For>
			</Grid3>
		</ScreenSectionCard>
	);
};
