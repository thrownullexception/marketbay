import clsx from "clsx";
import { For, Show } from "solid-js";

export type BulkAction = {
	label: string;
	onClick?: () => void;
	danger?: boolean;
};

export const DataTableBulkBar = (props: {
	actions: BulkAction[];
	sortOptions?: string[];
}) => {
	return (
		<div class="px-5 py-2.5 bg-gray-50/80 border-b border-gray-100 flex items-center justify-between text-xs">
			<div class="flex items-center gap-3">
				<label class="flex items-center gap-2 cursor-pointer">
					<input
						type="checkbox"
						class="w-4 h-4 rounded border-gray-300 text-brand-600 focus:ring-brand-500"
					/>
					<span class="text-gray-500 font-medium">Select all</span>
				</label>
				<span class="text-gray-300">|</span>
				<For each={props.actions}>
					{(action) => (
						<button
							type="button"
							onClick={action.onClick}
							class={clsx(
								"font-medium transition",
								action.danger
									? "text-gray-500 hover:text-red-600"
									: "text-gray-500 hover:text-gray-700",
							)}
						>
							{action.label}
						</button>
					)}
				</For>
			</div>
			<Show when={props.sortOptions}>
				<div class="hidden sm:flex items-center gap-2 text-gray-400">
					<span>Sort by:</span>
					<select class="bg-transparent text-gray-600 font-medium focus:outline-none cursor-pointer">
						<For each={props.sortOptions}>
							{(opt) => <option>{opt}</option>}
						</For>
					</select>
				</div>
			</Show>
		</div>
	);
};
