import type { JSX } from "solid-js";

interface StoreGroupProps {
	children: JSX.Element;
}

export const StoreGroup = (props: StoreGroupProps) => {
	return (
		<div class="bg-white rounded-2xl border border-gray-100 overflow-hidden">
			{props.children}
		</div>
	);
};
