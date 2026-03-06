import type { JSX } from "solid-js";

export const DataTableRoot = (props: { children: JSX.Element }) => {
	return (
		<div class="bg-white rounded-2xl border border-gray-100 overflow-hidden">
			{props.children}
		</div>
	);
};
