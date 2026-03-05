import { getRouteApi, Link, linkOptions } from "@tanstack/solid-router";
import { Container } from "@/ui/layout";

const tabs = (storeSlug: string) => [
	{
		label: "Products",
		link: linkOptions({
			to: "/store/$storeSlug",
			params: { storeSlug },
		}),
	},
	{
		label: "Reviews",
		link: linkOptions({
			to: "/store/$storeSlug/reviews",
			params: { storeSlug },
		}),
	},
	{
		label: "About",
		link: linkOptions({
			to: "/store/$storeSlug/about",
			params: { storeSlug },
		}),
	},
	{
		label: "Policies",
		link: linkOptions({
			to: "/store/$storeSlug/policies",
			params: { storeSlug },
		}),
	},
];

export const StoreTabs = () => {
	const routeApi = getRouteApi("/(app)/store/$storeSlug");
	const params = routeApi.useParams();

	return (
		<div class="bg-white border-b border-gray-100 sticky top-[57px] z-40">
			<Container>
				<div class="flex items-center gap-6 overflow-x-auto scrollbar-hide">
					{tabs(params().storeSlug).map((tab) => (
						<Link
							to={tab.link.to}
							params={tab.link.params}
							resetScroll={false}
							class="whitespace-nowrap py-3 text-sm border-b-2 transition"
							activeOptions={{ exact: true }}
							activeProps={{ class: "tab-active font-semibold" }}
							inactiveProps={{
								class:
									"font-medium border-transparent border-transparent text-gray-400 hover:text-gray-600 ",
							}}
						>
							{tab.label}
						</Link>
					))}
				</div>
			</Container>
		</div>
	);
};
