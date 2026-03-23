import { PackageIcon, ShoppingBagIcon, TruckIcon } from "lucide-solid";
import { createSignal, For, Show } from "solid-js";
import { OrderStatus } from "@/schemas/order";
import { AdminHeader } from "@/ui/admin-header";
import { Grid3 } from "@/ui/grid";
import { Pagination } from "@/ui/pagination";
import { StatCard } from "@/ui/stat-card";
import { ActiveOrderCard } from "./ActiveOrderCard";
import { OrderFilters, type OrderFilterTab } from "./OrderFilters";
import { PastOrderRow } from "./PastOrderRow";
import type { Order } from "./types";

const ACTIVE_ORDERS: Order[] = [
	{
		id: "MB-30247",
		status: OrderStatus.InTransit,
		storeName: "TechVault",
		storeSlug: "techvault",
		storeInitials: "TV",
		storeGradient: "from-blue-500 to-indigo-600",
		items: [
			{
				name: "Pro Studio Wireless Headphones",
				productSlug: "pro-studio-wireless-headphones",
				quantity: 1,
				price: "$59.99",
			},
		],
		total: "$59.99",
		date: "Feb 24, 2026",
		estimatedDelivery: "Feb 28, 2026",
	},
	{
		id: "MB-30189",
		status: OrderStatus.Processing,
		storeName: "GreenNest",
		storeSlug: "greennest",
		storeInitials: "GN",
		storeGradient: "from-emerald-500 to-teal-600",
		items: [
			{
				name: "Vitamin C Serum + Retinol Cream Bundle",
				productSlug: "vitamin-c-serum",
				quantity: 1,
				price: "$54.98",
			},
		],
		total: "$54.98",
		date: "Feb 22, 2026",
		estimatedDelivery: "Mar 2, 2026",
	},
];

const PAST_ORDERS: Order[] = [
	{
		id: "MB-30102",
		status: OrderStatus.Delivered,
		storeName: "TechVault",
		storeSlug: "techvault",
		storeInitials: "TV",
		storeGradient: "from-blue-500 to-indigo-600",
		items: [
			{
				name: 'Ultra HD 27" Monitor — 4K IPS Display',
				productSlug: "ultra-hd-27-monitor",
				quantity: 1,
				price: "$299.00",
			},
		],
		total: "$299.00",
		date: "Feb 18, 2026",
	},
	{
		id: "MB-29847",
		status: OrderStatus.Delivered,
		storeName: "FitGear Pro",
		storeSlug: "fitgear-pro",
		storeInitials: "FG",
		storeGradient: "from-cyan-500 to-sky-600",
		items: [
			{
				name: "Resistance Band Set — Pro Series",
				productSlug: "resistance-band-set",
				quantity: 1,
				price: "$39.99",
			},
		],
		total: "$39.99",
		date: "Feb 10, 2026",
	},
	{
		id: "MB-29650",
		status: OrderStatus.Delivered,
		storeName: "HomeHaven",
		storeSlug: "homehaven",
		storeInitials: "HH",
		storeGradient: "from-amber-500 to-yellow-600",
		items: [
			{
				name: "Smart LED Floor Lamp — Dimmable",
				productSlug: "smart-led-floor-lamp",
				quantity: 1,
				price: "$54.99",
			},
		],
		total: "$54.99",
		date: "Feb 3, 2026",
	},
	{
		id: "MB-29320",
		status: OrderStatus.Delivered,
		storeName: "StyleHouse",
		storeSlug: "stylehouse",
		storeInitials: "SH",
		storeGradient: "from-rose-500 to-pink-600",
		items: [
			{
				name: "Cashmere Blend Oversize Sweater",
				productSlug: "cashmere-blend-sweater",
				quantity: 1,
				price: "$59.00",
			},
		],
		total: "$59.00",
		date: "Jan 28, 2026",
	},
	{
		id: "MB-29105",
		status: OrderStatus.Cancelled,
		storeName: "TechVault",
		storeSlug: "techvault",
		storeInitials: "TV",
		storeGradient: "from-blue-500 to-indigo-600",
		items: [
			{
				name: "USB-C Hub — 7-in-1 Adapter",
				productSlug: "usb-c-hub",
				quantity: 1,
				price: "$34.99",
			},
		],
		total: "$34.99",
		date: "Jan 20, 2026",
	},
	{
		id: "MB-28930",
		status: OrderStatus.Refunded,
		storeName: "BookNook",
		storeSlug: "booknook",
		storeInitials: "BN",
		storeGradient: "from-violet-500 to-purple-600",
		items: [
			{
				name: "The Art of Focus — 2026 Bestseller",
				productSlug: "art-of-focus",
				quantity: 1,
				price: "$16.99",
			},
			{
				name: "Mindful Productivity Journal",
				productSlug: "mindful-productivity-journal",
				quantity: 1,
				price: "$24.99",
			},
		],
		total: "$41.98",
		date: "Jan 15, 2026",
	},
];

