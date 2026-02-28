import { Link, Outlet } from "@tanstack/solid-router";
import { ShieldCheck, TagIcon, TruckIcon } from "lucide-solid";

export const AuthLayout = () => {
	return (
		<div class="bg-gray-50 text-gray-800 font-sans antialiased min-h-screen flex flex-col">
			<div class="bg-brand-950 text-brand-200 text-xs py-1.5">
				<div class="max-w-7xl mx-auto px-4 flex items-center justify-between">
					<p>Free shipping on orders over $50</p>
					<div class="hidden sm:flex items-center gap-4">
						<Link to="/" class="hover:text-white transition">
							Sell on MarketBay
						</Link>
						<Link to="/help" class="hover:text-white transition">
							Help
						</Link>
					</div>
				</div>
			</div>

			<nav class="bg-white border-b border-gray-100 shadow-sm">
				<div class="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
					<Link to="/" class="flex items-center gap-2">
						<div class="w-9 h-9 rounded-lg bg-brand-600 flex items-center justify-center">
							<svg
								class="w-5 h-5 text-white"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
								stroke-width="2"
							>
								<title>Logo</title>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									d="M13 10V3L4 14h7v7l9-11h-7z"
								/>
							</svg>
						</div>
						<span class="text-xl font-extrabold text-brand-950 tracking-tight">
							Market<span class="text-brand-600">Bay</span>
						</span>
					</Link>
					<a
						href="login.html"
						class="text-sm font-medium text-brand-600 hover:text-brand-700 transition"
					>
						Sign in instead
					</a>
				</div>
			</nav>

			<main class="flex-1 flex items-center justify-center py-12 px-4">
				<div class="w-full max-w-lg">
					<Outlet />

					<div class="mt-8 grid grid-cols-3 gap-4 text-center">
						<div class="flex flex-col items-center gap-1.5">
							<div class="w-10 h-10 rounded-xl bg-brand-50 flex items-center justify-center">
								<ShieldCheck class="w-5 h-5 text-brand-600" />
							</div>
							<span class="text-xs font-medium text-gray-600">
								Buyer Protection
							</span>
							<span class="text-[11px] text-gray-400">
								Full refund guarantee
							</span>
						</div>
						<div class="flex flex-col items-center gap-1.5">
							<div class="w-10 h-10 rounded-xl bg-emerald-50 flex items-center justify-center">
								<TruckIcon class="w-5 h-5 text-emerald-600" />
							</div>
							<span class="text-xs font-medium text-gray-600">
								Free Shipping
							</span>
							<span class="text-[11px] text-gray-400">On orders over $50</span>
						</div>
						<div class="flex flex-col items-center gap-1.5">
							<div class="w-10 h-10 rounded-xl bg-accent-50 flex items-center justify-center">
								<TagIcon class="w-5 h-5 text-accent-600" />
							</div>
							<span class="text-xs font-medium text-gray-600">
								Exclusive Deals
							</span>
							<span class="text-[11px] text-gray-400">Members-only prices</span>
						</div>
					</div>
				</div>
			</main>

			<footer class="bg-brand-950 text-brand-200">
				<div class="max-w-7xl mx-auto px-4 py-6">
					<div class="flex flex-col sm:flex-row items-center justify-between gap-3">
						<Link to="/">
							<div class="flex items-center gap-2">
								<div class="w-7 h-7 rounded-lg bg-brand-600 flex items-center justify-center">
									<svg
										class="w-3.5 h-3.5 text-white"
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor"
										stroke-width="2"
									>
										<title>Logo</title>
										<path
											stroke-linecap="round"
											stroke-linejoin="round"
											d="M13 10V3L4 14h7v7l9-11h-7z"
										/>
									</svg>
								</div>
								<span class="text-sm font-extrabold text-white tracking-tight">
									Market<span class="text-brand-400">Bay</span>
								</span>
							</div>
						</Link>
						<p class="text-xs text-brand-300">
							&copy; 2026 MarketBay. All rights reserved.
						</p>
						<div class="flex items-center gap-4 text-xs text-brand-300">
							<Link to="/privacy-policy" class="hover:text-white transition">
								Privacy
							</Link>
							<Link to="/terms-of-service" class="hover:text-white transition">
								Terms
							</Link>
							<Link to="/help" class="hover:text-white transition">
								Help
							</Link>
						</div>
					</div>
				</div>
			</footer>
		</div>
	);
};
