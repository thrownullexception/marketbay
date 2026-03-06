import { AlertTriangleIcon } from "lucide-solid";

export const AttentionBanner = (props: {
	title: string;
	description: string;
	onReview?: () => void;
}) => {
	return (
		<div class="p-4 bg-amber-50 rounded-2xl border border-amber-100 flex items-center gap-4">
			<div class="w-10 h-10 rounded-xl bg-amber-100 flex items-center justify-center shrink-0">
				<AlertTriangleIcon class="w-5 h-5 text-amber-600" />
			</div>
			<div class="flex-1 min-w-0">
				<p class="text-sm font-semibold text-amber-800">{props.title}</p>
				<p class="text-xs text-amber-600 mt-0.5">{props.description}</p>
			</div>
			<button
				type="button"
				onClick={props.onReview}
				class="px-3.5 py-2 bg-amber-600 hover:bg-amber-700 text-white text-xs font-semibold rounded-lg transition shrink-0"
			>
				Review Now
			</button>
		</div>
	);
};
