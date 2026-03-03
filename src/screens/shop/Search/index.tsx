import { linkOptions } from "@tanstack/solid-router";
import { Breadcrumb } from "@/ui/breadcrumb";
import { Container, SideBar } from "@/ui/layout";
import { MatchingStores } from "./MatchingStores";
import { SearchFilters } from "./SearchFilters";
import { SearchHeader } from "./SearchHeader";
import { SearchResults } from "./SearchResults";

export const SearchScreen = () => {
	return (
		<>
			<Breadcrumb
				items={[
					{ label: "Home", link: linkOptions({ to: "/" }) },
					{
						label: "Search results for 'wireless headphones'",
						link: linkOptions({ to: "/search" }),
					},
				]}
			/>
			<SearchHeader />
			<MatchingStores />
			<Container className="py-8">
				<SideBar left={<SearchFilters />} right={<SearchResults />} />
			</Container>
		</>
	);
};
