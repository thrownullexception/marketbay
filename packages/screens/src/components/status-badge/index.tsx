import clsx from "clsx";
import type { LucideIcon } from "lucide-solid";

const variants = {
	amber: {
		wrapper: "bg-amber-50 text-amber-600 border border-amber-100",
		dot: "bg-amber-500",
	},
	violet: {
		wrapper: "bg-violet-50 text-violet-600",
		dot: "bg-violet-500",
	},
	blue: {
		wrapper: "bg-blue-50 text-blue-600",
		dot: "bg-blue-500",
	},
	emerald: {
		wrapper: "bg-emerald-50 text-emerald-600",
		dot: "bg-emerald-500",
	},
	red: {
		wrapper: "bg-red-50 text-red-500 border border-red-100",
		dot: "bg-red-500",
	},
	gray: {
		wrapper: "bg-gray-100 text-gray-500",
		dot: "bg-gray-400",
	},
} as const;

export type StatusBadgeVariant = keyof typeof variants;

export type StatusBadgeProps = {
	label: string;
	variant: StatusBadgeVariant;
	pulseDot?: boolean;
	Icon?: LucideIcon;
};

export const StatusBadge = (props: StatusBadgeProps) => {
	const v = variants[props.variant];
	return (
		<span
			class={clsx(
				"inline-flex items-center px-2 py-0.5 text-[11px] font-semibold rounded-full",
				v.wrapper,
			)}
		>
			{props.Icon ? (
				<props.Icon class="w-3.5 h-3.5 mr-1.5" />
			) : (
				<span
					class={clsx("w-1.5 h-1.5 rounded-full mr-1.5", v.dot, {
						"animate-pulse": props.pulseDot,
					})}
				/>
			)}
			{props.label}
		</span>
	);
};
