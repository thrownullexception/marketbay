import { Link } from "@tanstack/solid-router";
import {
	ArrowRightIcon,
	BadgeCheckIcon,
	BoxIcon,
	PlusIcon,
	ShoppingCartIcon,
	TagIcon,
} from "lucide-solid";
import { For } from "solid-js";
import { Container } from "@/ui/container";
import { Footer, MainNav, TopBar } from "@/ui/layout";

type StoreRole = "Owner" | "Admin" | "Member";
type StoreStatus = "Active" | "Draft";

interface MerchantStore {
	id: string;
	name: string;
	handle: string;
	categories: string;
	bannerGradient: string;
	avatarGradient: string;
	initials: string;
	role: StoreRole;
	status: StoreStatus;
	verified: boolean;
	productCount: number;
	orderCount: number;
}

const RoleBadge = (props: { role: StoreRole }) => {
	const config = {
		Owner: "bg-brand-50 text-brand-700 border-brand-200",
		Admin: "bg-accent-50 text-accent-700 border-accent-200",
		Member: "bg-gray-50 text-gray-600 border-gray-200",
	};
	return (
		<span
			class={`inline-flex items-center px-2 py-0.5 text-[10px] font-semibold rounded-full border ${config[props.role]}`}
		>
			{props.role}
		</span>
	);
};

const StatusBadge = (props: { status: StoreStatus }) => {
	return (
		<span
			class={`inline-flex items-center gap-1 px-2 py-0.5 text-[10px] font-semibold rounded-full ${
				props.status === "Active"
					? "bg-green-50 text-green-700"
					: "bg-gray-100 text-gray-500"
			}`}
		>
			<span
				class={`w-1.5 h-1.5 rounded-full ${props.status === "Active" ? "bg-green-500" : "bg-gray-400"}`}
			/>
			{props.status}
		</span>
	);
};

const MerchantStoreCard = (props: { store: MerchantStore }) => {
	const s = props.store;
	return (
		<div class="bg-white rounded-2xl border border-gray-100 overflow-hidden transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-gray-100">
			<div class={`h-16 bg-linear-to-r ${s.bannerGradient} relative`}>
				<div class="absolute -bottom-5 left-5">
					<div
						class={`w-12 h-12 rounded-xl bg-linear-to-br ${s.avatarGradient} flex items-center justify-center text-white text-sm font-bold border-2 border-white shadow-md`}
					>
						{s.initials}
					</div>
				</div>
			</div>
			<div class="pt-7 px-5 pb-5">
				<div class="flex items-start justify-between gap-2">
					<div class="min-w-0">
						<div class="flex items-center gap-2 flex-wrap">
							<h3 class="font-bold text-gray-900 truncate">{s.name}</h3>
							{s.verified && (
								<BadgeCheckIcon class="w-4 h-4 text-green-500 shrink-0" />
							)}
						</div>
						<p class="text-xs text-gray-400 mt-0.5">@{s.handle}</p>
					</div>
					<div class="flex flex-col items-end gap-1 shrink-0">
						<RoleBadge role={s.role} />
						<StatusBadge status={s.status} />
					</div>
				</div>
				<p class="text-xs text-gray-500 mt-2">{s.categories}</p>
				<div class="flex items-center gap-4 mt-3 text-xs text-gray-500">
					<span class="flex items-center gap-1">
						<TagIcon class="w-3.5 h-3.5 text-gray-400" />
						{s.productCount} products
					</span>
					<span class="flex items-center gap-1">
						<ShoppingCartIcon class="w-3.5 h-3.5 text-gray-400" />
						{s.orderCount} orders
					</span>
				</div>
				<Link
					to="/merchant/$storeId"
					params={{ storeId: s.id }}
					class="mt-4 flex items-center justify-center gap-2 w-full px-4 py-2.5 bg-brand-600 hover:bg-brand-700 text-white text-xs font-semibold rounded-xl transition"
				>
					Manage Store
					<ArrowRightIcon class="w-3.5 h-3.5" />
				</Link>
			</div>
		</div>
	);
};

const CreateStoreCard = () => {
	return (
		<Link
			to="/create-store"
			class="group flex flex-col items-center justify-center gap-4 bg-white rounded-2xl border-2 border-dashed border-gray-200 hover:border-brand-400 hover:bg-brand-50/50 transition-all duration-300 p-8 min-h-[220px]"
		>
			<div class="w-12 h-12 rounded-xl bg-gray-100 group-hover:bg-brand-100 flex items-center justify-center transition-colors">
				<PlusIcon class="w-6 h-6 text-gray-400 group-hover:text-brand-600 transition-colors" />
			</div>
			<div class="text-center">
				<p class="text-sm font-semibold text-gray-700 group-hover:text-brand-700 transition-colors">
					Create a new store
				</p>
				<p class="text-xs text-gray-400 mt-1">
					Set up in minutes and start selling
				</p>
			</div>
		</Link>
	);
};

const placeholderStores: MerchantStore[] = [
	{
		id: "store-1",
		name: "TechVault",
		handle: "techvault",
		categories: "Electronics · Gadgets · Accessories",
		bannerGradient: "from-blue-500 to-indigo-600",
		avatarGradient: "from-blue-500 to-indigo-600",
		initials: "TV",
		role: "Owner",
		status: "Active",
		verified: true,
		productCount: 342,
		orderCount: 1240,
	},
	{
		id: "store-2",
		name: "StyleHouse",
		handle: "stylehouse",
		categories: "Fashion · Shoes · Accessories",
		bannerGradient: "from-rose-400 to-pink-600",
		avatarGradient: "from-rose-500 to-pink-600",
		initials: "SH",
		role: "Admin",
		status: "Active",
		verified: true,
		productCount: 518,
		orderCount: 876,
	},
	{
		id: "store-3",
		name: "GreenNest",
		handle: "greennest",
		categories: "Beauty · Skincare · Wellness",
		bannerGradient: "from-emerald-400 to-teal-600",
		avatarGradient: "from-emerald-500 to-teal-600",
		initials: "GN",
		role: "Member",
		status: "Draft",
		verified: false,
		productCount: 48,
		orderCount: 0,
	},
];

export const MerchantStoresScreen = () => {
	return (
		<>
			<TopBar variant="seller" />
			<MainNav variant="seller" isAuthenticated={true} />

			<section class="bg-linear-to-br from-brand-50 via-white to-accent-50 border-b border-gray-100">
				<Container class="py-8 lg:py-10">
					<div class="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
						<div>
							<h1 class="text-2xl lg:text-3xl font-extrabold text-gray-900">
								My Stores
							</h1>
							<p class="text-gray-500 text-sm mt-1.5 max-w-lg">
								Manage your stores or create a new one. Switch between stores
								you own or are a member of.
							</p>
						</div>
						<div class="flex items-center gap-2 text-sm">
							<BoxIcon class="w-4 h-4 text-gray-400" />
							<span class="text-gray-500">
								<span class="font-semibold text-gray-700">
									{placeholderStores.length}
								</span>{" "}
								stores
							</span>
						</div>
					</div>
				</Container>
			</section>

			<main class="py-8 lg:py-10 bg-gray-50 flex-1">
				<Container>
					<div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
						<For each={placeholderStores}>
							{(store) => <MerchantStoreCard store={store} />}
						</For>
						<CreateStoreCard />
					</div>
				</Container>
			</main>

			<Footer variant="simple" />
		</>
	);
};
