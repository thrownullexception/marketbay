import clsx from "clsx";
import {
	CircleCheckIcon,
	CircleXIcon,
	InfoIcon,
	type LucideIcon,
	TriangleAlertIcon,
} from "lucide-solid";
import { Show } from "solid-js";
import { sanitizeHtml } from "@/utils/strings";

const VariantConfig = {
	info: {
		container: "bg-blue-50 border-blue-100",
		iconBox: "bg-blue-100",
		iconColor: "text-blue-600",
		titleColor: "text-blue-800",
		descColor: "text-blue-600",
		btnBg: "bg-blue-600 hover:bg-blue-700",
		Icon: InfoIcon,
	},
	success: {
		container: "bg-emerald-50 border-emerald-100",
		iconBox: "bg-emerald-100",
		iconColor: "text-emerald-600",
		titleColor: "text-emerald-800",
		descColor: "text-emerald-600",
		btnBg: "bg-emerald-600 hover:bg-emerald-700",
		Icon: CircleCheckIcon,
	},
	warning: {
		container: "bg-amber-50 border-amber-100",
		iconBox: "bg-amber-100",
		iconColor: "text-amber-600",
		titleColor: "text-amber-800",
		descColor: "text-amber-600",
		btnBg: "bg-amber-600 hover:bg-amber-700",
		Icon: TriangleAlertIcon,
	},
	error: {
		container: "bg-red-50 border-red-100",
		iconBox: "bg-red-100",
		iconColor: "text-red-600",
		titleColor: "text-red-800",
		descColor: "text-red-600",
		btnBg: "bg-red-600 hover:bg-red-700",
		Icon: CircleXIcon,
	},
	default: {
		container: "bg-gray-50 border-gray-100",
		iconBox: "bg-gray-100",
		iconColor: "text-gray-600",
		titleColor: "text-gray-800",
		descColor: "text-gray-600",
		btnBg: "bg-gray-600 hover:bg-gray-700",
		Icon: InfoIcon,
	},
} satisfies Record<
	string,
	{
		container: string;
		iconBox: string;
		iconColor: string;
		titleColor: string;
		descColor: string;
		btnBg: string;
		Icon: LucideIcon;
	}
>;

export const Alert = (props: {
	variant: keyof typeof VariantConfig;
	title?: string;
	description: string;
	action?: {
		label: string;
		onClick?: () => void;
	};
}) => {
	const v = VariantConfig[props.variant];
	return (
		<div
			class={clsx(
				"flex items-center gap-4 p-4 rounded-2xl border",
				v.container,
			)}
		>
			<div
				class={clsx(
					"w-10 h-10 rounded-xl flex items-center justify-center shrink-0",
					v.iconBox,
				)}
			>
				<v.Icon class={clsx("w-5 h-5", v.iconColor)} aria-hidden="true" />
			</div>
			<div class="flex-1 min-w-0">
				<Show when={props.title}>
					<p class={clsx("text-sm font-semibold", v.titleColor)}>
						{props.title}
					</p>
				</Show>
				<p
					class={clsx("text-xs mt-0.5", v.descColor)}
					innerHTML={sanitizeHtml(props.description)}
				/>
			</div>
			<Show when={props.action}>
				{(action) => (
					<button
						type="button"
						onClick={action().onClick}
						class={clsx(
							"px-3.5 py-2 text-white text-xs font-semibold rounded-lg transition shrink-0",
							v.btnBg,
						)}
					>
						{action().label}
					</button>
				)}
			</Show>
		</div>
	);
};
