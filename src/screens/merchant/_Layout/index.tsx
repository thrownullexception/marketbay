import { getRouteApi, Link, Outlet } from "@tanstack/solid-router";

import { Grid5 } from "@/ui/grid";
import { Container } from "@/ui/layout";
import { NavSection } from "./NavSection";

export const MerchantLayout = () => {
	const routeApi = getRouteApi("/merchant/$storeId/");
	const params = routeApi.useParams();
	const storeId = params().storeId;
	return (
		<>
			<div class="bg-brand-950 text-brand-200 text-xs py-1.5">
				<div class="max-w-7xl mx-auto px-4 flex items-center justify-between">
					<div class="flex items-center gap-2">
						<span class="inline-flex items-center gap-1 px-2 py-0.5 bg-accent-500/20 text-accent-300 text-[10px] font-bold rounded-full uppercase">
							Seller Mode
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
								aria-hidden="true"
							>
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

					<div class="flex-1 max-w-xl mx-auto hidden sm:block">
						<div class="relative">
							<input
								type="text"
								placeholder="Search orders, products, customers..."
								class="w-full pl-10 pr-4 py-2.5 rounded-full border border-gray-200 bg-gray-50 text-sm focus:outline-none focus:ring-2 focus:ring-brand-400 focus:border-transparent transition"
							/>
							<svg
								class="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
								stroke-width="2"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
								/>
							</svg>
						</div>
					</div>

					<div class="flex items-center gap-3">
						<button
							class="relative p-2 rounded-full hover:bg-gray-100 transition"
							aria-label="Notifications"
						>
							<svg
								class="w-5 h-5 text-gray-600"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
								stroke-width="2"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0"
								/>
							</svg>
							<span class="absolute -top-0.5 -right-0.5 w-5 h-5 bg-red-500 text-white text-[10px] font-bold rounded-full flex items-center justify-center leading-none">
								4
							</span>
						</button>
						<a
							href="messages.html"
							class="relative p-2 rounded-full hover:bg-gray-100 transition"
							aria-label="Messages"
						>
							<svg
								class="w-5 h-5 text-gray-600"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
								stroke-width="2"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
								/>
							</svg>
							<span class="absolute -top-0.5 -right-0.5 w-5 h-5 bg-brand-600 text-white text-[10px] font-bold rounded-full flex items-center justify-center leading-none">
								6
							</span>
						</a>
						<div class="hidden sm:flex items-center gap-2 pl-2 border-l border-gray-200 ml-1">
							<div class="w-8 h-8 rounded-xl bg-linear-to-br from-blue-500 to-indigo-600 text-white flex items-center justify-center text-xs font-bold">
								TV
							</div>
							<div class="text-left">
								<p class="text-sm font-semibold text-gray-900 leading-tight">
									TechVault
								</p>
								<p class="text-[10px] text-gray-400 leading-tight">
									Seller Account
								</p>
							</div>
							<svg
								class="w-4 h-4 text-gray-400"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
								stroke-width="2"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									d="M19 9l-7 7-7-7"
								/>
							</svg>
						</div>
					</div>
				</div>
			</nav>

			<Container class="py-8 lg:py-10">
				<Grid5>
					<div class="lg:col-span-1">
						<div class="bg-white rounded-2xl border border-gray-100 overflow-hidden sticky top-24">
							<div class="p-5 border-b border-gray-100">
								<div class="flex items-center gap-3">
									<div class="w-12 h-12 rounded-xl bg-linear-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-white text-sm font-bold flex-shrink-0 shadow-md shadow-blue-500/20">
										TV
									</div>
									<div class="min-w-0">
										<h2 class="text-sm font-bold text-gray-900 truncate">
											TechVault
										</h2>
										<div class="flex items-center gap-1 mt-0.5">
											<span class="inline-flex items-center gap-0.5 px-1.5 py-0.5 bg-blue-50 text-blue-600 text-[10px] font-semibold rounded-full border border-blue-100">
												<svg
													class="w-2.5 h-2.5"
													fill="currentColor"
													viewBox="0 0 20 20"
												>
													<path
														fill-rule="evenodd"
														d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
														clip-rule="evenodd"
													/>
												</svg>
												Verified
											</span>
										</div>
									</div>
								</div>
								<a
									href="store.html"
									class="mt-3 flex items-center gap-1.5 text-xs font-medium text-brand-600 hover:text-brand-700 transition"
								>
									<svg
										class="w-3.5 h-3.5"
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor"
										stroke-width="2"
									>
										<path
											stroke-linecap="round"
											stroke-linejoin="round"
											d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
										/>
									</svg>
									View Storefront
								</a>
							</div>
							<NavSection storeId={storeId} />
						</div>
					</div>

					<div class="lg:col-span-4 space-y-6">
						{/* <div class="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
							<div>
								<h1 class="text-2xl font-extrabold text-gray-900">Dashboard</h1>
								<p class="text-sm text-gray-500 mt-0.5">
									Welcome back! Here's how your store is performing.
								</p>
							</div>
							<div class="flex items-center gap-2">
								<button class="px-4 py-2.5 bg-brand-600 hover:bg-brand-700 text-white text-sm font-semibold rounded-xl transition shadow-sm flex items-center gap-2">
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
											d="M12 4v16m8-8H4"
										/>
									</svg>
									Add Product
								</button>
								<button class="px-4 py-2.5 bg-gray-100 hover:bg-gray-200 text-gray-700 text-sm font-semibold rounded-xl transition flex items-center gap-2">
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
											d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5"
										/>
									</svg>
									Export
								</button>
							</div>
						</div> */}
						<Outlet />
					</div>
				</Grid5>
			</Container>
			<footer class="bg-brand-950 text-brand-200">
				<Container class="py-10">
					<div class="flex flex-col sm:flex-row items-center justify-between gap-4">
						<div class="flex items-center gap-2">
							<div class="w-8 h-8 rounded-lg bg-brand-600 flex items-center justify-center">
								<svg
									aria-hidden={true}
									class="w-4 h-4 text-white"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
									stroke-width="2"
								>
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
						<div class="flex items-center gap-6 text-xs text-brand-300">
							<Link to="/help" class="hover:text-white transition">
								Help Center
							</Link>
							<Link to="/privacy-policy" class="hover:text-white transition">
								Privacy
							</Link>
							<Link
								to="/store-terms-of-service"
								class="hover:text-white transition"
							>
								Store Policies
							</Link>
						</div>
						<p class="text-xs text-brand-400">&copy; 2026 MarketBay</p>
					</div>
				</Container>
			</footer>
		</>
	);
};
