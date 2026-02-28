export const SellCTA = () => {
	const benefits = [
		"No monthly fees",
		"Built-in analytics",
		"Seller chat support",
	];

	return (
		<section class="py-12 bg-white border-t border-gray-100">
			<div class="max-w-7xl mx-auto px-4">
				<div class="rounded-2xl bg-linear-to-r from-brand-700 to-brand-900 p-8 sm:p-10 relative overflow-hidden">
					<div class="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48Y2lyY2xlIGN4PSIyMCIgY3k9IjIwIiByPSIxLjUiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4wNikiLz48L3N2Zz4=')] opacity-80"></div>
					<div class="relative flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
						<div>
							<h2 class="text-2xl font-bold text-white">
								Start selling on MarketBay
							</h2>
							<p class="text-brand-200 text-sm mt-2 max-w-md">
								Join thousands of independent sellers. Set up your store in
								minutes, reach millions of buyers, and grow your business with
								powerful tools.
							</p>
							<div class="flex flex-wrap items-center gap-4 mt-4 text-sm text-brand-300">
								{benefits.map((benefit) => (
									<span class="flex items-center gap-1.5">
										<svg
											class="w-4 h-4 text-emerald-400"
											fill="currentColor"
											viewBox="0 0 20 20"
										>
											<path
												fill-rule="evenodd"
												d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
												clip-rule="evenodd"
											/>
										</svg>
										{benefit}
									</span>
								))}
							</div>
						</div>
						<a
							href="create-store.html"
							class="inline-flex items-center gap-2 px-6 py-3.5 bg-white text-brand-700 font-semibold rounded-xl text-sm hover:bg-brand-50 transition shadow-sm self-start sm:self-center flex-shrink-0"
						>
							Open Your Store{" "}
							<svg
								class="w-4 h-4"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
								stroke-width="2"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									d="M17 8l4 4m0 0l-4 4m4-4H3"
								/>
							</svg>
						</a>
					</div>
				</div>
			</div>
		</section>
	);
};
