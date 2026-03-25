import { createQuery } from "@tanstack/solid-query";
import { Link, Outlet } from "@tanstack/solid-router";
import { BadgeCheckIcon, ExternalLink } from "lucide-solid";
import { getMerchantTreaty } from "@/shared/treaty/merchant.treaty";
import { createTreatyQueryOptions } from "@/shared/treaty/treaty-key";
import { getInitials } from "@/shared/utils/strings";
import { Footer, MainNav, SidebarLayout, TopBar } from "@/ui/layout";
import { NavSection } from "./NavSection";

const MerchantSidebarCard = () => {
	const storeResult = createQuery(() =>
		createTreatyQueryOptions(getMerchantTreaty, (t) => t.stores.details.get()),
	);

	return (
		<div class="p-5 border-b border-gray-100 text-center">
			<div class="w-16 h-16 rounded-full bg-linear-to-br from-brand-500 to-brand-700 text-white flex items-center justify-center text-xl font-bold mx-auto shadow-lg shadow-brand-500/20">
				{/** biome-ignore lint/style/noNonNullAssertion: <> */}
				{getInitials(storeResult.data?.name!)}
			</div>
			<h2 class="text-base font-bold text-gray-900 mt-3">
				{storeResult.data?.name}
			</h2>
			<p class="text-xs text-gray-500 mt-0.5">@{storeResult.data?.slug}</p>
			{storeResult.data?.isVerified && (
				<div class="flex items-center justify-center gap-1 mt-2">
					<span class="inline-flex items-center gap-1 px-2 py-0.5 bg-green-50 text-green-600 text-[10px] font-semibold rounded-full">
						<BadgeCheckIcon class="w-3 h-3" />
						Verified Store
					</span>
				</div>
			)}
			<Link
				to="/store/$storeSlug"
				// biome-ignore lint/style/noNonNullAssertion: <>
				params={{ storeSlug: storeResult.data?.slug! }}
				class="mt-3 inline-flex items-center gap-1.5 text-xs font-medium text-brand-600 hover:text-brand-700 transition"
			>
				<ExternalLink class="w-3.5 h-3.5" />
				View Store Page
			</Link>
		</div>
	);
};

export const MerchantStoreLayout = () => {
	return (
		<>
			<TopBar variant="seller" />
			<MainNav variant="seller" isAuthenticated={true} />
			<SidebarLayout
				sidebar={
					<>
						<MerchantSidebarCard />
						<NavSection />
					</>
				}
			/>
			<Footer variant="simple" />
		</>
	);
};

export const MerchantGuestLayout = () => {
	return (
		<>
			<TopBar variant="seller" />
			<MainNav variant="seller" isAuthenticated={true} />
			<Outlet />
			<Footer variant="simple" />
		</>
	);
};
