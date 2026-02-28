export const StoresHeader = () => {
	return (
		<section class="bg-linear-to-br from-brand-50 via-white to-accent-50 border-b border-gray-100">
			<div class="max-w-7xl mx-auto px-4 py-8 lg:py-10">
				<div class="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
					<div>
						<h1 class="text-2xl lg:text-3xl font-extrabold text-gray-900">
							Browse Stores
						</h1>
						<p class="text-gray-500 text-sm mt-1.5 max-w-lg">
							Discover independent sellers from around the world. Follow your
							favorites to stay updated on new products and exclusive deals.
						</p>
					</div>
					<div class="flex items-center gap-2 text-sm">
						<span class="text-gray-500">1,240 stores</span>
						<span class="text-gray-300">|</span>
						<span class="text-gray-500">87,000+ products</span>
					</div>
				</div>
			</div>
		</section>
	);
};
