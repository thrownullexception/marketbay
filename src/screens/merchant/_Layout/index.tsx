import { Link, Outlet } from "@tanstack/solid-router";
import { BadgeCheckIcon, ExternalLink } from "lucide-solid";
import { Categories } from "@/schemas/category";
import type { StoreIdHash } from "@/server/modules/stores/stores/types";
import { createMerchantQuery } from "@/shared/treaty";
import { getInitials } from "@/shared/utils/strings";
import { Footer, MainNav, SidebarLayout, TopBar } from "@/ui/layout";
import { NavSection } from "./NavSection";

const MerchantSidebarCard = () => {
	const storeResult = createMerchantQuery((t) => t.stores.details.get(), {
		name: "Test Store",
		slug: "test-store",
		isVerified: true,
		email: "test@test.com",
		phone: "1234567890",
		website: "https://test.com",
		instagram: "https://instagram.com/test",
		twitter: "https://twitter.com/test",
		description: "Test Description",
		createdAt: new Date(),
		primaryCategoryId: Categories.Electronics,
		secondaryCategoryId: null,
		tagline: "Test Tagline",
		logoUrl: "https://test.com/logo.png",
		coverUrl: "https://test.com/cover.png",
		followersCount: 0,
		avgRating: "0.0",
		ratingsCount: 0,
		productsCount: 0,
		id: "test-store" as StoreIdHash,
	});

	return (
		<div class="p-5 border-b border-gray-100 text-center">
			<div class="w-16 h-16 rounded-full bg-linear-to-br from-brand-500 to-brand-700 text-white flex items-center justify-center text-xl font-bold mx-auto shadow-lg shadow-brand-500/20">
				{getInitials(storeResult.data?.name ?? "")}
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
				params={{ storeSlug: storeResult.data?.slug ?? "" }}
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
			<TopBar variant="merchant" />
			<MainNav variant="merchant" />
			<SidebarLayout
				sidebar={
					<>
						<MerchantSidebarCard />
						<NavSection />
					</>
				}
			/>
			<Footer variant="merchant" />
		</>
	);
};

export const MerchantNoStoreLayout = () => {
	return (
		<>
			<TopBar variant="merchant" />
			<MainNav variant="merchant" />
			<Outlet />
			<Footer variant="merchant" />
		</>
	);
};
