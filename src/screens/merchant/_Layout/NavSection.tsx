import { Link, type LinkOptions, linkOptions } from "@tanstack/solid-router";
import {
	BanknoteIcon,
	LayoutGrid,
	type LucideIcon,
	MessageSquareMoreIcon,
	SettingsIcon,
	ShoppingCartIcon,
	SlidersHorizontalIcon,
	StarIcon,
	TagIcon,
} from "lucide-solid";

const merchantSidebarPrimaryItems = (storeId: string): NavLinkItemProps[] => [
	{
		label: "Dashboard",
		Icon: LayoutGrid,
		exact: true,
		link: linkOptions({
			to: "/merchant/$storeId",
			params: { storeId },
		}),
	},
	{
		label: "Orders",
		Icon: ShoppingCartIcon,
		badge: { value: "8" },
		link: linkOptions({
			to: "/merchant/$storeId/orders",
			params: { storeId },
		}),
	},
	{
		label: "Products",
		Icon: TagIcon,
		badge: { value: "342" },
		link: linkOptions({
			to: "/merchant/$storeId/products",
			params: { storeId },
		}),
	},
	{
		label: "Messages",
		Icon: MessageSquareMoreIcon,
		badge: { value: "6" },
		link: linkOptions({
			to: "/merchant/$storeId/messages",
			params: { storeId },
		}),
	},
	{
		label: "Analytics",
		Icon: SlidersHorizontalIcon,
		link: linkOptions({
			to: "/merchant/$storeId/analytics",
			params: { storeId },
		}),
	},
	{
		label: "Promotions",
		Icon: TagIcon,
		link: linkOptions({
			to: "/merchant/$storeId/promotions",
			params: { storeId },
		}),
	},
	{
		label: "Reviews",
		Icon: StarIcon,
		link: linkOptions({
			to: "/merchant/$storeId/reviews",
			params: { storeId },
		}),
	},
];

const merchantSidebarSecondaryItems = (storeId: string): NavLinkItemProps[] => [
	{
		label: "Payouts",
		Icon: BanknoteIcon,
		link: linkOptions({
			to: "/merchant/$storeId/payouts",
			params: { storeId },
		}),
	},
	{
		label: "Store Settings",
		Icon: SettingsIcon,
		link: linkOptions({
			to: "/merchant/$storeId/settings",
			params: { storeId },
		}),
	},
];

type NavLinkItemProps = {
	label: string;
	Icon: LucideIcon;
	link: LinkOptions;
	exact?: boolean;
	badge?: { value: string };
};

const NavLinkItem = (props: NavLinkItemProps) => {
	return (
		<Link
			to={props.link.to}
			params={props.link.params}
			activeOptions={{ exact: props.exact ?? false }}
			class="sidebar-link flex items-center gap-3 px-5 py-2.5 text-sm font-medium transition hover:bg-gray-50"
			activeProps={{
				class: "text-brand-600 border-r-2 bg-brand-50 border-brand-600",
			}}
			inactiveProps={{ class: "text-gray-600" }}
		>
			<props.Icon class="w-4 h-4 shrink-0" />
			{props.label}
			{props.badge && (
				<span class="ml-auto px-1.5 py-0.5 text-[10px] font-bold rounded-full bg-gray-100 text-gray-500">
					{props.badge.value}
				</span>
			)}
		</Link>
	);
};

export const NavSection = (props: { storeId: string }) => {
	return (
		<nav class="py-2">
			{merchantSidebarPrimaryItems(props.storeId).map((item) => (
				<NavLinkItem {...item} />
			))}
			<hr class="my-2 border-gray-100" />
			{merchantSidebarSecondaryItems(props.storeId).map((item) => (
				<NavLinkItem {...item} />
			))}
		</nav>
	);
};
