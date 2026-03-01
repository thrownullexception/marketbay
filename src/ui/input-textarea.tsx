import { sluggify } from "@/utils/strings";
import { BaseInput, type BaseInputProps } from "./input-shared";

export const InputTextarea = (
	props: {
		placeholder: string;
	} & BaseInputProps,
) => {
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
				placeholder={props.placeholder}
				class="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-brand-400 focus:border-transparent transition resize-none"
			></textarea>
			{/* TODO <span class="text-xs text-gray-400">0 / 500</span> */}
		</BaseInput>
	);
};
