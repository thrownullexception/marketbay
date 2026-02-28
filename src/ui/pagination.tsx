import { ChevronLeftIcon, ChevronRightIcon } from "lucide-solid";

export const Pagination = () => {
	return (
		<div class="flex items-center justify-center gap-1 mt-10">
			<button
				type="button"
				class="w-9 h-9 rounded-lg text-sm text-gray-400 hover:bg-gray-100 transition flex items-center justify-center"
				disabled
			>
				<ChevronLeftIcon class="w-4 h-4" />
			</button>
			<button
				type="button"
				class="w-9 h-9 rounded-lg text-sm font-semibold bg-brand-600 text-white"
			>
				1
			</button>
			<button
				type="button"
				class="w-9 h-9 rounded-lg text-sm font-medium text-gray-600 hover:bg-gray-100 transition"
			>
				2
			</button>
			<button
				type="button"
				class="w-9 h-9 rounded-lg text-sm font-medium text-gray-600 hover:bg-gray-100 transition"
			>
				3
			</button>
			<span class="w-9 h-9 flex items-center justify-center text-gray-400 text-sm">
				...
			</span>
			<button
				type="button"
				class="w-9 h-9 rounded-lg text-sm font-medium text-gray-600 hover:bg-gray-100 transition"
			>
				104
			</button>
			<button
				type="button"
				class="w-9 h-9 rounded-lg text-sm text-gray-600 hover:bg-gray-100 transition flex items-center justify-center"
			>
				<ChevronRightIcon class="w-4 h-4" />
			</button>
		</div>
	);
};
