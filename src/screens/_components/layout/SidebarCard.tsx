import { Link } from "@tanstack/solid-router";
import { BadgeCheckIcon } from "lucide-solid";
import type { JSX } from "solid-js";

type SidebarCardProps = {
	storeName?: string;
	storeInitials?: string;
	viewStorefrontTo?: string;
	viewStorefrontParams?: Record<string, string>;
	children: JSX.Element;
};

const ViewStorefrontIcon = () => (
	<svg
		class="w-3.5 h-3.5"
		fill="none"
		viewBox="0 0 24 24"
		stroke="currentColor"
		stroke-width="2"
	>
		<path
			stroke-linecap="round"
			stroke-linejoin="round"
			d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
		/>
	</svg>
);

const VerifiedBadge = () => (
	<span class="inline-flex items-center gap-0.5 px-1.5 py-0.5 bg-blue-50 text-blue-600 text-[10px] font-semibold rounded-full border border-blue-100">
		<BadgeCheckIcon class="w-2.5 h-2.5" />
		Verified
	</span>
);

export const SidebarCard = (props: SidebarCardProps) => {
	const storeName = props.storeName ?? "TechVault";
	const storeInitials = props.storeInitials ?? "TV";

	return (
		<div class="bg-white rounded-2xl border border-gray-100 overflow-hidden sticky top-24">
			<div class="p-5 border-b border-gray-100">
				<div class="flex items-center gap-3">
					<div class="w-12 h-12 rounded-xl bg-linear-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-white text-sm font-bold flex-shrink-0 shadow-md shadow-blue-500/20">
						{storeInitials}
					</div>
					<div class="min-w-0">
						<h2 class="text-sm font-bold text-gray-900 truncate">
							{storeName}
						</h2>
						<div class="flex items-center gap-1 mt-0.5">
							<VerifiedBadge />
						</div>
					</div>
				</div>
				{props.viewStorefrontTo && (
					<Link
						to={props.viewStorefrontTo}
						params={props.viewStorefrontParams}
						class="mt-3 flex items-center gap-1.5 text-xs font-medium text-brand-600 hover:text-brand-700 transition"
					>
						<ViewStorefrontIcon />
						View Storefront
					</Link>
				)}
			</div>
			{props.children}
		</div>
	);
};
