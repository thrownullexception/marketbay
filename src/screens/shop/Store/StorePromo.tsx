export const StorePromo = () => {
	return (
		<section class="bg-white border-b border-gray-100">
			<div class="max-w-7xl mx-auto px-4 py-4">
				<a
					href="#"
					class="block rounded-xl bg-linear-to-r from-brand-600 to-indigo-700 p-5 sm:p-6 relative overflow-hidden group"
				>
					<div class="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48Y2lyY2xlIGN4PSIyMCIgY3k9IjIwIiByPSIxLjUiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4wNikiLz48L3N2Zz4=')] opacity-80"></div>
					<div class="relative flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
						<div>
							<div class="flex items-center gap-2 mb-1">
								<span class="px-2 py-0.5 bg-accent-500 text-white text-[10px] font-bold rounded uppercase">
									Store Promo
								</span>
								<span class="text-white/60 text-xs">Ends Feb 28</span>
							</div>
							<h3 class="text-lg sm:text-xl font-bold text-white">
								Up to 40% off all headphones &amp; speakers
							</h3>
							<p class="text-brand-200 text-sm mt-0.5">
								Use code{" "}
								<span class="font-mono font-bold text-accent-300">AUDIO40</span>{" "}
								at checkout
							</p>
						</div>
						<span class="inline-flex items-center gap-1.5 px-5 py-2.5 bg-white text-brand-700 font-semibold rounded-lg text-sm group-hover:bg-brand-50 transition shadow-sm self-start sm:self-center shrink-0">
							Shop Sale{" "}
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
						</span>
					</div>
				</a>
			</div>
		</section>
	);
};
