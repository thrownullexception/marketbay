import clsx from "clsx";
import { sluggify } from "@/shared/utils/strings";
import { useFieldContext } from "@/ui/form/context";
import { FormInput, type FormInputProps, useFieldHasError } from "./input-form";

export const InputTextarea = (
	props: {
		placeholder: string;
	} & FormInputProps,
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
			<textarea
				id={sluggify(props.label)}
				rows="3"
				onInput={(e) => field().handleChange(e.target.value)}
				onBlur={() => field().handleBlur()}
				placeholder={props.placeholder}
				class={clsx(
					"w-full px-4 py-2.5 rounded-xl border text-sm focus:outline-none focus:ring-2 focus:border-transparent transition resize-none",
					hasError() ? "border-red-400" : "border-gray-200",
					hasError() ? "focus:ring-red-400" : "focus:ring-brand-400",
				)}
			>
				{field().state.value}
			</textarea>
			{/* TODO <span class="text-xs text-gray-400">0 / 500</span> */}
		</FormInput>
	);
};
