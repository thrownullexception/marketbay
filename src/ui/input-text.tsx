import type { LucideIcon } from "lucide-solid";
import { EyeIcon, EyeOffIcon } from "lucide-solid";
import { createSignal } from "solid-js";
import { sluggify } from "@/utils/strings";
import { BaseInput, type BaseInputProps } from "./input-shared";

export const InputText = (
	props: {
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
					type={props.type ?? "text"}
					placeholder={props.placeholder}
					class={`w-full ${props.Icon ? "pl-10" : "pl-4"} ${props.suffix ? "pr-10" : "pr-4"} py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-brand-400 focus:border-transparent transition`}
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
		</BaseInput>
	);
};

export const InputWithPrefix = (
	props: {
		prefix: string;
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
			<div class="flex rounded-xl border border-gray-200 overflow-hidden focus-within:ring-2 focus-within:ring-brand-400 focus-within:border-transparent transition">
				<span class="inline-flex items-center px-3.5 bg-gray-50 text-sm text-gray-400 border-r border-gray-200 select-none">
					{props.prefix}
				</span>
				<input
					id={sluggify(props.label)}
					type="text"
					placeholder={props.placeholder}
					class="flex-1 px-3 py-2.5 text-sm focus:outline-none"
				/>
			</div>
		</BaseInput>
	);
};

export const InputPassword = (
	props: {
		placeholder: string;
		Icon?: LucideIcon;
	} & BaseInputProps,
) => {
	const [showPassword, setShowPassword] = createSignal(false);
	return (
		<InputText
			{...props}
			type={showPassword() ? "text" : "password"}
			suffix={{
				Icon: showPassword() ? EyeIcon : EyeOffIcon,
				onClick: () => setShowPassword(!showPassword()),
			}}
		/>
	);
};
