import type { JSX } from "solid-js";

export const Grid4 = (props: { children: JSX.Element }) => {
	return (
		<div class="grid grid-cols-2 lg:grid-cols-4 gap-4">{props.children}</div>
	);
};

export const Grid3 = (props: { children: JSX.Element }) => {
	return (
		<div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">{props.children}</div>
	);
};

export const Grid2 = (props: { children: JSX.Element }) => {
	return (
		<div class="grid sm:grid-cols-2 grid-cols-1 gap-4">{props.children}</div>
	);
};
