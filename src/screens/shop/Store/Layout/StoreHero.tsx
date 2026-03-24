import { createQuery } from "@tanstack/solid-query";
import { getRouteApi, linkOptions } from "@tanstack/solid-router";
import {
	BadgeCheckIcon,
	CalendarIcon,
	MessageSquareMoreIcon,
	PackageIcon,
	ShareIcon,
	StarIcon,
	TruckIcon,
	UserPlusIcon,
	UsersIcon,
} from "lucide-solid";
import { getShopTreaty } from "@/shared/treaty/shop.treaty";
import { createTreatyQueryOptions } from "@/shared/treaty/treaty-key";
import { shorten } from "@/shared/utils/numbers";
import { getInitials } from "@/shared/utils/strings";
import { AnchorLink, Button, LinkButton } from "@/ui/button";
import { Container } from "@/ui/container";

export const storeQuery = (storeSlug: string) => createTreatyQueryOptions(
	getShopTreaty,
	(t) => t.stores({ storeSlug }).get(),
);

export const StoreHero = () => {
	const routeApi = getRouteApi("/(app)/store/$storeSlug");
	const params = routeApi.useParams();

	const storeResult = createQuery(() => storeQuery(params().storeSlug));

	return (
		<section class="bg-white border-b border-gray-100">
			<div class="relative h-36 sm:h-44 lg:h-52 bg-linear-to-r from-brand-700 via-brand-800 to-brand-950 overflow-hidden">
				<div class="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48Y2lyY2xlIGN4PSIzMCIgY3k9IjMwIiByPSIyIiBmaWxsPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMDQpIi8+PC9zdmc+')] opacity-80"></div>
				<div class="absolute inset-0 bg-linear-to-t from-black/20 to-transparent"></div>
			</div>
			<Container>
				<div class="relative -mt-10 sm:-mt-12 mb-4">
					<div class="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl bg-linear-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-white text-2xl sm:text-3xl font-bold border-4 border-white shadow-lg">
						{getInitials(storeResult.data?.name ?? "")}
					</div>
				</div>
				<div class="flex flex-col sm:flex-row sm:items-start gap-4 pb-6">
					<div class="flex-1 min-w-0">
						<div class="flex flex-wrap items-center gap-2">
							<h1 class="text-2xl font-extrabold text-gray-900">{storeResult.data?.name}</h1>
							<span class="inline-flex items-center gap-1 px-2 py-0.5 bg-green-50 text-green-700 text-[11px] font-semibold rounded-full border border-blue-100">
								<BadgeCheckIcon class="w-3 h-3" />
								Verified Store
							</span>
						</div>
						<p class="text-sm text-gray-500 mt-1.5 max-w-xl">
							{storeResult.data?.tagline}
						</p>
						<div class="flex flex-wrap items-center gap-x-4 gap-y-1 mt-3 text-sm text-gray-500">
							<div class="flex items-center gap-1">
								<StarIcon class="w-4 h-4 text-yellow-500" fill="currentColor" />
								<span class="font-semibold text-gray-700">{storeResult.data?.avgRating}</span>
								<span>({shorten(storeResult.data?.ratingsCount ?? 0)} ratings)</span>
							</div>
							<span class="text-gray-300">|</span>
							<span class="flex gap-1">
								{" "}
								<PackageIcon class="w-4 h-4" /> {shorten(storeResult.data?.productsCount ?? 0)} products
							</span>
							<span class="text-gray-300">|</span>
							<span class="flex gap-1">
								<UsersIcon class="w-4 h-4" /> {shorten(storeResult.data?.followersCount ?? 0)} followers
							</span>
							<span class="text-gray-300 hidden sm:inline">|</span>
							<span class="flex gap-1">
								{" "}
								<TruckIcon class="w-4 h-4" /> 12,500+ orders
							</span>
							<span class="text-gray-300 hidden sm:inline">|</span>
							<span class="hidden sm:flex gap-1">
								{" "}
								<CalendarIcon class="w-4 h-4" /> Joined {storeResult.data?.createdAt?.toLocaleDateString()}
							</span>
						</div>
					</div>

					<div class="flex items-center gap-2 shrink-0">
						<Button
							label="Follow"
							variant="primary"
							Icon={UserPlusIcon}
							onClick={() => {
								console.log("tod");
							}}
						/>
						<LinkButton
							label="Chat with seller"
							link={linkOptions({
								to: "/chat/$storeSlug",
								params: { storeSlug: params().storeSlug },
							})}
							variant="default"
							Icon={MessageSquareMoreIcon}
							iconOnly
						/>
						<AnchorLink
							href="https://www.google.com"
							Icon={ShareIcon}
							variant="default"
							label="Share"
							iconOnly
						/>
					</div>
				</div>
			</Container>
		</section>
	);
};
