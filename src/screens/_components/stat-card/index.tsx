import clsx from "clsx";
import type { LucideIcon } from "lucide-solid";

const colorSchemes = {
	brand: { bg: "bg-brand-50", icon: "text-brand-600" },
	amber: { bg: "bg-amber-50", icon: "text-amber-600" },
	blue: { bg: "bg-blue-50", icon: "text-blue-600" },
	emerald: { bg: "bg-emerald-50", icon: "text-emerald-600" },
	red: { bg: "bg-red-50", icon: "text-red-500" },
	gray: { bg: "bg-gray-100", icon: "text-gray-500" },
} as const;

export type StatCardColor = keyof typeof colorSchemes;

export const StatCard = (props: {
	Icon: LucideIcon;
	value: string | number;
	label: string;
	color: StatCardColor;
}) => {
	const scheme = colorSchemes[props.color];
	return (
		<div class="bg-white rounded-2xl border border-gray-100 p-4 flex items-center gap-3">
			<div
				class={clsx(
					"w-10 h-10 rounded-xl flex items-center justify-center shrink-0",
					scheme.bg,
				)}
			>
				<props.Icon class={clsx("w-5 h-5", scheme.icon)} />
			</div>
			<div>
				<p class="text-lg font-extrabold text-gray-900">{props.value}</p>
				<p class="text-xs text-gray-500">{props.label}</p>
			</div>
		</div>
	);
};
