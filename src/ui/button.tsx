import type { LucideIcon } from "lucide-solid";

export const PrimaryButton = (props: {
	label: string;
	onClick?: () => void;
	type: "button" | "submit" | "reset";
	Icon?: LucideIcon;
}) => {
	return (
		<button
			type={props.type}
			onClick={props.onClick}
			class="cursor-pointer flex-1 sm:flex-initial px-8 py-3 bg-brand-600 hover:bg-brand-700 text-white text-sm font-semibold rounded-xl transition shadow-sm flex items-center justify-center gap-2"
		>
			{props.label}
			{props.Icon && <props.Icon class="w-4 h-4" />}
		</button>
	);
};

export const DefaultButton = (props: {
	label: string;
	onClick?: () => void;
	type?: "button" | "submit" | "reset";
	Icon?: LucideIcon;
}) => {
	return (
		<button
			type={props.type || "button"}
			onClick={props.onClick}
			class="cursor-pointer flex-1 sm:flex-initial px-8 py-3 border border-gray-200 rounded-xl text-sm font-semibold text-gray-600 hover:bg-gray-50 transition flex items-center justify-center gap-2"
		>
			{props.Icon && <props.Icon class="w-4 h-4" />}
			{props.label}
		</button>
	);
};
