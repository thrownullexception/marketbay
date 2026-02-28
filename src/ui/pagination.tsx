import { ChevronLeftIcon, ChevronRightIcon } from "lucide-solid";

export const Pagination = () => {
	return (
		<nav class="mt-10 flex items-center justify-center gap-1.5">
			<button
				type="button"
				class="w-10 h-10 rounded-xl border border-gray-200 text-gray-400 flex items-center justify-center hover:bg-gray-50 transition"
				disabled
				aria-label="Previous"
			>
				<ChevronLeftIcon class="w-4 h-4" />
			</button>
			<button
				type="button"
				class="w-10 h-10 rounded-xl bg-brand-600 text-white text-sm font-semibold flex items-center justify-center"
			>
				1
			</button>
			<button
				type="button"
				class="w-10 h-10 rounded-xl border border-gray-200 text-gray-600 text-sm font-medium flex items-center justify-center hover:bg-gray-50 transition"
			>
				2
			</button>
			<button
				type="button"
				class="w-10 h-10 rounded-xl border border-gray-200 text-gray-600 text-sm font-medium flex items-center justify-center hover:bg-gray-50 transition"
			>
				3
			</button>
			<span class="w-10 h-10 flex items-center justify-center text-gray-400 text-sm">
				...
			</span>
			<button
				type="button"
				class="w-10 h-10 rounded-xl border border-gray-200 text-gray-600 text-sm font-medium flex items-center justify-center hover:bg-gray-50 transition"
			>
				52
			</button>
			<button
				type="button"
				class="w-10 h-10 rounded-xl border border-gray-200 text-gray-600 flex items-center justify-center hover:bg-gray-50 transition"
				aria-label="Next"
			>
				<ChevronRightIcon class="w-4 h-4" />
			</button>
		</nav>
	);
};
