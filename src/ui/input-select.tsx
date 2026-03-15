import clsx from "clsx";
import { createSignal, For, type JSX } from "solid-js";
import { useFieldContext } from "@/ui/form/context";
import { sluggify } from "@/utils/strings";
import { FormInput, type FormInputProps, useFieldHasError } from "./input-form";

type FormInputSelectProps = {
	placeholder?: string;
	options: { label: string; value: string }[];
	id?: string;
};

export const FormInputSelect = (
	props: FormInputSelectProps & FormInputProps,
) => {
	const field = useFieldContext<string>();
	const hasError = useFieldHasError<string>();
	return (
		<FormInput
			label={props.label}
			required={props.required}
			labelLink={props.labelLink}
			description={props.description}
		>
			<SelectPresentation
				{...props}
				value={field().state.value}
				onChange={(e) => field().handleChange(e.target.value)}
				hasError={hasError()}
				id={sluggify(props.label)}
			/>
		</FormInput>
	);
};

const SelectPresentation = (
	props: FormInputSelectProps & {
		value: string;
		onChange: JSX.ChangeEventHandlerUnion<HTMLSelectElement, Event>;
		hasError: boolean;
	},
) => {
	return (
		<select
			id={props.id}
			class={clsx(
				"w-full px-4 py-2.5 rounded-xl border text-sm text-gray-600 focus:outline-none focus:ring-2 focus:border-transparent transition cursor-pointer bg-white appearance-none bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHZpZXdCb3g9IjAgMCAyMCAyMCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNNiA4bDQgNCA0LTQiIHN0cm9rZT0iIzlDQTNCNSIgc3Ryb2tlLXdpZHRoPSIxLjUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPjwvc3ZnPg==')] bg-no-repeat bg-position-[right_12px_center]",
				props.hasError ? "border-red-400" : "border-gray-200",
				props.hasError ? "focus:ring-red-400" : "focus:ring-brand-400",
			)}
			value={props.value}
			onChange={props.onChange}
		>
			<option value="" disabled>
				{props.placeholder}
			</option>
			<For each={props.options}>
				{(option) => <option value={option.value}>{option.label}</option>}
			</For>
		</select>
	);
};

export const SimpleSelect = (props: FormInputSelectProps) => {
	const [value, setValue] = createSignal<string>("");
	return (
		<SelectPresentation
			{...props}
			value={value()}
			onChange={(e) => setValue(e.target.value)}
			hasError={false}
		/>
	);
};
