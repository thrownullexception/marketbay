import clsx from "clsx";
import {
	CircleCheckIcon,
	CircleXIcon,
	InfoIcon,
	type LucideIcon,
	TriangleAlertIcon,
} from "lucide-solid";
import { sanitizeHtml } from "@/utils/strings";

const VariantConfig = {
	info: {
		bgColor: "bg-blue-50/50",
		iconColor: "text-blue-600",
		Icon: InfoIcon,
	},
	success: {
		bgColor: "bg-emerald-50/50",
		iconColor: "text-emerald-600",
		Icon: CircleCheckIcon,
	},
	warning: {
		bgColor: "bg-yellow-50/50",
		iconColor: "text-yellow-600",
		Icon: TriangleAlertIcon,
	},
	error: {
		bgColor: "bg-red-50/50",
		iconColor: "text-red-600",
		Icon: CircleXIcon,
	},
	default: {
		bgColor: "bg-gray-50/50",
		iconColor: "text-gray-600",
		Icon: InfoIcon,
	},
} satisfies Record<
	string,
	{
		bgColor: string;
		iconColor: string;
		Icon: LucideIcon;
	}
>;

export const Alert = (props: {
	variant: keyof typeof VariantConfig;
	title?: string;
	description: string;
}) => {
	const variantConfig = VariantConfig[props.variant];
	return (
		<div
			class={clsx("flex items-center gap-3 p-4 rounded-xl", {
				[variantConfig.bgColor]: true,
			})}
		>
			<variantConfig.Icon
				class={clsx("w-6 h-6 shrink-0", {
					[variantConfig.iconColor]: true,
				})}
				aria-hidden="true"
			/>
			<div>
				{props.title ? (
					<p class="text-sm font-semibold text-gray-700">{props.title}</p>
				) : null}
				<p
					class="text-xs text-gray-500 mt-0.5"
					innerHTML={sanitizeHtml(props.description)}
				/>
			</div>
		</div>
	);
};
