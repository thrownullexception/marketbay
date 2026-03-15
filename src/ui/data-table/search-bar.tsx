import { SearchIcon } from "lucide-solid";
import { For } from "solid-js";
import { SimpleSelect } from "@/ui/input-select";
import { SimpleInputText } from "@/ui/input-text";

export type TableFilterOption = {
	label: string;
	options: { label: string; value: string }[];
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
		
			/>
			<div class="flex items-center gap-2 shrink-0">
				<For each={props.filters ?? []}>
					{(filter) => <SimpleSelect options={filter.options} placeholder="" />}
				</For>
			</div>
		</div>
	);
};
