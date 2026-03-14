import { ChevronLeftIcon, ChevronRightIcon } from "lucide-solid";

export const DataTableFooter = (props: {
	from: number;
	to: number;
	total: number;
	unit?: string;
	lastPage: number;
}) => {
	const unit = props.unit ?? "items";
	return (
		<div class="px-5 py-4 border-t border-gray-100 flex items-center justify-between">
			<p class="text-xs text-gray-500">
				Showing{" "}
				<span class="font-semibold text-gray-700">
					{props.from}–{props.to}
				</span>{" "}
				of <span class="font-semibold text-gray-700">{props.total}</span> {unit}
			</p>
			<div class="flex items-center gap-1">
				<button
					type="button"
					class="w-8 h-8 rounded-lg border border-gray-200 text-gray-400 flex items-center justify-center hover:bg-gray-50 transition"
					disabled
					aria-label="Previous page"
				>
					<ChevronLeftIcon class="w-4 h-4" />
				</button>
				<button
					type="button"
					class="w-8 h-8 rounded-lg bg-brand-600 text-white text-xs font-bold flex items-center justify-center"
				>
					1
				</button>
				<button
					type="button"
					class="w-8 h-8 rounded-lg border border-gray-200 text-gray-600 text-xs font-medium flex items-center justify-center hover:bg-gray-50 transition"
				>
					2
				</button>
				<button
					type="button"
					class="w-8 h-8 rounded-lg border border-gray-200 text-gray-600 text-xs font-medium flex items-center justify-center hover:bg-gray-50 transition"
				>
					3
				</button>
				<span class="text-xs text-gray-400 px-1">...</span>
				<button
					type="button"
					class="w-8 h-8 rounded-lg border border-gray-200 text-gray-600 text-xs font-medium flex items-center justify-center hover:bg-gray-50 transition"
				>
					{props.lastPage}
				</button>
				<button
					type="button"
					class="w-8 h-8 rounded-lg border border-gray-200 text-gray-600 flex items-center justify-center hover:bg-gray-50 transition"
					aria-label="Next page"
				>
					<ChevronRightIcon class="w-4 h-4" />
				</button>
			</div>
		</div>
	);
};
