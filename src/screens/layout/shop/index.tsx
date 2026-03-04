import { Link, Outlet } from "@tanstack/solid-router";
import {
	MessageSquareMoreIcon,
	SearchIcon,
	ShoppingCartIcon,
	User,
} from "lucide-solid";
import { CLIENT_CONSTANTS } from "@/env/client";
import { Container } from "@/ui/layout";

export const ShopLayout = () => {
	return (
		<>
			<div class="bg-brand-950 text-brand-200 text-xs py-1.5">
				<div class="max-w-7xl mx-auto px-4 flex items-center justify-between">
					<p>Free shipping on orders over $50</p>
					<div class="hidden sm:flex items-center gap-4">
						<Link to="/create-store" class="hover:text-white transition">
							Create your store
						</Link>
						<a href="#" class="hover:text-white transition">
							Order Tracking
						</a>
						<Link to="/help" class="hover:text-white transition">
							Help
						</Link>
					</div>
				</div>
			</div>

			<nav class="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-gray-100 shadow-sm">
				<div class="max-w-7xl mx-auto px-4 py-3 flex items-center gap-4">
					<Link to="/" class="shrink-0 flex items-center gap-2">
						<div class="w-9 h-9 rounded-lg bg-brand-600 flex items-center justify-center">
							<svg
								class="w-5 h-5 text-white"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
								stroke-width="2"
							>
								<title>MarketBay</title>
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

					<div class="flex-1 max-w-2xl mx-auto">
						<div class="relative">
							<input
								type="text"
								placeholder="Search products, stores, brands..."
								class="w-full pl-10 pr-4 py-2.5 rounded-full border border-gray-200 bg-gray-50 text-sm focus:outline-none focus:ring-2 focus:ring-brand-400 focus:border-transparent transition"
							/>
							<SearchIcon class="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
						</div>
					</div>

					<div class="flex items-center gap-3">
						<Link
							class="relative p-2 rounded-full hover:bg-gray-100 transition"
							aria-label="Messages"
							to="/chat"
						>
							<MessageSquareMoreIcon class="w-5 h-5 text-gray-600" />
							<span class="absolute -top-0.5 -right-0.5 w-4.5 h-4.5 bg-red-500 text-white text-[10px] font-bold rounded-full flex items-center justify-center leading-none">
								2
							</span>
						</Link>
						<Link
							to="/cart"
							class="relative p-2 rounded-full hover:bg-gray-100 transition"
						>
							<ShoppingCartIcon class="w-5 h-5 text-gray-600" />
							<span class="absolute -top-0.5 -right-0.5 w-4.5 h-4.5 bg-accent-500 text-white text-[10px] font-bold rounded-full flex items-center justify-center leading-none">
								3
							</span>
						</Link>
						<Link
							to="/login"
							class="hidden sm:inline-flex items-center gap-1.5 text-sm font-medium text-gray-600 hover:text-brand-600 transition"
						>
							<User class="w-5 h-5" />
							Sign In
						</Link>
					</div>
				</div>
			</nav>

			<Outlet />

			<footer class="bg-brand-950 text-brand-200">
				<Container class="py-12">
					<div class="grid sm:grid-cols-2 lg:grid-cols-5 gap-8">
						<div class="lg:col-span-2">
							<div class="flex items-center gap-2 mb-3">
								<div class="w-8 h-8 rounded-lg bg-brand-600 flex items-center justify-center">
									<svg
										class="w-4 h-4 text-white"
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor"
										stroke-width="2"
									>
										<title>MarketBay</title>
										<path
											stroke-linecap="round"
											stroke-linejoin="round"
											d="M13 10V3L4 14h7v7l9-11h-7z"
										/>
									</svg>
								</div>
								<span class="text-lg font-extrabold text-white tracking-tight">
									Market<span class="text-brand-400">Bay</span>
								</span>
							</div>
							<p class="text-sm leading-relaxed max-w-xs">
								Shop thousands of products from independent sellers. Find unique
								items, great deals, and stores you'll love.
							</p>
							<div class="flex gap-3 mt-5">
								<a
									href={CLIENT_CONSTANTS.SOCIAL_LINKS.TWITTER}
									class="w-8 h-8 rounded-lg bg-white/10 hover:bg-white/20 flex items-center justify-center transition"
									aria-label="Twitter"
								>
									<svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
										<title>Twitter</title>
										<path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
									</svg>
								</a>
								<a
									href={CLIENT_CONSTANTS.SOCIAL_LINKS.INSTAGRAM}
									class="w-8 h-8 rounded-lg bg-white/10 hover:bg-white/20 flex items-center justify-center transition"
									aria-label="Instagram"
								>
									<svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
										<title>Instagram</title>
										<path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
									</svg>
								</a>
								<a
									href={CLIENT_CONSTANTS.SOCIAL_LINKS.FACEBOOK}
									class="w-8 h-8 rounded-lg bg-white/10 hover:bg-white/20 flex items-center justify-center transition"
									aria-label="Facebook"
								>
									<svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
										<title>Facebook</title>
										<path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
									</svg>
								</a>
							</div>
						</div>
						<div>
							<h4 class="text-white font-semibold text-sm mb-3">Shop</h4>
							<ul class="space-y-2 text-sm">
								<li>
									<Link to="/categories" class="hover:text-white transition">
										All Categories
									</Link>
								</li>
								<li>
									<Link
										to="/search"
										search={{ deals: true }}
										class="hover:text-white transition"
									>
										Today's Deals
									</Link>
								</li>
								<li>
									<Link
										to="/search"
										search={{ newArrivals: true }}
										class="hover:text-white transition"
									>
										New Arrivals
									</Link>
								</li>
								<li>
									<Link
										to="/search"
										search={{ bestSellers: true }}
										class="hover:text-white transition"
									>
										Best Sellers
									</Link>
								</li>
								<li>
									<Link to="/stores" class="hover:text-white transition">
										Browse Stores
									</Link>
								</li>
							</ul>
						</div>
						<div>
							<h4 class="text-white font-semibold text-sm mb-3">My Account</h4>
							<ul class="space-y-2 text-sm">
								<li>
									<a href="#" class="hover:text-white transition">
										Order History
									</a>
								</li>
								<li>
									<a href="#" class="hover:text-white transition">
										Saved Items
									</a>
								</li>
								<li>
									<a href="#" class="hover:text-white transition">
										Following
									</a>
								</li>
								<li>
									<a href="#" class="hover:text-white transition">
										Messages
									</a>
								</li>
								<li>
									<a href="#" class="hover:text-white transition">
										Settings
									</a>
								</li>
							</ul>
						</div>
						<div>
							<h4 class="text-white font-semibold text-sm mb-3">Help</h4>
							<ul class="space-y-2 text-sm">
								<li>
									<Link to="/help" class="hover:text-white transition">
										Customer Support
									</Link>
								</li>
								<li>
									<a href="#" class="hover:text-white transition">
										Shipping Info
									</a>
								</li>
								<li>
									<a href="#" class="hover:text-white transition">
										Returns &amp; Refunds
									</a>
								</li>
								<li>
									<Link
										to="/privacy-policy"
										class="hover:text-white transition"
									>
										Privacy Policy
									</Link>
								</li>
								<li>
									<Link
										to="/terms-of-service"
										class="hover:text-white transition"
									>
										Terms of Service
									</Link>
								</li>
							</ul>
						</div>
					</div>
					<div class="border-t border-white/10 mt-10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
						<p class="text-xs text-brand-300">
							&copy; 2026 MarketBay. All rights reserved.
						</p>
						<div class="flex items-center gap-4 text-xs text-brand-300">
							<span class="flex items-center gap-1">
								<svg
									class="w-4 h-4"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
									stroke-width="2"
								>
									<title>Secure Payments</title>
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
									/>
								</svg>
								Secure Payments
							</span>
							<span class="flex items-center gap-1">
								<svg
									class="w-4 h-4"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
									stroke-width="2"
								>
									<title>Buyer Protection</title>
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
									/>
								</svg>
								Buyer Protection
							</span>
						</div>
					</div>
				</Container>
			</footer>
		</>
	);
};
