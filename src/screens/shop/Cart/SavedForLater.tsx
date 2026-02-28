import type { JSX } from "solid-js";

interface SavedForLaterProps {
	children: JSX.Element;
}

export const SavedForLater = (props: SavedForLaterProps) => {
	return (
		<div class="mt-4">
			<h2 class="text-lg font-bold text-gray-900 mb-4">Saved for Later</h2>
			<div class="grid grid-cols-2 sm:grid-cols-3 gap-4">
				{props.children}
			</div>
		</div>
	);
};
