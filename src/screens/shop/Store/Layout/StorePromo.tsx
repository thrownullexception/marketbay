import { ArrowRightIcon, TagIcon } from "lucide-solid";
import { Container } from "@/ui/layout";

export const StorePromo = () => {
	return (
		<section class="bg-brand-950 border-b border-brand-900">
			<Container>
				<div class="flex items-center justify-between gap-4 py-2.5">
					<div class="flex items-center gap-3 min-w-0">
						<span class="shrink-0 inline-flex items-center gap-1 px-2 py-0.5 bg-accent-500 text-white text-[10px] font-bold rounded uppercase tracking-wide">
							<TagIcon class="w-3 h-3" />
							Promo
						</span>
						<p class="text-sm text-brand-100 truncate">
							<span class="font-semibold text-white">
								Up to 40% off all headphones &amp; speakers
							</span>
							<span class="text-brand-400 mx-1.5 hidden sm:inline">—</span>
							<span class="hidden sm:inline">
								Use code{" "}
								<span class="font-mono font-bold text-accent-300">
									AUDIO40
								</span>{" "}
								at checkout
							</span>
						</p>
					</div>
					<div class="flex items-center gap-4 shrink-0">
						<span class="text-xs text-brand-400 hidden md:inline">
							Ends Feb 28
						</span>
						<button
							type="button"
							class="inline-flex items-center gap-1 text-xs font-semibold text-white hover:text-accent-300 transition"
						>
							Shop now
							<ArrowRightIcon class="w-3.5 h-3.5" />
						</button>
					</div>
				</div>
			</Container>
		</section>
	);
};
