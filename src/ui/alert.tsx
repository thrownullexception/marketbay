import clsx from "clsx";
import {
	CircleCheckIcon,
	CircleXIcon,
	InfoIcon,
	type LucideIcon,
	TriangleAlertIcon,
} from "lucide-solid";

export const Alert = (props: {
	variant: "info" | "success" | "warning" | "error" | "default";
	title: string;
	description: string;
	Icon: LucideIcon;
}) => {
	return (
		<div
			class={clsx("flex items-start gap-3 p-3 rounded-xl", {
				"bg-blue-50/50": props.variant === "info",
				"bg-emerald-50/50": props.variant === "success",
				"bg-yellow-50/50": props.variant === "warning",
				"bg-red-50/50": props.variant === "error",
				"bg-gray-50/50": props.variant === "default",
			})}
		>
			<props.Icon
				class={clsx("w-5 h-5 shrink-0 mt-0.5", {
					"text-blue-600": props.variant === "info",
					"text-emerald-600": props.variant === "success",
					"text-yellow-600": props.variant === "warning",
					"text-red-600": props.variant === "error",
					"text-gray-600": props.variant === "default",
				})}
				aria-hidden="true"
			/>
			<div>
				<p class="text-sm text-gray-700">{props.description}</p>
			</div>
		</div>
	);
};

export const AlertInfo = (props: { description: string }) => {
	return (
		<Alert
			Icon={InfoIcon}
			variant="info"
			title="Info"
			description={props.description}
		/>
	);
};

export const AlertSuccess = (props: { description: string }) => {
	return (
		<Alert
			Icon={CircleCheckIcon}
			variant="success"
			title="Success"
			description={props.description}
		/>
	);
};

export const AlertWarning = (props: { description: string }) => {
	return (
		<Alert
			Icon={TriangleAlertIcon}
			variant="warning"
			title="Warning"
			description={props.description}
		/>
	);
};

export const AlertError = (props: { description: string }) => {
	return (
		<Alert
			Icon={CircleXIcon}
			variant="error"
			title="Error"
			description={props.description}
		/>
	);
};

export const AlertDefault = (props: { description: string }) => {
	return (
		<Alert
			Icon={InfoIcon}
			variant="default"
			title="Default"
			description={props.description}
		/>
	);
};
