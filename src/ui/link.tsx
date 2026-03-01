import { Link, type LinkOptions } from "@tanstack/solid-router";
import clsx from "clsx";
import type { LucideIcon } from "lucide-solid";

export const TextLink = (props: {
	label: string;
	to: LinkOptions["to"];
	params?: LinkOptions["params"];
	search?: LinkOptions["search"];
	hash?: LinkOptions["hash"];
	Icon?: LucideIcon;
	size?: "xs" | "sm";
}) => {
	const size = props.size || "sm";
	return (
		<Link
			to={props.to}
			params={props.params}
			search={props.search}
			hash={props.hash}
			class={clsx(
				"inline-flex items-center gap-1 text-sm font-semibold text-brand-600 hover:text-brand-700 transition",
				{
					"text-xs": size === "xs",
				},
			)}
		>
			{props.label}
			{props.Icon && <props.Icon class="w-4 h-4" />}
		</Link>
	);
};
