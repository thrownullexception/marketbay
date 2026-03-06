import { Link } from "@tanstack/solid-router";
import { For } from "solid-js";
import { StatusBadge } from "@/screens/_components/status-badge";
import { OrderStatusConfig } from "@/screens/merchant/orders/config";
import { TrackingProgress } from "./TrackingProgress";
import type { Order } from "./types";

export const ActiveOrderCard = (props: { order: Order }) => {
	return (
		<div class="p-5 border-b border-gray-50 last:border-b-0">
			<div class="flex flex-col sm:flex-row sm:items-center gap-4">
				<div class="flex items-center gap-3 flex-1 min-w-0">
					<div
						class={`w-14 h-14 rounded-xl bg-linear-to-br ${props.order.storeGradient} flex items-center justify-center shrink-0`}
					>
						<span class="text-white text-sm font-bold">
							{props.order.storeInitials}
						</span>
					</div>
					<div class="min-w-0">
						<p class="text-sm font-semibold text-gray-900 truncate">
							<For each={props.order.items}>
								{(item, i) => (
									<>
										{i() > 0 && ", "}
										{item.name}
									</>
								)}
							</For>
						</p>
						<div class="flex items-center gap-2 mt-0.5 flex-wrap">
							<span class="text-xs text-gray-400">Order #{props.order.id}</span>
							<span class="text-gray-200">|</span>
							<Link
								to="/store/$storeSlug"
								params={{ storeSlug: props.order.storeSlug }}
								class="text-xs text-gray-400 hover:text-brand-600 transition"
							>
								{props.order.storeName}
							</Link>
						</div>
					</div>
				</div>
				<div class="flex items-center gap-4 sm:gap-6 shrink-0">
					<StatusBadge {...OrderStatusConfig[props.order.status]} />
					<span class="text-sm font-bold text-gray-900">
						{props.order.total}
					</span>
				</div>
			</div>

			{(props.order.status === "processing" ||
				props.order.status === "shipped" ||
				props.order.status === "in_transit") && (
				<div class="mt-4 ml-0 sm:ml-[68px]">
					<TrackingProgress status={props.order.status} />
					{props.order.estimatedDelivery && (
						<p class="text-xs text-gray-500 mt-2.5">
							Estimated delivery:{" "}
							<span class="font-semibold text-gray-700">
								{props.order.estimatedDelivery}
							</span>
						</p>
					)}
				</div>
			)}
		</div>
	);
};
