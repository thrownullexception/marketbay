import { ComputerIcon, HomeIcon, ShirtIcon } from "lucide-solid";
import { For } from "solid-js";
import { ScreenHeader } from "@/screens/_components/screen-header";
import { SectionCard } from "@/screens/_components/section-card";
import { Breadcrumb } from "@/ui/breadcrumb";
import { BrowseAllCategories } from "./BrowseAllCategories";
import { FeaturedCategory } from "./FeaturedCategory";
import { MoreToExplore } from "./MoreToExplore";
import { TopStoresByCategory } from "./TopStoresByCategory";

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

export const CategoriesScreen = () => {
	return (
		<>
			<Breadcrumb
				items={[
					{ label: "Home", to: "/" },
					{ label: "Categories", to: "/categories" },
				]}
			/>

			<ScreenHeader
				title="All Categories"
				description="Browse thousands of products across every category. Find exactly what you're looking for from independent sellers worldwide."
			/>

			<SectionCard title="Featured Categories">
				<div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
					<For each={CATEGORIES}>
						{(category) => <FeaturedCategory {...category} />}
					</For>
				</div>
			</SectionCard>

			<BrowseAllCategories />
			<MoreToExplore />
			<TopStoresByCategory />
		</>
	);
};
