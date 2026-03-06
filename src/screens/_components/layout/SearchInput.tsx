import { SearchIcon } from "lucide-solid";

type SearchInputProps = {
	placeholder: string;
	class?: string;
};

export const SearchInput = (props: SearchInputProps) => (
	<div class={`relative ${props.class ?? ""}`}>
		<input
			type="search"
			placeholder={props.placeholder}
			class="w-full pl-10 pr-4 py-2.5 rounded-full border border-gray-200 bg-gray-50 text-sm focus:outline-none focus:ring-2 focus:ring-brand-400 focus:border-transparent transition"
		/>
		<SearchIcon class="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
	</div>
);
