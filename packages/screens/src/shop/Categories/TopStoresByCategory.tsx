import { Link, linkOptions } from "@tanstack/solid-router";
import { For } from "solid-js";
import { ScreenSectionCard } from "@/components/screen-section-card";
import { Grid4 } from "@/ui/grid";

interface StoreEntry {
	initials: string;
	name: string;
	slug: string;
	gradient: string;
	rating: string;
	reviewCount: string;
}

interface CategoryStoresData {
	label: string;
	iconBg: string;
	iconColor: string;
	iconPath: string;
	stores: StoreEntry[];
}

const CATEGORY_STORES: CategoryStoresData[] = [
	{
		label: "Electronics",
		iconBg: "bg-blue-100",
		iconColor: "text-blue-600",
		iconPath:
			"M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
		stores: [
			{
				initials: "TV",
				name: "TechVault",
				slug: "techvault",
				gradient: "from-blue-500 to-indigo-600",
				rating: "4.9",
				reviewCount: "2.1k",
			},
			{
				initials: "GZ",
				name: "GadgetZone",
				slug: "gadgetzone",
				gradient: "from-gray-700 to-gray-900",
				rating: "4.7",
				reviewCount: "1.4k",
			},
			{
				initials: "DH",
				name: "DigiHub",
				slug: "digihub",
				gradient: "from-cyan-500 to-blue-600",
				rating: "4.8",
				reviewCount: "980",
			},
		],
	},
	{
		label: "Fashion",
		iconBg: "bg-rose-100",
		iconColor: "text-rose-600",
		iconPath:
			"M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007z",
		stores: [
			{
				initials: "SH",
				name: "StyleHouse",
				slug: "stylehouse",
				gradient: "from-rose-500 to-pink-600",
				rating: "4.8",
				reviewCount: "1.8k",
			},
			{
				initials: "UV",
				name: "UrbanVogue",
				slug: "urbanvogue",
				gradient: "from-purple-500 to-violet-600",
				rating: "4.7",
				reviewCount: "1.2k",
			},
			{
				initials: "TC",
				name: "ThreadCraft",
				slug: "threadcraft",
				gradient: "from-amber-500 to-orange-600",
				rating: "4.9",
				reviewCount: "860",
			},
		],
	},
	{
		label: "Beauty",
		iconBg: "bg-emerald-100",
		iconColor: "text-emerald-600",
		iconPath:
			"M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128z",
		stores: [
			{
				initials: "GN",
				name: "GreenNest",
				slug: "greennest",
				gradient: "from-emerald-500 to-teal-600",
				rating: "4.9",
				reviewCount: "956",
			},
			{
				initials: "BG",
				name: "BeautyGlow",
				slug: "beautyglow",
				gradient: "from-pink-400 to-rose-500",
				rating: "4.8",
				reviewCount: "720",
			},
			{
				initials: "PB",
				name: "PureBloom",
				slug: "purebloom",
				gradient: "from-lime-500 to-green-600",
				rating: "4.9",
				reviewCount: "540",
			},
		],
	},
	{
		label: "Sports",
		iconBg: "bg-cyan-100",
		iconColor: "text-cyan-600",
		iconPath:
			"M21 7.5l-2.25-1.313M21 7.5v2.25m0-2.25l-2.25 1.313M3 7.5l2.25-1.313M3 7.5l2.25 1.313M3 7.5v2.25",
		stores: [
			{
				initials: "FG",
				name: "FitGear Pro",
				slug: "fitgear-pro",
				gradient: "from-orange-500 to-amber-600",
				rating: "4.7",
				reviewCount: "743",
			},
			{
				initials: "AX",
				name: "ActiveX",
				slug: "activex",
				gradient: "from-sky-500 to-blue-600",
				rating: "4.8",
				reviewCount: "610",
			},
			{
				initials: "PS",
				name: "ProSport",
				slug: "prosport",
				gradient: "from-teal-500 to-cyan-600",
				rating: "4.6",
				reviewCount: "480",
			},
		],
	},
];

const CategoryStoreCard = (props: { data: CategoryStoresData }) => (
	<div class="bg-white rounded-2xl border border-gray-100 p-5">
		<div class="flex items-center gap-2 mb-4">
			<div
				class={`w-8 h-8 rounded-lg ${props.data.iconBg} flex items-center justify-center`}
			>
				<svg
					class={`w-4 h-4 ${props.data.iconColor}`}
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
					stroke-width="1.5"
				>
					<title>{props.data.label}</title>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						d={props.data.iconPath}
					/>
				</svg>
			</div>
			<h3 class="text-sm font-semibold text-gray-900">{props.data.label}</h3>
		</div>
		<div class="space-y-3">
			<For each={props.data.stores}>
				{(store) => (
					<Link
						to="/store/$storeSlug"
						params={{ storeSlug: store.slug }}
						class="flex items-center gap-3 group"
					>
						<div
							class={`w-9 h-9 rounded-lg bg-linear-to-br ${store.gradient} flex items-center justify-center text-white text-[10px] font-bold shrink-0`}
						>
							{store.initials}
						</div>
						<div class="min-w-0 flex-1">
							<p class="text-sm font-medium text-gray-900 truncate group-hover:text-brand-600 transition">
								{store.name}
							</p>
							<p class="text-[11px] text-gray-400">
								{store.rating} &bull; {store.reviewCount} reviews
							</p>
						</div>
					</Link>
				)}
			</For>
		</div>
	</div>
);

export const TopStoresByCategory = () => {
	return (
		<ScreenSectionCard
			title="Top Stores by Category"
			alternate
			action={linkOptions({ label: "All Stores", to: "/stores" })}
		>
			<Grid4>
				<For each={CATEGORY_STORES}>
					{(data) => <CategoryStoreCard data={data} />}
				</For>
			</Grid4>
		</ScreenSectionCard>
	);
};
