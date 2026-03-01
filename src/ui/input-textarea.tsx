import { sluggify } from "@/utils/strings";

export const InputTextarea = (props: {
	label: string;
	placeholder: string;
	description: string;
	required: boolean;
}) => {
	return (
		<div>
			<label
				for={sluggify(props.label)}
				class="block text-sm font-medium text-gray-700 mb-1.5"
			>
				{props.label} {props.required && <span class="text-red-400">*</span>}
			</label>
			<textarea
				id={sluggify(props.label)}
				rows="3"
				placeholder={props.placeholder}
				class="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-brand-400 focus:border-transparent transition resize-none"
			></textarea>
			<div class="flex justify-between mt-1.5">
				{props.description && (
					<p class="text-xs text-gray-400">{props.description}</p>
				)}
				<span class="text-xs text-gray-400">0 / 500</span>
			</div>
		</div>
	);
};
