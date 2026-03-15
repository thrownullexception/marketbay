import { Container } from "@/ui/container";

export const SearchHeader = () => {
	return (
		<div class="bg-white border-b border-gray-100">
			<Container class="py-5">
				<h1 class="text-xl font-bold text-gray-900">
					Results for "<span class="text-brand-600">wireless headphones</span>"
				</h1>
				<p class="text-sm text-gray-500 mt-1">
					Found 156 products across 12 stores
				</p>
				{/* 
				<div class="flex flex-wrap gap-2 mt-3">
					<span class="text-xs text-gray-400 py-1">Related:</span>
					<a
						href="#"
						class="px-3 py-1 bg-gray-100 hover:bg-brand-50 hover:text-brand-600 text-xs font-medium text-gray-600 rounded-full transition"
					>
						noise cancelling headphones
					</a>
					<a
						href="#"
						class="px-3 py-1 bg-gray-100 hover:bg-brand-50 hover:text-brand-600 text-xs font-medium text-gray-600 rounded-full transition"
					>
						bluetooth earbuds
					</a>
					<a
						href="#"
						class="px-3 py-1 bg-gray-100 hover:bg-brand-50 hover:text-brand-600 text-xs font-medium text-gray-600 rounded-full transition"
					>
						over-ear headphones
					</a>
					<a
						href="#"
						class="px-3 py-1 bg-gray-100 hover:bg-brand-50 hover:text-brand-600 text-xs font-medium text-gray-600 rounded-full transition"
					>
						studio monitors
					</a>
					<a
						href="#"
						class="px-3 py-1 bg-gray-100 hover:bg-brand-50 hover:text-brand-600 text-xs font-medium text-gray-600 rounded-full transition"
					>
						gaming headset
					</a>
				</div> */}
			</Container>
		</div>
	);
};
