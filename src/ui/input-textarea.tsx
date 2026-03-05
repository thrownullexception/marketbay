import clsx from "clsx";
import { useFieldContext } from "@/screens/_components/form/context";
import { sluggify } from "@/utils/strings";
import {
	BaseInput,
	type BaseInputProps,
	useFieldHasError,
} from "./input-shared";

export const InputTextarea = (
	props: {
		placeholder: string;
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
			<textarea
				id={sluggify(props.label)}
				rows="3"
				onChange={(e) => field().handleChange(e.target.value)}
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
		</BaseInput>
	);
};
