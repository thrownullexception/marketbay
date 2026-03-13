import { linkOptions } from "@tanstack/solid-router";
import { Breadcrumb } from "@/ui/breadcrumb";
import { BrowseAllCategories } from "./BrowseAllCategories";
import { FeaturedCategories } from "./FeaturedCategories";
import { MoreToExplore } from "./MoreToExplore";
import { TopStoresByCategory } from "./TopStoresByCategory";
import "./styles.css";
import { ScreenHeader } from "@/components/screen-header";

export const CategoriesScreen = () => {
	return (
		<>
			<Breadcrumb
				items={[
					{ label: "Home", link: linkOptions({ to: "/" }) },
					{ label: "Categories", link: linkOptions({ to: "/categories" }) },
				]}
			/>
			<ScreenHeader
				title="All Categories"
				description="Browse thousands of products across every category. Find exactly what you're looking for from independent sellers worldwide."
			/>
			<FeaturedCategories />
			<BrowseAllCategories />
			<MoreToExplore />
			<TopStoresByCategory />
		</>
	);
};
