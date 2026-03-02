import { For, type JSX } from "solid-js";
import { sluggify } from "@/utils/strings";

const Checkbox = (props: { id: string; checked: boolean }) => {
	return (
		<input
			type="checkbox"
			id={props.id}
			checked={props.checked}
			class="w-4 h-4 mt-0.5 rounded border-gray-300 text-brand-600 focus:ring-brand-500 transition"
		/>
	);
};

export const InputCheckbox = (props: {
	label: JSX.Element;
	id: string;
	checked: boolean;
}) => {
	return (
		<div class="flex items-start gap-2">
			<Checkbox id={props.id} checked={props.checked} />
			<label for={props.id} class="text-sm text-gray-600 cursor-pointer">
				{props.label}
			</label>
		</div>
	);
};

export const InputCheckboxGroup = (props: {
	label: string;
	value: string;
	options: { label: string; value: string; description?: string }[];
}) => {
	return (
		<div>
			<label
				for={sluggify(props.label)}
				class="block text-sm font-medium text-gray-700 mb-3"
			>
				{props.label}
			</label>
			<div class="space-y-3">
				<For each={props.options}>
					{(option) => (
						// biome-ignore lint/a11y/noLabelWithoutControl: <we need to pass the id to the checkbox>
						<label class="flex items-start gap-3 p-3.5 rounded-xl border border-gray-200 cursor-pointer hover:border-brand-200 hover:bg-brand-50/30 transition-colors has-checked:border-brand-400 has-checked:bg-brand-50/50">
							<Checkbox
								id={option.value}
								checked={props.value === option.value}
							/>
							<div>
								<p class="text-sm font-medium text-gray-900">{option.label}</p>
								{option.description && (
									<p class="text-xs text-gray-500 mt-0.5">
										{option.description}
									</p>
								)}
							</div>
						</label>
					)}
				</For>
			</div>
		</div>
	);
};
