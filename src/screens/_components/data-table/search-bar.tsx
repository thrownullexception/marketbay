import clsx from "clsx";
import { SearchIcon } from "lucide-solid";
import { For } from "solid-js";
import { SimpleInputText } from "@/ui/input-text";

export type TableFilterOption = {
	label: string;
	options: string[];
	hiddenOnMobile?: boolean;
};

export const DataTableSearchBar = (props: {
	placeholder?: string;
	filters?: TableFilterOption[];
}) => {
	return (
		<div class="px-5 py-3.5 flex flex-col sm:flex-row items-start sm:items-center gap-3">
			<SimpleInputText
				placeholder={props.placeholder ?? "Search..."}
				Icon={SearchIcon}
				label="Search"
			/>
			<div class="flex items-center gap-2 shrink-0">
				<For each={props.filters ?? []}>
					{(filter) => (
						<select
							class={clsx(
								"px-3 py-2 rounded-xl border border-gray-200 bg-white text-sm text-gray-600 focus:outline-none focus:ring-2 focus:ring-brand-400 focus:border-transparent transition",
								filter.hiddenOnMobile && "hidden sm:block",
							)}
						>
							<For each={filter.options}>
								{(opt, i) => <option selected={i() === 0}>{opt}</option>}
							</For>
						</select>
					)}
				</For>
			</div>
		</div>
	);
};