export const OrdersScreen = () => {
	const [activeTab, setActiveTab] = createSignal<OrderFilterTab>("all");

	const filteredPastOrders = () => {
		const tab = activeTab();
		if (tab === "all") return PAST_ORDERS;
		if (tab === "active") return [];
		if (tab === "delivered")
			return PAST_ORDERS.filter((o) => o.status === "delivered");
		if (tab === "cancelled")
			return PAST_ORDERS.filter(
				(o) => o.status === "cancelled" || o.status === "refunded",
			);
		return PAST_ORDERS;
	};

	const showActiveSection = () =>
		activeTab() === "all" || activeTab() === "active";

	return (
		<>
			<AdminHeader
				title="My Orders"
				description="Track, manage, and reorder from your order history"
			/>

			<div class="space-y-6">
				<Grid3>
					<StatCard
						Icon={ShoppingBagIcon}
						value={12}
						label="Total Orders"
						color="brand"
					/>
					<StatCard
						Icon={TruckIcon}
						value={2}
						label="In Progress"
						color="amber"
					/>
					<StatCard
						Icon={ShoppingBagIcon}
						value={12}
						label="Total Orders"
						color="brand"
					/>
				</Grid3>

				<OrderFilters activeTab={activeTab()} onTabChange={setActiveTab} />

				{/* Active Orders */}
				<Show when={showActiveSection() && ACTIVE_ORDERS.length > 0}>
					<div class="bg-white rounded-2xl border border-gray-100 overflow-hidden">
						<div class="px-6 py-4 border-b border-gray-50 flex items-center justify-between">
							<div class="flex items-center gap-3">
								<div class="w-8 h-8 rounded-lg bg-amber-50 flex items-center justify-center">
									<TruckIcon class="w-4 h-4 text-amber-600" />
								</div>
								<h2 class="text-base font-bold text-gray-900">Active Orders</h2>
							</div>
							<span class="text-xs font-semibold text-gray-400">
								{ACTIVE_ORDERS.length}{" "}
								{ACTIVE_ORDERS.length === 1 ? "order" : "orders"}
							</span>
						</div>
						<For each={ACTIVE_ORDERS}>
							{(order) => <ActiveOrderCard order={order} />}
						</For>
					</div>
				</Show>

				{/* Past Orders */}
				<Show
					when={filteredPastOrders().length > 0}
					fallback={
						<Show when={activeTab() !== "all" && activeTab() !== "active"}>
							<div class="bg-white rounded-2xl border border-gray-100 p-12 text-center">
								<div class="w-16 h-16 rounded-2xl bg-gray-50 flex items-center justify-center mx-auto mb-4">
									<PackageIcon class="w-8 h-8 text-gray-300" />
								</div>
								<h3 class="text-base font-semibold text-gray-900">
									No orders found
								</h3>
								<p class="text-sm text-gray-500 mt-1">
									No orders match the selected filter.
								</p>
							</div>
						</Show>
					}
				>
					<div class="bg-white rounded-2xl border border-gray-100 overflow-hidden">
						<div class="px-6 py-4 border-b border-gray-50 flex items-center justify-between">
							<h2 class="text-base font-bold text-gray-900">
								{activeTab() === "all" ? "Order History" : "Results"}
							</h2>
							<span class="text-xs font-semibold text-gray-400">
								{filteredPastOrders().length}{" "}
								{filteredPastOrders().length === 1 ? "order" : "orders"}
							</span>
						</div>
						<div class="divide-y divide-gray-50">
							<For each={filteredPastOrders()}>
								{(order) => <PastOrderRow order={order} />}
							</For>
						</div>
					</div>
				</Show>

				<Pagination />
			</div>
		</>
	);
};
