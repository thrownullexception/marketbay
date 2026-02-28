import { Breadcrumb } from "@/ui/breadcrumb";
import { MatchingStores } from "./MatchingStores";
import { SearchFilters } from "./SearchFilters";
import { SearchHeader } from "./SearchHeader";
import { SearchResults } from "./SearchResults";

export const SearchScreen = () => {
	return (
		<>
			<Breadcrumb
				items={[
					{ label: "Home", to: "/" },
					{ label: "Search results for 'wireless headphones'", to: "/search" },
				]}
			/>
			<SearchHeader />
			<MatchingStores />
			<main class="max-w-7xl mx-auto px-4 py-8">
				<div class="flex flex-col lg:flex-row gap-8">
					<SearchFilters />
					<SearchResults />
				</div>
			</main>
		</>
	);
};
