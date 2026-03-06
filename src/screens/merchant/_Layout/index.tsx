import { getRouteApi } from "@tanstack/solid-router";
import {
	Footer,
	MainNav,
	SidebarCard,
	SidebarLayout,
	TopBar,
} from "@/screens/_components/layout";
import { NavSection } from "./NavSection";

export const MerchantLayout = () => {
	const routeApi = getRouteApi("/merchant/$storeId/");
	const params = routeApi.useParams();
	const storeId = params().storeId;

	return (
		<>
			<TopBar variant="seller" />
			<MainNav variant="seller" />
			<SidebarLayout
				sidebar={
					<SidebarCard
						viewStorefrontTo="/store/$storeSlug"
						viewStorefrontParams={{ storeSlug: storeId }}
					>
						<NavSection storeId={storeId} />
					</SidebarCard>
				}
			/>
			<Footer variant="simple" />
		</>
	);
};
