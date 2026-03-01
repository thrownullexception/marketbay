import type { LucideIcon } from "lucide-solid";
import { sluggify } from "@/utils/strings";
import { BaseInput, type BaseInputProps } from "./input-shared";

export const InputText = (
	props: {
		placeholder: string;
		Icon?: LucideIcon;
	} & BaseInputProps,
) => {
	return (
		<BaseInput
			label={props.label}
			required={props.required}
			labelLink={props.labelLink}
			description={props.description}
		>
			<div class="relative">
				{props.Icon && (
					<props.Icon class="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
				)}
				<input
					id={sluggify(props.label)}
					type="text"
					placeholder={props.placeholder}
					class={`w-full ${props.Icon ? "pl-10 pr-4" : "px-4"} py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-brand-400 focus:border-transparent transition`}
				/>
			</div>
		</BaseInput>
	);
};
