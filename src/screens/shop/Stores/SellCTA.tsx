import { Link } from "@tanstack/solid-router";
import { ArrowRightIcon, CircleCheckIcon } from "lucide-solid";
import { Container } from "@/ui/container";

export const SellCTA = () => {
	const benefits = [
		"Manage inventory",
		"Built-in analytics",
		"Seller chat support",
	];

	return (
		<section class="py-12 bg-white border-t border-gray-100">
			<Container>
				<div class="rounded-2xl bg-linear-to-r from-brand-700 to-brand-900 p-8 sm:p-10 relative overflow-hidden">
					<div class="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48Y2lyY2xlIGN4PSIyMCIgY3k9IjIwIiByPSIxLjUiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4wNikiLz48L3N2Zz4=')] opacity-80"></div>
					<div class="relative flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
						<div>
							<h2 class="text-2xl font-bold text-white">
								Start selling on MarketBay
							</h2>
							<p class="text-brand-200 text-sm mt-2 max-w-md">
								Join thousands of independent sellers. Set up your store in
								minutes, reach thousands of buyers, and grow your business with
								powerful tools.
							</p>
							<div class="flex flex-wrap items-center gap-4 mt-4 text-sm text-brand-300">
								{benefits.map((benefit) => (
									<span class="flex items-center gap-1.5">
										<CircleCheckIcon class="w-4 h-4 text-emerald-400" />
										{benefit}
									</span>
								))}
							</div>
						</div>
						<Link
							to="/create-store"
							class="inline-flex items-center gap-2 px-6 py-3.5 bg-white text-brand-700 font-semibold rounded-xl text-sm hover:bg-brand-50 transition shadow-sm self-start sm:self-center shrink-0"
						>
							Open Your Store <ArrowRightIcon class="w-4 h-4" />
						</Link>
					</div>
				</div>
			</Container>
		</section>
	);
};
