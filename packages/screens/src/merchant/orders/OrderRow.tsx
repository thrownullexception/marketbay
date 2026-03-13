import clsx from "clsx";
import { EyeIcon, TruckIcon } from "lucide-solid";
import { Match, Switch } from "solid-js";
import { StatusBadge } from "@/components/status-badge";
import { OrderStatusConfig, PaymentStatusConfig } from "./config";
import type { MerchantOrder } from "./types";

const OrderItemCell = (props: { item: MerchantOrder["item"] }) => {
	return (
		<Switch>
			<Match when={props.item.kind === "single" && props.item}>
				{(item) => (
					<div class="flex items-center gap-2">
						<div
							class={clsx(
								"w-8 h-8 rounded-lg flex items-center justify-center shrink-0",
								item().iconBg,
							)}
						>
							{/* <item.Icon class={clsx("w-4 h-4", item().iconColor)} /> */}
						</div>
						<div class="min-w-0">
							<p class="text-xs text-gray-700 truncate max-w-[140px]">
								{item().name}
							</p>
							<p class="text-[10px] text-gray-400">{item().detail}</p>
						</div>
					</div>
				)}
			</Match>
			<Match when={props.item.kind === "multiple" && props.item}>
				{(item) => (
					<div class="flex items-center gap-2">
						<div class="flex -space-x-1.5">
							<div class="w-8 h-8 rounded-lg bg-linear-to-br from-blue-50 to-indigo-100 border-2 border-white" />
							<div class="w-8 h-8 rounded-lg bg-linear-to-br from-violet-50 to-purple-100 border-2 border-white" />
						</div>
						<div class="min-w-0">
							<p class="text-xs text-gray-700">{item().count} items</p>
							<p class="text-[10px] text-gray-400">{item().summary}</p>
						</div>
					</div>
				)}
			</Match>
		</Switch>
	);
};

const OrderRowActions = (props: { status: MerchantOrder["status"] }) => {
	return (
		<div class="flex items-center justify-end gap-1">
			<Switch>
				<Match when={props.status === "pending"}>
					<button
						type="button"
						class="px-3 py-1.5 bg-brand-600 hover:bg-brand-700 text-white text-xs font-semibold rounded-lg transition"
					>
						Process
					</button>
				</Match>
				<Match when={props.status === "processing"}>
					<button
						type="button"
						class="px-3 py-1.5 bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold rounded-lg transition flex items-center gap-1"
					>
						<TruckIcon class="w-3.5 h-3.5" />
						Ship
					</button>
				</Match>
				<Match when={props.status === "shipped"}>
					<button
						type="button"
						class="px-3 py-1.5 bg-gray-100 hover:bg-gray-200 text-gray-700 text-xs font-semibold rounded-lg transition"
					>
						Track
					</button>
				</Match>
				<Match when={props.status === "return"}>
					<button
						type="button"
						class="px-3 py-1.5 bg-red-500 hover:bg-red-600 text-white text-xs font-semibold rounded-lg transition"
					>
						Review
					</button>
				</Match>
			</Switch>
			<button
				type="button"
				class="p-1.5 rounded-lg text-gray-400 hover:bg-gray-100 hover:text-gray-600 transition"
				title="View Details"
			>
				<EyeIcon class="w-4 h-4" />
			</button>
		</div>
	);
};

export const OrderRow = (props: { order: MerchantOrder }) => {
	const { order } = props;
	const rowBg =
		order.status === "pending"
			? "bg-amber-50/30"
			: order.status === "return"
				? "bg-red-50/30"
				: "";

	return (
		<tr class={clsx("hover:bg-gray-50/50 transition", rowBg)}>
			<td class="px-5 py-3.5">
				<input
					type="checkbox"
					class="w-4 h-4 rounded border-gray-300 text-brand-600 focus:ring-brand-500"
				/>
			</td>
			<td class="px-3 py-3.5">
				<span class="font-semibold text-gray-900">#{order.id}</span>
				<p class="text-[11px] text-gray-400 mt-0.5">{order.date}</p>
			</td>
			<td class="px-3 py-3.5">
				<div class="flex items-center gap-2.5">
					<div
						class={clsx(
							"w-8 h-8 rounded-full flex items-center justify-center text-[10px] font-bold shrink-0",
							order.customer.avatarBg,
							order.customer.avatarText,
						)}
					>
						{order.customer.initials}
					</div>
					<div class="min-w-0">
						<p class="text-sm font-medium text-gray-900 truncate">
							{order.customer.name}
						</p>
						<p class="text-[11px] text-gray-400 truncate">
							{order.customer.email}
						</p>
					</div>
				</div>
			</td>
			<td class="px-3 py-3.5 hidden md:table-cell">
				<OrderItemCell item={order.item} />
			</td>
			<td class="px-3 py-3.5 font-semibold text-gray-900">{order.total}</td>
			<td class="px-3 py-3.5">
				<StatusBadge {...OrderStatusConfig[order.status]} />
			</td>
			<td class="px-3 py-3.5 hidden lg:table-cell">
				<StatusBadge {...PaymentStatusConfig[order.payment]} />
			</td>
			<td class="px-3 py-3.5 text-right">
				<OrderRowActions status={order.status} />
			</td>
		</tr>
	);
};
