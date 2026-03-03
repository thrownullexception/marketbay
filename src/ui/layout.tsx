import clsx from "clsx";
import type { JSX } from "solid-js";

export const Container = (props: {
	children: JSX.Element;
	className?: string;
}) => {
	return (
		<div class={clsx("max-w-7xl mx-auto px-4", props.className)}>
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
