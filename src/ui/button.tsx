import { clsx } from "clsx";
import type { LucideIcon } from "lucide-solid";

export const Button = (props: {
	label: string;
	onClick?: () => void;
	type?: "button" | "submit" | "reset";
	Icon?: LucideIcon;
	variant?: "primary" | "secondary" | "default";
	fullWidth?: boolean;
	iconPosition?: "left" | "right";
}) => {
	const iconPosition = props.iconPosition || "left";
	return (
		<button
			type={props.type || "button"}
			onClick={props.onClick}
			class={clsx(
				"cursor-pointer flex-1 sm:flex-initial px-8 py-3 text-sm font-semibold rounded-xl transition shadow-sm flex items-center justify-center gap-2",
				{
					"bg-brand-600 hover:bg-brand-700 text-white":
						props.variant === "primary",
					"bg-accent-500 hover:bg-accent-600 text-white":
						props.variant === "secondary",
					"bg-gray-50 hover:bg-gray-100 text-gray-600":
						props.variant === "default",
					"w-full": props.fullWidth,
				},
			)}
		>
			{props.Icon && iconPosition === "left" && <props.Icon class="w-4 h-4" />}
			{props.label}
			{props.Icon && iconPosition === "right" && <props.Icon class="w-4 h-4" />}
		</button>
	);
};
