export const MainBanner = () => {
	return (
		<section class="bg-gray-100 py-4">
			<div class="max-w-7xl mx-auto px-4">
				<div class="grid lg:grid-cols-3 gap-4">
					<div class="lg:col-span-2 relative rounded-2xl overflow-hidden bg-linear-to-r from-brand-700 to-brand-900 min-h-[220px] lg:min-h-[280px] flex items-center cursor-pointer group">
						<div class="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48Y2lyY2xlIGN4PSIyMCIgY3k9IjIwIiByPSIxLjUiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4wNikiLz48L3N2Zz4=')] opacity-80"></div>
						<div class="relative px-8 lg:px-10 py-8 w-full">
							<span class="inline-block px-2.5 py-1 bg-accent-500 text-white text-xs font-bold rounded-md uppercase mb-3">
								Flash Sale — Ends Tonight
							</span>
							<h2 class="text-2xl lg:text-3xl font-bold text-white leading-tight">
								Up to 40% off
								<br />
								Premium Electronics
							</h2>
							<p class="text-brand-200 text-sm mt-2">
								Headphones, monitors, speakers &amp; more from TechVault
							</p>
							<a
								href="#"
								class="inline-flex items-center gap-1.5 mt-5 px-5 py-2.5 bg-white text-brand-700 font-semibold rounded-lg text-sm hover:bg-brand-50 transition shadow-sm group-hover:shadow-md"
							>
								Shop Deals{" "}
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
						<div class="absolute bottom-4 right-6 hidden lg:flex items-center gap-1 bg-white/15 backdrop-blur px-3 py-1.5 rounded-lg text-white text-sm font-mono">
							<span class="font-bold">02</span>
							<span class="text-brand-300">:</span>
							<span class="font-bold">14</span>
							<span class="text-brand-300">:</span>
							<span class="font-bold">38</span>
						</div>
					</div>
					<div class="flex flex-col gap-4">
						<a
							href="#"
							class="relative rounded-2xl overflow-hidden bg-linear-to-br from-rose-500 to-pink-700 flex-1 min-h-[130px] flex items-center px-6 py-5 group cursor-pointer"
						>
							<div>
								<span class="inline-block px-2 py-0.5 bg-white/20 text-white text-[10px] font-bold rounded uppercase mb-1.5">
									Buy 2 Get 1
								</span>
								<h3 class="text-lg font-bold text-white leading-snug">
									Winter Fashion
								</h3>
								<p class="text-rose-200 text-xs mt-0.5">StyleHouse</p>
							</div>
							<svg
								class="absolute right-4 bottom-4 w-5 h-5 text-white/50 group-hover:text-white/80 transition"
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
						<a
							href="#"
							class="relative rounded-2xl overflow-hidden bg-linear-to-br from-emerald-500 to-teal-700 flex-1 min-h-[130px] flex items-center px-6 py-5 group cursor-pointer"
						>
							<div>
								<span class="inline-block px-2 py-0.5 bg-white/20 text-white text-[10px] font-bold rounded uppercase mb-1.5">
									From $9.99
								</span>
								<h3 class="text-lg font-bold text-white leading-snug">
									Organic Skincare
								</h3>
								<p class="text-emerald-200 text-xs mt-0.5">GreenNest</p>
							</div>
							<svg
								class="absolute right-4 bottom-4 w-5 h-5 text-white/50 group-hover:text-white/80 transition"
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
