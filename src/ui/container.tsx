import clsx from "clsx";
import type { JSX } from "solid-js";

export const Container = (props: {
	children: JSX.Element;
	class?: string;
	size?: "md" | "lg";
}) => {
	return (
		<div
			class={clsx(
				"mx-auto px-4",
				props.class,
				props.size === "md" ? "max-w-3xl" : "max-w-7xl",
			)}
		>
			{props.children}
		</div>
	);
};

export const SideBar = (props: { left: JSX.Element; right: JSX.Element }) => {
	return (
		<div class="flex flex-col lg:flex-row gap-8">
			{props.left}
			<div class="flex-1 min-w-0">{props.right}</div>
		</div>
	);
};
