import { linkOptions } from "@tanstack/solid-router";
import {
	BanknoteIcon,
	LayoutGrid,
	MessageSquareMoreIcon,
	SettingsIcon,
	ShoppingCartIcon,
	SlidersHorizontalIcon,
	StarIcon,
	TagIcon,
} from "lucide-solid";
import { NavItems } from "@/ui/layout/nav-items";

export const NavSection = () => {
	return (
		<NavItems
			items={[
				[
					{
						label: "Dashboard",
						Icon: LayoutGrid,
						exact: true,
						link: linkOptions({
							to: "/merchant/dashboard",
						}),
					},
					{
						label: "Orders",
						Icon: ShoppingCartIcon,
						badge: { value: "8" },
						link: linkOptions({
							to: "/merchant/orders",
						}),
					},
					{
						label: "Products",
						Icon: TagIcon,
						badge: { value: "342" },
						link: linkOptions({
							to: "/merchant/products",
						}),
					},
					{
						label: "Messages",
						Icon: MessageSquareMoreIcon,
						badge: { value: "6" },
						link: linkOptions({
							to: "/merchant/messages",
						}),
					},
					{
						label: "Analytics",
						Icon: SlidersHorizontalIcon,
						link: linkOptions({
							to: "/merchant/analytics",
						}),
					},
					{
						label: "Promotions",
						Icon: TagIcon,
						link: linkOptions({
							to: "/merchant/promotions",
						}),
					},
					{
						label: "Reviews",
						Icon: StarIcon,
						link: linkOptions({
							to: "/merchant/reviews",
						}),
					},
				],
				[
					{
						label: "Payouts",
						Icon: BanknoteIcon,
						link: linkOptions({
							to: "/merchant/payouts",
						}),
					},
					{
						label: "Store Settings",
						Icon: SettingsIcon,
						link: linkOptions({
							to: "/merchant/settings",
						}),
					},
				],
			]}
		/>
	);
};
