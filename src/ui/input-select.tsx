import { For } from "solid-js";
import { sluggify } from "@/utils/strings";

export const InputSelect = (props: {
	label: string;
	placeholder: string;
	description?: string;
	required?: boolean;
	options: { label: string; value: string }[];
}) => {
	return (
		<div>
			<label
				for={sluggify(props.label)}
				class="block text-sm font-medium text-gray-700 mb-1.5"
			>
				{props.label} {props.required && <span class="text-red-400">*</span>}
			</label>
			<select
				id={sluggify(props.label)}
				class="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm text-gray-600 focus:outline-none focus:ring-2 focus:ring-brand-400 focus:border-transparent transition cursor-pointer bg-white appearance-none bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHZpZXdCb3g9IjAgMCAyMCAyMCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNNiA4bDQgNCA0LTQiIHN0cm9rZT0iIzlDQTNCNSIgc3Ryb2tlLXdpZHRoPSIxLjUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPjwvc3ZnPg==')] bg-no-repeat bg-[right_12px_center]"
			>
				<option value="" disabled selected>
					{props.placeholder}
				</option>
				<For each={props.options}>
					{(option) => <option value={option.value}>{option.label}</option>}
				</For>
			</select>
			{props.description && (
				<p class="text-xs text-gray-400 mt-1.5">{props.description}</p>
			)}
		</div>
	);
};
