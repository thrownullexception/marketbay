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
import { NavItems } from "@/screens/_components/layout/nav-items";

export const NavSection = (props: { storeId: string }) => {
	const storeId = props.storeId;
	return (
		<NavItems
			items={[
				[
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
				],
				[
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
				],
			]}
		/>
	);
};
