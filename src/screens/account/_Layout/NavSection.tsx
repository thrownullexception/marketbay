import { linkOptions } from "@tanstack/solid-router";
import {
	BanknoteIcon,
	BoxIcon,
	CreditCardIcon,
	HeartIcon,
	LayoutGrid,
	MapPinIcon,
	StarIcon,
	Store,
} from "lucide-solid";
import { NavItems, type NavLinkItemProps } from "@/ui/layout/nav-items";

const merchantSidebarPrimaryItems: NavLinkItemProps[] = [
	{
		label: "Dashboard",
		Icon: LayoutGrid,
		exact: true,
		link: linkOptions({
			to: "/account",
		}),
	},
	{
		label: "My Orders",
		Icon: BoxIcon,
		badge: { value: "8" },
		link: linkOptions({
			to: "/account/orders",
		}),
	},
	{
		label: "Wishlist",
		Icon: HeartIcon,
		badge: { value: "8" },
		link: linkOptions({
			to: "/account/wishlist",
		}),
	},
	{
		label: "Following",
		Icon: Store,
		link: linkOptions({
			to: "/account/following",
		}),
	},
	{
		label: "Reviews",
		Icon: StarIcon,
		link: linkOptions({
			to: "/account/reviews",
		}),
	},
];

const merchantSidebarSecondaryItems: NavLinkItemProps[] = [
	{
		label: "Account Settings",
		Icon: BanknoteIcon,
		link: linkOptions({
			to: "/account/settings",
		}),
	},
	{
		label: "Payment Methods",
		Icon: CreditCardIcon,
		link: linkOptions({
			to: "/account/payments",
		}),
	},
	{
		label: "Addresses",
		Icon: MapPinIcon,
		link: linkOptions({
			to: "/account/addresses",
		}),
	},
];

export const NavSection = () => {
	return (
		<NavItems
			items={[merchantSidebarPrimaryItems, merchantSidebarSecondaryItems]}
		/>
	);
};
