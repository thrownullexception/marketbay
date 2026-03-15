import clsx from "clsx";
import type { LucideIcon } from "lucide-solid";
import { EyeIcon, EyeOffIcon } from "lucide-solid";
import { createSignal, type JSX } from "solid-js";
import { useFieldContext } from "@/ui/form/context";
import { sluggify } from "@/utils/strings";
import { FormInput, type FormInputProps, useFieldHasError } from "./input-form";

type FormInputTextProps = {
	placeholder: string;
	type?:
		| "text"
		| "password"
		| "email"
		| "number"
		| "tel"
		| "url"
		| "search"
		| "date"
		| "time"
		| "datetime-local"
		| "month"
		| "week";
	Icon?: LucideIcon;
	suffix?: {
		Icon: LucideIcon;
		onClick: () => void;
	};
	id?: string;
};

export const FormInputText = (props: FormInputTextProps & FormInputProps) => {
	const field = useFieldContext<string>();
	const hasError = useFieldHasError<string>();

	return (
		<FormInput
			label={props.label}
			required={props.required}
			labelLink={props.labelLink}
			description={props.description}
		>
			<InputPresentation
				{...props}
				value={field().state.value}
				onInput={(e) => field().handleChange(e.target.value)}
				onBlur={() => field().handleBlur()}
				hasError={hasError()}
				id={sluggify(props.label)}
			/>
		</FormInput>
	);
};

export const SimpleInputText = (props: FormInputTextProps) => {
	const [value, setValue] = createSignal<string>("");
	return (
		<InputPresentation
			{...props}
			value={value()}
			onInput={(e) => setValue(e.target.value)}
			hasError={false}
		/>
	);
};

const InputPresentation = (
	props: FormInputTextProps & {
		value: string;
		onInput: JSX.InputEventHandlerUnion<HTMLInputElement, InputEvent>;
		onBlur?: () => void;
		hasError: boolean;
	},
) => {
	return (
		<div class="relative flex-1 min-w-0">
			{props.Icon && (
				<props.Icon class="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
			)}
			<input
				id={props.id}
				type={props.type ?? "text"}
				placeholder={props.placeholder}
				value={props.value}
				onInput={props.onInput}
				onBlur={props.onBlur}
				class={clsx(
					"w-full py-2.5 rounded-xl border text-sm focus:outline-none focus:ring-2 focus:border-transparent transition",
					props.Icon ? "pl-10" : "pl-4",
					props.suffix ? "pr-10" : "pr-4",
					props.hasError ? "border-red-400" : "border-gray-200",
					props.hasError ? "focus:ring-red-400" : "focus:ring-brand-400",
				)}
			/>
			{props.suffix && (
				<button
					type="button"
					class="absolute right-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 cursor-pointer"
					onClick={props.suffix.onClick}
				>
					<props.suffix.Icon class="w-4 h-4" />
				</button>
			)}
		</div>
	);
};

export const FormInputWithPrefix = (
	props: {
		prefix: string;
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
			<div
				class={clsx(
					"flex rounded-xl border overflow-hidden focus-within:ring-2 focus-within:border-transparent transition",
					hasError() ? "border-red-400" : "border-gray-200",
					hasError()
						? "focus-within:ring-red-400"
						: "focus-within:ring-brand-400",
				)}
			>
				<span class="inline-flex items-center px-3.5 bg-gray-50 text-sm text-gray-400 border-r border-gray-200 select-none">
					{props.prefix}
				</span>
				<input
					id={sluggify(props.label)}
					type="text"
					value={field().state.value}
					onInput={(e) => field().handleChange(e.target.value)}
					onBlur={() => field().handleBlur()}
					placeholder={props.placeholder}
					class="flex-1 px-3 py-2.5 text-sm focus:outline-none"
				/>
			</div>
		</FormInput>
	);
};

export const FormInputPassword = (
	props: {
		placeholder: string;
		Icon?: LucideIcon;
	} & FormInputProps,
) => {
	const [showPassword, setShowPassword] = createSignal(false);
	return (
		<FormInputText
			{...props}
			type={showPassword() ? "text" : "password"}
			suffix={{
				Icon: showPassword() ? EyeIcon : EyeOffIcon,
				onClick: () => setShowPassword(!showPassword()),
			}}
		/>
	);
};
