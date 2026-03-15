import { getRouteApi, Link } from "@tanstack/solid-router";
import { BadgeCheckIcon, ExternalLink } from "lucide-solid";
import {
	Footer,
	MainNav,
	SidebarLayout,
	TopBar,
} from "@/ui/layout";
import { NavSection } from "./NavSection";

const MerchantSidebarCard = () => {
	return (
		<div class="p-5 border-b border-gray-100 text-center">
			<div class="w-16 h-16 rounded-full bg-linear-to-br from-brand-500 to-brand-700 text-white flex items-center justify-center text-xl font-bold mx-auto shadow-lg shadow-brand-500/20">
				TV
			</div>
			<h2 class="text-base font-bold text-gray-900 mt-3">Tech Vault</h2>
			<p class="text-xs text-gray-500 mt-0.5">@techvault</p>
			<div class="flex items-center justify-center gap-1 mt-2">
				<span class="inline-flex items-center gap-1 px-2 py-0.5 bg-green-50 text-green-600 text-[10px] font-semibold rounded-full">
					<BadgeCheckIcon class="w-3 h-3" />
					Verified Store
				</span>
			</div>
			<Link
				to="/store/$storeSlug"
				params={{ storeSlug: "todo" }}
				class="mt-3 inline-flex items-center gap-1.5 text-xs font-medium text-brand-600 hover:text-brand-700 transition"
			>
				<ExternalLink class="w-3.5 h-3.5" />
				View Store Page
			</Link>
		</div>
	);
};

export const MerchantLayout = () => {
	const routeApi = getRouteApi("/merchant/$storeId");
	const params = routeApi.useParams();
	const storeId = params().storeId;

	return (
		<>
			<TopBar variant="seller" />
			<MainNav variant="seller" isAuthenticated={true} />
			<SidebarLayout
				sidebar={
					<>
						<MerchantSidebarCard />
						<NavSection storeId={storeId} />
					</>
				}
			/>
			<Footer variant="simple" />
		</>
	);
};
