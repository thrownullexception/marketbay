import { clsx } from "clsx";
import { SearchIcon } from "lucide-solid";
import { For } from "solid-js";

const TABS = [
	{ label: "All Orders", value: "all" },
	{ label: "Active", value: "active" },
	{ label: "Delivered", value: "delivered" },
	{ label: "Cancelled", value: "cancelled" },
] as const;

export type OrderFilterTab = (typeof TABS)[number]["value"];

export const OrderFilters = (props: {
	activeTab: OrderFilterTab;
	onTabChange: (tab: OrderFilterTab) => void;
}) => {
	return (
		<div class="bg-white rounded-2xl border border-gray-100 overflow-hidden">
			<div class="px-5 py-4 flex flex-col sm:flex-row sm:items-center gap-4">
				<div class="flex items-center gap-1 overflow-x-auto scrollbar-hide">
					<For each={TABS}>
						{(tab) => (
							<button
								type="button"
								onClick={() => props.onTabChange(tab.value)}
								class={clsx(
									"px-4 py-2 text-sm font-medium rounded-lg transition whitespace-nowrap",
									{
										"bg-brand-600 text-white":
											props.activeTab === tab.value,
										"text-gray-500 hover:text-gray-700 hover:bg-gray-50":
											props.activeTab !== tab.value,
									},
								)}
							>
								{tab.label}
							</button>
						)}
					</For>
				</div>
				<div class="sm:ml-auto relative">
					<input
						type="text"
						placeholder="Search orders..."
						class="w-full sm:w-64 pl-9 pr-4 py-2 rounded-xl border border-gray-200 bg-gray-50 text-sm focus:outline-none focus:ring-2 focus:ring-brand-400 focus:border-transparent transition"
					/>
					<SearchIcon class="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
				</div>
			</div>
		</div>
	);
};
