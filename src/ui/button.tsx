import { Link, type LinkOptions } from "@tanstack/solid-router";
import { clsx } from "clsx";
import type { LucideIcon } from "lucide-solid";

const VariantsConfig = {
	primary: "bg-brand-600 hover:bg-brand-700 text-white shadow-sm",
	secondary: "bg-accent-500 hover:bg-accent-600 text-white shadow-sm",
	default: "bg-white border border-gray-200 hover:bg-gray-50 text-gray-700",
	text: "text-gray-400 hover:text-gray-600 p-0!",
	primaryText: "text-brand-600 hover:text-brand-700 p-0!",
	soft: "bg-brand-50 hover:bg-brand-100 text-brand-700",
};

const SizesConfig = {
	sm: "px-3 py-2 text-xs rounded-lg gap-1.5",
	md: "px-4 py-3 text-sm rounded-xl gap-2",
};

type SharedButtonProps = {
	label: string;
	Icon?: LucideIcon;
	iconOnly?: boolean;
	variant: keyof typeof VariantsConfig;
	size?: keyof typeof SizesConfig;
	fullWidth?: boolean;
	iconPosition?: "left" | "right";
};

function buttonClass(props: SharedButtonProps) {
	return clsx(
		"cursor-pointer flex-1 sm:flex-initial font-semibold rounded-xl transition flex items-center justify-center",
		{
			[VariantsConfig[props.variant || "default"]]: true,
			[SizesConfig[props.size || "md"]]: true,
			"w-full": props.fullWidth,
		},
	);
}

function ButtonContent(props: SharedButtonProps) {
	const iconPosition = props.iconPosition || "left";
	return (
		<>
			{props.Icon && iconPosition === "left" && <props.Icon class="w-4 h-4" />}
			{props.iconOnly ? undefined : props.label}
			{props.Icon && iconPosition === "right" && <props.Icon class="w-4 h-4" />}
		</>
	);
}

function getSharedButtonProps(props: SharedButtonProps) {
	return {
		"aria-label": props.iconOnly ? props.label : undefined,
		class: buttonClass(props),
	};
}

export const Button = (
	props: SharedButtonProps & {
		onClick?: () => void;
		type?: "button" | "submit" | "reset";
	},
) => {
	return (
		<button
			type={props.type || "button"}
			onClick={props.onClick}
			{...getSharedButtonProps(props)}
		>
			<ButtonContent {...props} />
		</button>
	);
};

export const LinkButton = (
	props: SharedButtonProps & { link: LinkOptions },
) => {
	return (
		<Link {...props.link} {...getSharedButtonProps(props)}>
			<ButtonContent {...props} />
		</Link>
	);
};

export const AnchorLink = (props: SharedButtonProps & { href: string }) => {
	return (
		<a href={props.href} {...getSharedButtonProps(props)}>
			<ButtonContent {...props} />
		</a>
	);
};
