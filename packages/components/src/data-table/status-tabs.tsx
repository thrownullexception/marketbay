import clsx from "clsx";
import { For } from "solid-js";

export type DataTableTab = {
	label: string;
	value: string;
	count?: number;
	countColor?: string;
};

export const DataTableStatusTabs = (props: {
	tabs: DataTableTab[];
	activeTab: string;
	onTabChange: (value: string) => void;
}) => {
	return (
		<div class="px-5 flex items-center gap-1 border-b border-gray-100 overflow-x-auto scrollbar-hide">
			<For each={props.tabs}>
				{(tab) => (
					<button
						type="button"
						onClick={() => props.onTabChange(tab.value)}
						class={clsx(
							"whitespace-nowrap px-3.5 py-2.5 text-sm border-b-2 -mb-px transition",
							props.activeTab === tab.value
								? "font-semibold text-brand-600 border-brand-600"
								: "font-medium text-gray-400 border-transparent hover:text-gray-600",
						)}
					>
						{tab.label}
						{tab.count !== undefined && (
							<span
								class={clsx(
									"ml-1 text-[11px] font-bold",
									props.activeTab === tab.value
										? "text-brand-400"
										: (tab.countColor ?? "text-gray-400"),
								)}
							>
								{tab.count}
							</span>
						)}
					</button>
				)}
			</For>
		</div>
	);
};
