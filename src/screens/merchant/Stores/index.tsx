import { createQuery } from "@tanstack/solid-query";
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
import { CATEGORY_CONFIG } from "@/schemas/category";
import { COLOR_CODES } from "@/schemas/colors";
import type { StoreListItemTransformer } from "@/server/modules/stores/stores/types";
import { getMerchantTreaty } from "@/shared/treaty/merchant.treaty";
import { createTreatyQueryOptions } from "@/shared/treaty/treaty-key";
import { shorten } from "@/shared/utils/numbers";
import { getInitials } from "@/shared/utils/strings";
import { Container } from "@/ui/container";

type StoreRole = "Owner" | "Admin" | "Member";
type StoreStatus = "Active" | "Draft";

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

const MerchantStoreCard = (props: { store: StoreListItemTransformer }) => {
	const s = props.store;
	const { banner, avatar } =
		COLOR_CODES[CATEGORY_CONFIG[props.store.primaryCategoryId].color];

	return (
		<div class="bg-white rounded-2xl border border-gray-100 overflow-hidden transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-gray-100">
			<div class={`h-16 bg-linear-to-r ${banner} relative`}>
				<div class="absolute -bottom-5 left-5">
					<div
						class={`w-12 h-12 rounded-xl bg-linear-to-br ${avatar} flex items-center justify-center text-white text-sm font-bold border-2 border-white shadow-md`}
					>
						{getInitials(props.store.name)}
					</div>
				</div>
			</div>
			<div class="pt-7 px-5 pb-5">
				<div class="flex items-start justify-between gap-2">
					<div class="min-w-0">
						<div class="flex items-center gap-2 flex-wrap">
							<h3 class="font-bold text-gray-900 truncate">{s.name}</h3>
							{props.store.isVerified && (
								<BadgeCheckIcon class="w-4 h-4 text-green-500 shrink-0" />
							)}
						</div>
						<p class="text-xs text-gray-400 mt-0.5">@{s.slug}</p>
					</div>
					<div class="flex flex-col items-end gap-1 shrink-0">
						{/* <RoleBadge role={s.role} />
						<StatusBadge status={s.status} /> */}
					</div>
				</div>
				<p class="text-xs text-gray-500 mt-2">
					{CATEGORY_CONFIG[props.store.primaryCategoryId].label}{" "}
					{props.store.secondaryCategoryId
						? `• ${CATEGORY_CONFIG[props.store.secondaryCategoryId].label}`
						: ""}
				</p>
				<div class="flex items-center gap-4 mt-3 text-xs text-gray-500">
					<span class="flex items-center gap-1">
						<TagIcon class="w-3.5 h-3.5 text-gray-400" />
						{shorten(props.store.productsCount)} products
					</span>
					<span class="flex items-center gap-1">
						<ShoppingCartIcon class="w-3.5 h-3.5 text-gray-400" />
						{shorten(props.store.followersCount)} followers
					</span>
				</div>
				<Link
					to="/merchant/dashboard"
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

export const MerchantStoresScreen = () => {
	const storesResult = createQuery(() =>
		createTreatyQueryOptions(getMerchantTreaty, (t) => t.guest.get()),
	);

	return (
		<>
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
									{storesResult.data?.length}
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
						<For each={storesResult.data}>
							{(store) => <MerchantStoreCard store={store} />}
						</For>
						<CreateStoreCard />
					</div>
				</Container>
			</main>
		</>
	);
};
