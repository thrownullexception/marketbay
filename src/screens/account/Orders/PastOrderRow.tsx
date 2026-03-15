import { Link } from "@tanstack/solid-router";
import { For } from "solid-js";
import { OrderStatusConfig } from "@/screens/merchant/orders/config";
import { StatusBadge } from "@/ui/status-badge";
import type { Order } from "./types";

export const PastOrderRow = (props: { order: Order }) => {
	return (
		<div class="px-5 py-4 flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4">
			<div class="flex items-center gap-3 flex-1 min-w-0">
				<div
					class={`w-12 h-12 rounded-xl bg-linear-to-br ${props.order.storeGradient} flex items-center justify-center shrink-0`}
				>
					<span class="text-white text-xs font-bold">
						{props.order.storeInitials}
					</span>
				</div>
				<div class="flex-1 min-w-0">
					<p class="text-sm font-medium text-gray-900 truncate">
						<For each={props.order.items}>
							{(item, i) => (
								<>
									{i() > 0 && ", "}
									{item.name}
								</>
							)}
						</For>
					</p>
					<div class="flex items-center gap-1.5 mt-0.5 flex-wrap">
						<Link
							to="/store/$storeSlug"
							params={{ storeSlug: props.order.storeSlug }}
							class="text-xs text-gray-400 hover:text-brand-600 transition"
						>
							{props.order.storeName}
						</Link>
						<span class="text-xs text-gray-300">&bull;</span>
						<span class="text-xs text-gray-400">{props.order.date}</span>
						<span class="text-xs text-gray-300">&bull;</span>
						<span class="text-xs text-gray-400">
							{props.order.items.length}{" "}
							{props.order.items.length === 1 ? "item" : "items"}
						</span>
					</div>
				</div>
			</div>
			<div class="flex items-center gap-3 sm:gap-4 shrink-0 ml-15 sm:ml-0">
				<StatusBadge {...OrderStatusConfig[props.order.status]} />
				<span class="text-sm font-semibold text-gray-900 hidden sm:inline">
					{props.order.total}
				</span>
			</div>
		</div>
	);
};
