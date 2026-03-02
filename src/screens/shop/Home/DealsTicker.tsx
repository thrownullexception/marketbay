import { FlameIcon } from "lucide-solid";

export const DealsTicker = () => {
	return (
		<section class="bg-linear-to-r from-accent-50 via-white to-accent-50 border-b border-accent-100">
			<div class="max-w-7xl mx-auto px-4 py-3">
				<div class="flex items-center gap-3">
					<span class="shrink-0 inline-flex items-center gap-1.5 px-3 py-1 bg-accent-500 text-white text-xs font-bold rounded-full uppercase tracking-wide">
						<FlameIcon class="w-3.5 h-3.5" />
						Hot Deals
					</span>
					<div class="overflow-hidden flex-1">
						<div class="ticker">
							<div class="flex gap-8 pr-8">
								<span class="whitespace-nowrap text-sm text-gray-600">
									<strong class="text-accent-700">TechVault:</strong> 30% off
									all headphones — ends tonight!
								</span>
								<span class="whitespace-nowrap text-sm text-gray-600">
									<strong class="text-accent-700">StyleHouse:</strong> Buy 2,
									Get 1 Free on winter collection
								</span>
								<span class="whitespace-nowrap text-sm text-gray-600">
									<strong class="text-accent-700">GreenNest:</strong> Flash sale
									— organic skincare from $9.99
								</span>
								<span class="whitespace-nowrap text-sm text-gray-600">
									<strong class="text-accent-700">FitGear Pro:</strong> New
									arrivals + free shipping this week
								</span>
								<span class="whitespace-nowrap text-sm text-gray-600">
									<strong class="text-accent-700">BookNook:</strong> 20% off
									bestsellers — use code READ20
								</span>
							</div>
							<div class="flex gap-8 pr-8" aria-hidden="true">
								<span class="whitespace-nowrap text-sm text-gray-600">
									<strong class="text-accent-700">TechVault:</strong> 30% off
									all headphones — ends tonight!
								</span>
								<span class="whitespace-nowrap text-sm text-gray-600">
									<strong class="text-accent-700">StyleHouse:</strong> Buy 2,
									Get 1 Free on winter collection
								</span>
								<span class="whitespace-nowrap text-sm text-gray-600">
									<strong class="text-accent-700">GreenNest:</strong> Flash sale
									— organic skincare from $9.99
								</span>
								<span class="whitespace-nowrap text-sm text-gray-600">
									<strong class="text-accent-700">FitGear Pro:</strong> New
									arrivals + free shipping this week
								</span>
								<span class="whitespace-nowrap text-sm text-gray-600">
									<strong class="text-accent-700">BookNook:</strong> 20% off
									bestsellers — use code READ20
								</span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};
