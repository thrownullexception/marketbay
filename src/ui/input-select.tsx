import clsx from "clsx";
import { For } from "solid-js";
import { useFieldContext } from "@/screens/_components/form/context";
import { sluggify } from "@/utils/strings";
import {
	BaseInput,
	type BaseInputProps,
	useFieldHasError,
} from "./input-shared";

export const InputSelect = (
	props: {
		placeholder: string;
		options: { label: string; value: string }[];
	} & BaseInputProps,
) => {
	const field = useFieldContext<string>();
	const hasError = useFieldHasError<string>();
	return (
		<BaseInput
			label={props.label}
			required={props.required}
			labelLink={props.labelLink}
			description={props.description}
		>
			<select
				id={sluggify(props.label)}
				class={clsx(
					"w-full px-4 py-2.5 rounded-xl border text-sm text-gray-600 focus:outline-none focus:ring-2 focus:border-transparent transition cursor-pointer bg-white appearance-none bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHZpZXdCb3g9IjAgMCAyMCAyMCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNNiA4bDQgNCA0LTQiIHN0cm9rZT0iIzlDQTNCNSIgc3Ryb2tlLXdpZHRoPSIxLjUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPjwvc3ZnPg==')] bg-no-repeat bg-position-[right_12px_center]",
					hasError() ? "border-red-400" : "border-gray-200",
					hasError() ? "focus:ring-red-400" : "focus:ring-brand-400",
				)}
				value={field().state.value}
				onChange={(e) => field().handleChange(e.target.value)}
				onBlur={() => field().handleBlur()}
			>
				<option value="" disabled selected={!field().state.value}>
					{props.placeholder}
				</option>
				<For each={props.options}>
					{(option) => <option value={option.value}>{option.label}</option>}
				</For>
			</select>
		</BaseInput>
	);
};

export const SimpleSelect = (props: {
	options: { label: string; value: string }[];
}) => {
	return (
		<select class="text-sm border border-gray-200 rounded-xl px-4 py-2.5 bg-white text-gray-600 focus:outline-none focus:ring-2 focus:ring-brand-400 focus:border-transparent cursor-pointer shrink-0">
			<For each={props.options}>
				{(option) => <option value={option.value}>{option.label}</option>}
			</For>
		</select>
	);
};

// <select class="text-sm border border-gray-200 rounded-xl px-4 py-2.5 bg-white text-gray-600 focus:outline-none focus:ring-2 focus:ring-brand-400 focus:border-transparent cursor-pointer shrink-0">
