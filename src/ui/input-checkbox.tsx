import { useStore } from "@tanstack/solid-form";
import clsx from "clsx";
import { For, type JSX } from "solid-js";
import { useFieldContext } from "@/ui/form/context";
import { formatErrors } from "@/ui/form/format-errors";
import { sluggify } from "@/utils/strings";
import { useFieldHasError } from "./input-form";

const Checkbox = (props: {
	id: string;
	checked: boolean;
	onChange: () => void;
	hasError?: boolean;
}) => {
	return (
		<input
			type="checkbox"
			id={props.id}
			checked={props.checked}
			class={clsx(
				"w-4 h-4 mt-0.5 rounded text-brand-600 transition",
				props.hasError
					? "border-red-400 focus:ring-red-400"
					: "border-gray-300 focus:ring-brand-500",
			)}
			onChange={props.onChange}
		/>
	);
};

export const InputCheckbox = (props: { id: string; label: JSX.Element }) => {
	const field = useFieldContext<boolean>();
	const hasError = useFieldHasError<boolean>();
	const errors = useStore(field().store, (state) => state.meta.errors);
	return (
		<div>
			<div class="flex items-start gap-2">
				<Checkbox
					id={props.id}
					checked={field().state.value}
					onChange={() => field().handleChange(!field().state.value)}
					hasError={hasError()}
				/>
				<label for={props.id} class="text-sm text-gray-600 cursor-pointer">
					{props.label}{" "}
				</label>
			</div>
			{errors().length > 0 && hasError() && (
				<p class="mt-1 text-xs text-red-400">
					{formatErrors(errors()[0]).message}
				</p>
			)}
		</div>
	);
};

export const InputCheckboxGroup = (props: {
	label: string;
	value: string;
	options: { label: string; value: string; description?: string }[];
}) => {
	const field = useFieldContext<boolean>();
	const hasError = useFieldHasError<boolean>();
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
						<label
							class={clsx(
								"flex items-start gap-3 p-3.5 rounded-xl border cursor-pointer hover:bg-brand-50/30 transition-colors has-checked:border-brand-400 has-checked:bg-brand-50/50",
								hasError()
									? "border-red-400 hover:border-red-400"
									: "border-gray-200 hover:border-brand-200",
							)}
						>
							<Checkbox
								id={option.value}
								checked={field().state.value}
								onChange={() => field().handleChange(!field().state.value)}
								hasError={hasError()}
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
