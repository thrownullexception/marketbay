import { Link } from "@tanstack/solid-router";

type TopBarVariant = "seller" | "buyer";

export const TopBar = (props: { variant: TopBarVariant }) => {
	return (
		<div class="bg-brand-950 text-brand-200 text-xs py-1.5">
			<div class="max-w-7xl mx-auto px-4 flex items-center justify-between">
				{props.variant === "seller" ? (
					<>
						<div class="flex items-center gap-2">
							<span class="inline-flex items-center gap-1 px-2 py-0.5 bg-accent-500/20 text-accent-300 text-[10px] font-bold rounded-full uppercase">
								Merchant Mode
							</span>
							<Link to="/" class="hover:text-white transition">
								Switch to Buyer
							</Link>
						</div>
						<div class="hidden sm:flex items-center gap-4">
							<Link to="/help" class="hover:text-white transition">
								Help Center
							</Link>
							<Link
								to="/store-terms-of-service"
								class="hover:text-white transition"
							>
								Seller Policies
							</Link>
						</div>
					</>
				) : (
					<>
						<p>Free shipping on orders over N50,000</p>
						<div class="hidden sm:flex items-center gap-4">
							<Link to="/create-store" class="hover:text-white transition">
								Sell on MarketBay
							</Link>
							<a href="#" class="hover:text-white transition">
								Order Tracking
							</a>
							<Link to="/help" class="hover:text-white transition">
								Help
							</Link>
						</div>
					</>
				)}
			</div>
		</div>
	);
};
