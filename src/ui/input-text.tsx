import type { LucideIcon } from "lucide-solid";
import { sluggify } from "@/utils/strings";

export const InputText = (props: {
	label: string;
	placeholder: string;
	description?: string;
	required?: boolean;
	Icon?: LucideIcon;
}) => {
	return (
		<div>
			<label
				for={sluggify(props.label)}
				class="block text-sm font-medium text-gray-700 mb-1.5"
			>
				{props.label} {props.required && <span class="text-red-400">*</span>}
			</label>
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
			{props.description && (
				<p class="text-xs text-gray-400 mt-1.5">{props.description}</p>
			)}
		</div>
	);
};
