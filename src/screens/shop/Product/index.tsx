import { linkOptions } from "@tanstack/solid-router";
import { Breadcrumb } from "@/ui/breadcrumb";

export const ShopProductScreen = () => {
	return (
		<>
			<Breadcrumb
				items={linkOptions([
					{ label: "Home", to: "/" },
					{ label: "Electronics", to: "/categories" },
					{
						label: "Headphones",
						to: "/category/$categorySlug",
						params: { categorySlug: "todo" },
					},
					{
						label: "Pro Studio Wireless Headphones",
						to: "/product/$productSlug",
						params: { productSlug: "pro-studio-wireless-headphones" },
					},
				])}
			/>

			<main class="max-w-7xl mx-auto px-4 py-8 lg:py-12">
				<div class="grid lg:grid-cols-2 gap-8 lg:gap-14">
					<div class="space-y-4">
						<div class="aspect-square rounded-2xl bg-linear-to-br from-blue-50 to-indigo-100 flex items-center justify-center overflow-hidden border border-gray-100">
							<svg
								class="w-40 h-40 text-brand-200"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
								stroke-width="0.5"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									d="M19.114 5.636a9 9 0 010 12.728M16.463 8.288a5.25 5.25 0 010 7.424M6.75 8.25l4.72-4.72a.75.75 0 011.28.53v15.88a.75.75 0 01-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.01 9.01 0 012.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75z"
								/>
							</svg>
						</div>
						<div class="flex gap-3">
							<button class="thumb thumb-active w-20 h-20 rounded-xl bg-linear-to-br from-blue-50 to-indigo-100 border-2 border-brand-500 flex items-center justify-center flex-shrink-0 transition">
								<svg
									class="w-8 h-8 text-brand-300"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
									stroke-width="1"
								>
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										d="M19.114 5.636a9 9 0 010 12.728M16.463 8.288a5.25 5.25 0 010 7.424M6.75 8.25l4.72-4.72a.75.75 0 011.28.53v15.88a.75.75 0 01-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.01 9.01 0 012.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75z"
									/>
								</svg>
							</button>
							<button class="thumb w-20 h-20 rounded-xl bg-linear-to-br from-slate-50 to-gray-100 border-2 border-gray-200 flex items-center justify-center flex-shrink-0 transition">
								<svg
									class="w-8 h-8 text-gray-300"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
									stroke-width="1"
								>
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007z"
									/>
								</svg>
							</button>
							<button class="thumb w-20 h-20 rounded-xl bg-linear-to-br from-violet-50 to-purple-100 border-2 border-gray-200 flex items-center justify-center flex-shrink-0 transition">
								<svg
									class="w-8 h-8 text-violet-300"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
									stroke-width="1"
								>
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										d="M21 7.5l-2.25-1.313M21 7.5v2.25m0-2.25l-2.25 1.313M3 7.5l2.25-1.313M3 7.5l2.25 1.313M3 7.5v2.25m9 3l2.25-1.313M12 12.75l-2.25-1.313M12 12.75V15m0 6.75l2.25-1.313M12 21.75V19.5m0 2.25l-2.25-1.313m0-16.875L12 2.25l2.25 1.313M21 14.25v2.25l-2.25 1.313m-13.5 0L3 16.5v-2.25"
									/>
								</svg>
							</button>
							<button class="thumb w-20 h-20 rounded-xl bg-linear-to-br from-amber-50 to-orange-100 border-2 border-gray-200 flex items-center justify-center flex-shrink-0 transition">
								<svg
									class="w-8 h-8 text-amber-300"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
									stroke-width="1"
								>
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
									/>
								</svg>
							</button>
						</div>
					</div>

					<div>
						<a
							href="store.html"
							class="inline-flex items-center gap-2 mb-3 group"
						>
							<div class="w-7 h-7 rounded-lg bg-linear-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-white text-[10px] font-bold">
								TV
							</div>
							<span class="text-sm font-medium text-brand-600 group-hover:underline">
								TechVault
							</span>
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
						</a>

						<h1 class="text-2xl lg:text-3xl font-extrabold text-gray-900 leading-tight">
							Pro Studio Wireless Headphones — Active Noise Cancelling
						</h1>

						<div class="flex items-center gap-3 mt-3">
							<div class="flex items-center gap-1">
								<div class="flex text-accent-500">
									<svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
										<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
									</svg>
									<svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
										<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
									</svg>
									<svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
										<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
									</svg>
									<svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
										<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
									</svg>
									<svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
										<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
									</svg>
								</div>
								<span class="text-sm font-semibold text-gray-700">4.9</span>
							</div>
							<a href="#reviews" class="text-sm text-brand-600 hover:underline">
								243 reviews
							</a>
							<span class="text-gray-300">|</span>
							<span class="text-sm text-gray-500">1.2k sold</span>
						</div>

						<div class="mt-5 flex items-baseline gap-3">
							<span class="text-3xl font-extrabold text-gray-900">$59.99</span>
							<span class="text-lg text-gray-400 line-through">$99.99</span>
							<span class="px-2.5 py-1 bg-red-50 text-red-600 text-sm font-bold rounded-lg">
								-40%
							</span>
						</div>
						<p class="text-xs text-emerald-600 font-medium mt-1.5 flex items-center gap-1">
							<svg class="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20">
								<path
									fill-rule="evenodd"
									d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
									clip-rule="evenodd"
								/>
							</svg>
							In stock — ships within 24 hours
						</p>

						<hr class="my-6 border-gray-100" />

						<div class="mb-5">
							<p class="text-sm font-medium text-gray-700 mb-2.5">
								Color:{" "}
								<span class="text-gray-900 font-semibold">Matte Black</span>
							</p>
							<div class="flex gap-2.5">
								<button
									class="w-9 h-9 rounded-full bg-gray-900 ring-2 ring-brand-500 ring-offset-2 transition"
									aria-label="Matte Black"
								></button>
								<button
									class="w-9 h-9 rounded-full bg-white border border-gray-200 hover:ring-2 hover:ring-gray-300 hover:ring-offset-2 transition"
									aria-label="Pearl White"
								></button>
								<button
									class="w-9 h-9 rounded-full bg-blue-800 hover:ring-2 hover:ring-blue-400 hover:ring-offset-2 transition"
									aria-label="Navy Blue"
								></button>
								<button
									class="w-9 h-9 rounded-full bg-rose-400 hover:ring-2 hover:ring-rose-300 hover:ring-offset-2 transition"
									aria-label="Rose Gold"
								></button>
							</div>
						</div>

						<div class="mb-6">
							<p class="text-sm font-medium text-gray-700 mb-2.5">Quantity</p>
							<div class="inline-flex items-center border border-gray-200 rounded-xl overflow-hidden">
								<button class="w-10 h-10 flex items-center justify-center text-gray-500 hover:bg-gray-50 transition">
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
											d="M20 12H4"
										/>
									</svg>
								</button>
								<span class="w-12 h-10 flex items-center justify-center text-sm font-semibold text-gray-900 border-x border-gray-200">
									1
								</span>
								<button class="w-10 h-10 flex items-center justify-center text-gray-500 hover:bg-gray-50 transition">
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
								</button>
							</div>
						</div>

						<div class="flex gap-3 mb-6">
							<button class="flex-1 py-3.5 bg-brand-600 hover:bg-brand-700 text-white font-semibold rounded-xl transition shadow-sm flex items-center justify-center gap-2 text-sm">
								<svg
									class="w-5 h-5"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
									stroke-width="2"
								>
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 100 4 2 2 0 000-4z"
									/>
								</svg>
								Add to Cart
							</button>
							<button class="flex-1 py-3.5 bg-accent-500 hover:bg-accent-600 text-white font-semibold rounded-xl transition shadow-sm flex items-center justify-center gap-2 text-sm">
								Buy Now
							</button>
							<button
								class="p-3.5 border border-gray-200 hover:bg-gray-50 text-gray-500 rounded-xl transition"
								aria-label="Save"
							>
								<svg
									class="w-5 h-5"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
									stroke-width="2"
								>
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
									/>
								</svg>
							</button>
						</div>

						<a
							href="#"
							class="inline-flex items-center gap-2 text-sm font-medium text-brand-600 hover:text-brand-700 transition mb-6"
						>
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
									d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
								/>
							</svg>
							Chat with seller about this product
						</a>

						<hr class="my-6 border-gray-100" />

						<div class="grid grid-cols-2 gap-4">
							<div class="flex items-start gap-3">
								<div class="w-9 h-9 rounded-lg bg-brand-50 flex items-center justify-center flex-shrink-0">
									<svg
										class="w-4.5 h-4.5 text-brand-600"
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor"
										stroke-width="2"
									>
										<path
											stroke-linecap="round"
											stroke-linejoin="round"
											d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12"
										/>
									</svg>
								</div>
								<div>
									<p class="text-sm font-semibold text-gray-900">
										Free Shipping
									</p>
									<p class="text-xs text-gray-500">Orders over $50</p>
								</div>
							</div>
							<div class="flex items-start gap-3">
								<div class="w-9 h-9 rounded-lg bg-emerald-50 flex items-center justify-center flex-shrink-0">
									<svg
										class="w-5 h-5 text-emerald-600"
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor"
										stroke-width="2"
									>
										<path
											stroke-linecap="round"
											stroke-linejoin="round"
											d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"
										/>
									</svg>
								</div>
								<div>
									<p class="text-sm font-semibold text-gray-900">
										Buyer Protection
									</p>
									<p class="text-xs text-gray-500">
										Full refund if not as described
									</p>
								</div>
							</div>
							<div class="flex items-start gap-3">
								<div class="w-9 h-9 rounded-lg bg-amber-50 flex items-center justify-center flex-shrink-0">
									<svg
										class="w-5 h-5 text-amber-600"
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor"
										stroke-width="2"
									>
										<path
											stroke-linecap="round"
											stroke-linejoin="round"
											d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182"
										/>
									</svg>
								</div>
								<div>
									<p class="text-sm font-semibold text-gray-900">
										30-Day Returns
									</p>
									<p class="text-xs text-gray-500">
										Easy returns &amp; exchanges
									</p>
								</div>
							</div>
							<div class="flex items-start gap-3">
								<div class="w-9 h-9 rounded-lg bg-violet-50 flex items-center justify-center flex-shrink-0">
									<svg
										class="w-5 h-5 text-violet-600"
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor"
										stroke-width="2"
									>
										<path
											stroke-linecap="round"
											stroke-linejoin="round"
											d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
										/>
									</svg>
								</div>
								<div>
									<p class="text-sm font-semibold text-gray-900">
										Ships in 24h
									</p>
									<p class="text-xs text-gray-500">Fast processing</p>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div class="mt-14 border-t border-gray-100 pt-10">
					<div class="flex gap-6 border-b border-gray-100 mb-8 overflow-x-auto scrollbar-hide">
						<button class="whitespace-nowrap pb-3 text-sm font-semibold text-brand-600 border-b-2 border-brand-600">
							Description
						</button>
						<button class="whitespace-nowrap pb-3 text-sm font-medium text-gray-400 border-b-2 border-transparent hover:text-gray-600 transition">
							Specifications
						</button>
						<button class="whitespace-nowrap pb-3 text-sm font-medium text-gray-400 border-b-2 border-transparent hover:text-gray-600 transition">
							Reviews (243)
						</button>
						<button class="whitespace-nowrap pb-3 text-sm font-medium text-gray-400 border-b-2 border-transparent hover:text-gray-600 transition">
							Shipping &amp; Returns
						</button>
					</div>

					<div class="grid lg:grid-cols-3 gap-10">
						<div class="lg:col-span-2 prose prose-sm prose-gray max-w-none">
							<h3 class="text-lg font-bold text-gray-900 mb-3">
								Immersive Sound, Zero Distractions
							</h3>
							<p class="text-gray-600 leading-relaxed mb-4">
								Experience studio-quality audio with the Pro Studio Wireless
								Headphones. Featuring advanced Active Noise Cancellation (ANC),
								40mm custom drivers, and up to 35 hours of battery life, these
								headphones are designed for audiophiles, commuters, and remote
								workers alike.
							</p>
							<p class="text-gray-600 leading-relaxed mb-6">
								The memory-foam ear cushions provide all-day comfort, while the
								foldable design makes them easy to carry anywhere. Bluetooth 5.3
								ensures a stable, lag-free connection with any device.
							</p>

							<h4 class="text-base font-bold text-gray-900 mb-3">
								Key Features
							</h4>
							<ul class="space-y-2.5 mb-6">
								<li class="flex items-start gap-2 text-sm text-gray-600">
									<svg
										class="w-4 h-4 text-emerald-500 mt-0.5 flex-shrink-0"
										fill="currentColor"
										viewBox="0 0 20 20"
									>
										<path
											fill-rule="evenodd"
											d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
											clip-rule="evenodd"
										/>
									</svg>
									<span>Active Noise Cancellation with transparency mode</span>
								</li>
								<li class="flex items-start gap-2 text-sm text-gray-600">
									<svg
										class="w-4 h-4 text-emerald-500 mt-0.5 flex-shrink-0"
										fill="currentColor"
										viewBox="0 0 20 20"
									>
										<path
											fill-rule="evenodd"
											d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
											clip-rule="evenodd"
										/>
									</svg>
									<span>
										40mm custom neodymium drivers for rich, detailed audio
									</span>
								</li>
								<li class="flex items-start gap-2 text-sm text-gray-600">
									<svg
										class="w-4 h-4 text-emerald-500 mt-0.5 flex-shrink-0"
										fill="currentColor"
										viewBox="0 0 20 20"
									>
										<path
											fill-rule="evenodd"
											d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
											clip-rule="evenodd"
										/>
									</svg>
									<span>35-hour battery — 5 min charge = 3 hours playback</span>
								</li>
								<li class="flex items-start gap-2 text-sm text-gray-600">
									<svg
										class="w-4 h-4 text-emerald-500 mt-0.5 flex-shrink-0"
										fill="currentColor"
										viewBox="0 0 20 20"
									>
										<path
											fill-rule="evenodd"
											d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
											clip-rule="evenodd"
										/>
									</svg>
									<span>Bluetooth 5.3 with multipoint (connect 2 devices)</span>
								</li>
								<li class="flex items-start gap-2 text-sm text-gray-600">
									<svg
										class="w-4 h-4 text-emerald-500 mt-0.5 flex-shrink-0"
										fill="currentColor"
										viewBox="0 0 20 20"
									>
										<path
											fill-rule="evenodd"
											d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
											clip-rule="evenodd"
										/>
									</svg>
									<span>
										Foldable design with premium carrying case included
									</span>
								</li>
							</ul>
						</div>

						<div class="bg-gray-50 rounded-2xl p-6">
							<h4 class="text-sm font-bold text-gray-900 mb-4">
								Specifications
							</h4>
							<dl class="space-y-3 text-sm">
								<div class="flex justify-between">
									<dt class="text-gray-500">Driver Size</dt>
									<dd class="font-medium text-gray-900">40mm</dd>
								</div>
								<hr class="border-gray-200" />
								<div class="flex justify-between">
									<dt class="text-gray-500">Frequency</dt>
									<dd class="font-medium text-gray-900">20Hz – 40kHz</dd>
								</div>
								<hr class="border-gray-200" />
								<div class="flex justify-between">
									<dt class="text-gray-500">Battery</dt>
									<dd class="font-medium text-gray-900">35 hours</dd>
								</div>
								<hr class="border-gray-200" />
								<div class="flex justify-between">
									<dt class="text-gray-500">Bluetooth</dt>
									<dd class="font-medium text-gray-900">5.3</dd>
								</div>
								<hr class="border-gray-200" />
								<div class="flex justify-between">
									<dt class="text-gray-500">Weight</dt>
									<dd class="font-medium text-gray-900">254g</dd>
								</div>
								<hr class="border-gray-200" />
								<div class="flex justify-between">
									<dt class="text-gray-500">Charging</dt>
									<dd class="font-medium text-gray-900">USB-C</dd>
								</div>
								<hr class="border-gray-200" />
								<div class="flex justify-between">
									<dt class="text-gray-500">Noise Cancel</dt>
									<dd class="font-medium text-gray-900">Hybrid ANC</dd>
								</div>
								<hr class="border-gray-200" />
								<div class="flex justify-between">
									<dt class="text-gray-500">Colors</dt>
									<dd class="font-medium text-gray-900">4 options</dd>
								</div>
							</dl>
						</div>
					</div>
				</div>

				<section id="reviews" class="mt-14 border-t border-gray-100 pt-10">
					<div class="flex items-end justify-between mb-8">
						<div>
							<h2 class="text-xl font-bold text-gray-900">Customer Reviews</h2>
							<p class="text-sm text-gray-500 mt-0.5">
								243 reviews for this product
							</p>
						</div>
						<button class="hidden sm:inline-flex items-center gap-2 px-4 py-2 border border-gray-200 rounded-xl text-sm font-semibold text-gray-600 hover:bg-gray-50 transition">
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
									d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931z"
								/>
							</svg>
							Write a Review
						</button>
					</div>

					<div class="flex flex-col sm:flex-row gap-8 mb-8">
						<div class="flex items-center gap-6 bg-gray-50 rounded-2xl p-6 sm:w-64 flex-shrink-0">
							<div class="text-center">
								<div class="text-4xl font-extrabold text-gray-900">4.9</div>
								<div class="flex justify-center text-accent-500 mt-1 gap-0.5">
									<svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
										<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
									</svg>
									<svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
										<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
									</svg>
									<svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
										<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
									</svg>
									<svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
										<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
									</svg>
									<svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
										<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
									</svg>
								</div>
							</div>
							<div class="flex-1 space-y-1.5">
								<div class="flex items-center gap-2">
									<span class="text-xs text-gray-500 w-4">5</span>
									<div class="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
										<div
											class="h-full bg-accent-500 rounded-full"
											style="width:85%"
										></div>
									</div>
								</div>
								<div class="flex items-center gap-2">
									<span class="text-xs text-gray-500 w-4">4</span>
									<div class="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
										<div
											class="h-full bg-accent-500 rounded-full"
											style="width:10%"
										></div>
									</div>
								</div>
								<div class="flex items-center gap-2">
									<span class="text-xs text-gray-500 w-4">3</span>
									<div class="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
										<div
											class="h-full bg-accent-500 rounded-full"
											style="width:3%"
										></div>
									</div>
								</div>
								<div class="flex items-center gap-2">
									<span class="text-xs text-gray-500 w-4">2</span>
									<div class="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
										<div
											class="h-full bg-accent-500 rounded-full"
											style="width:1%"
										></div>
									</div>
								</div>
								<div class="flex items-center gap-2">
									<span class="text-xs text-gray-500 w-4">1</span>
									<div class="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
										<div
											class="h-full bg-accent-500 rounded-full"
											style="width:1%"
										></div>
									</div>
								</div>
							</div>
						</div>

						<div class="flex-1 space-y-6">
							<div class="border-b border-gray-100 pb-6">
								<div class="flex items-center gap-3 mb-2">
									<div class="w-8 h-8 rounded-full bg-brand-100 text-brand-600 flex items-center justify-center text-xs font-bold">
										JM
									</div>
									<div>
										<p class="text-sm font-semibold text-gray-900">James M.</p>
										<div class="flex items-center gap-1.5">
											<div class="flex text-accent-500">
												<svg
													class="w-3 h-3"
													fill="currentColor"
													viewBox="0 0 20 20"
												>
													<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
												</svg>
												<svg
													class="w-3 h-3"
													fill="currentColor"
													viewBox="0 0 20 20"
												>
													<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
												</svg>
												<svg
													class="w-3 h-3"
													fill="currentColor"
													viewBox="0 0 20 20"
												>
													<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
												</svg>
												<svg
													class="w-3 h-3"
													fill="currentColor"
													viewBox="0 0 20 20"
												>
													<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
												</svg>
												<svg
													class="w-3 h-3"
													fill="currentColor"
													viewBox="0 0 20 20"
												>
													<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
												</svg>
											</div>
											<span class="text-[11px] text-gray-400">2 weeks ago</span>
											<span class="text-[11px] text-emerald-600 font-medium flex items-center gap-0.5">
												<svg
													class="w-3 h-3"
													fill="currentColor"
													viewBox="0 0 20 20"
												>
													<path
														fill-rule="evenodd"
														d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
														clip-rule="evenodd"
													/>
												</svg>{" "}
												Verified Purchase
											</span>
										</div>
									</div>
								</div>
								<p class="text-sm text-gray-600 leading-relaxed">
									Incredible quality for the price. The noise cancellation is
									top-notch — completely blocks out office chatter and subway
									noise. Build quality feels premium, not plastic-y at all.
									Battery easily lasts 3 days with moderate use. The quick
									charge is a lifesaver too. Highly recommend.
								</p>
								<p class="text-xs text-gray-400 mt-2">Color: Matte Black</p>
							</div>

							<div class="border-b border-gray-100 pb-6">
								<div class="flex items-center gap-3 mb-2">
									<div class="w-8 h-8 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center text-xs font-bold">
										SL
									</div>
									<div>
										<p class="text-sm font-semibold text-gray-900">Sarah L.</p>
										<div class="flex items-center gap-1.5">
											<div class="flex text-accent-500">
												<svg
													class="w-3 h-3"
													fill="currentColor"
													viewBox="0 0 20 20"
												>
													<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
												</svg>
												<svg
													class="w-3 h-3"
													fill="currentColor"
													viewBox="0 0 20 20"
												>
													<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
												</svg>
												<svg
													class="w-3 h-3"
													fill="currentColor"
													viewBox="0 0 20 20"
												>
													<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
												</svg>
												<svg
													class="w-3 h-3"
													fill="currentColor"
													viewBox="0 0 20 20"
												>
													<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
												</svg>
												<svg
													class="w-3 h-3 text-gray-200"
													fill="currentColor"
													viewBox="0 0 20 20"
												>
													<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
												</svg>
											</div>
											<span class="text-[11px] text-gray-400">1 month ago</span>
											<span class="text-[11px] text-emerald-600 font-medium flex items-center gap-0.5">
												<svg
													class="w-3 h-3"
													fill="currentColor"
													viewBox="0 0 20 20"
												>
													<path
														fill-rule="evenodd"
														d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
														clip-rule="evenodd"
													/>
												</svg>{" "}
												Verified Purchase
											</span>
										</div>
									</div>
								</div>
								<p class="text-sm text-gray-600 leading-relaxed">
									Really comfortable for long work-from-home sessions. The
									cushions don't make my ears sweat like my old pair. Sound
									quality is excellent for the price. Only minor note: the
									Bluetooth multipoint switching could be slightly faster, but
									it works. I chatted with the seller beforehand and they were
									super helpful.
								</p>
								<p class="text-xs text-gray-400 mt-2">Color: Pearl White</p>
							</div>

							<a
								href="#"
								class="inline-flex items-center gap-1 text-sm font-semibold text-brand-600 hover:text-brand-700 transition"
							>
								View all 243 reviews{" "}
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
				</section>

				<section class="mt-14 border-t border-gray-100 pt-10">
					<div class="flex items-end justify-between mb-6">
						<div>
							<h2 class="text-xl font-bold text-gray-900">
								More from TechVault
							</h2>
							<p class="text-sm text-gray-500 mt-0.5">
								Other products from this seller
							</p>
						</div>
						<a
							href="store.html"
							class="text-sm font-semibold text-brand-600 hover:text-brand-700 transition hidden sm:inline-flex items-center gap-1"
						>
							Visit Store <span>&rarr;</span>
						</a>
					</div>
					<div class="grid grid-cols-2 lg:grid-cols-4 gap-4">
						<div class="product-card bg-white rounded-2xl border border-gray-100 overflow-hidden transition-all duration-300 cursor-pointer">
							<div class="relative aspect-square bg-gray-50">
								<div class="absolute inset-0 bg-linear-to-br from-slate-50 to-gray-100 flex items-center justify-center">
									<svg
										class="w-12 h-12 text-gray-300"
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor"
										stroke-width="1"
									>
										<path
											stroke-linecap="round"
											stroke-linejoin="round"
											d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
										/>
									</svg>
								</div>
								<span class="absolute top-2 left-2 px-2 py-0.5 bg-red-500 text-white text-[10px] font-bold rounded-md">
									-25%
								</span>
							</div>
							<div class="p-3">
								<h3 class="text-sm font-semibold text-gray-900 line-clamp-2">
									Ultra HD 27" Monitor
								</h3>
								<div class="flex items-center justify-between mt-2">
									<div>
										<span class="text-base font-bold text-gray-900">$299</span>
										<span class="text-xs text-gray-400 line-through ml-1">
											$399
										</span>
									</div>
									<button class="p-1.5 bg-brand-600 hover:bg-brand-700 text-white rounded-lg transition">
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
												d="M12 4v16m8-8H4"
											/>
										</svg>
									</button>
								</div>
							</div>
						</div>
						<div class="product-card bg-white rounded-2xl border border-gray-100 overflow-hidden transition-all duration-300 cursor-pointer">
							<div class="relative aspect-square bg-gray-50">
								<div class="absolute inset-0 bg-linear-to-br from-violet-50 to-purple-100 flex items-center justify-center">
									<svg
										class="w-12 h-12 text-violet-200"
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor"
										stroke-width="1"
									>
										<path
											stroke-linecap="round"
											stroke-linejoin="round"
											d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
										/>
									</svg>
								</div>
							</div>
							<div class="p-3">
								<h3 class="text-sm font-semibold text-gray-900 line-clamp-2">
									MagSafe Case — Frosted
								</h3>
								<div class="flex items-center justify-between mt-2">
									<span class="text-base font-bold text-gray-900">$19.99</span>
									<button class="p-1.5 bg-brand-600 hover:bg-brand-700 text-white rounded-lg transition">
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
												d="M12 4v16m8-8H4"
											/>
										</svg>
									</button>
								</div>
							</div>
						</div>
						<div class="product-card bg-white rounded-2xl border border-gray-100 overflow-hidden transition-all duration-300 cursor-pointer">
							<div class="relative aspect-square bg-gray-50">
								<div class="absolute inset-0 bg-linear-to-br from-cyan-50 to-sky-100 flex items-center justify-center">
									<svg
										class="w-12 h-12 text-cyan-200"
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor"
										stroke-width="1"
									>
										<path
											stroke-linecap="round"
											stroke-linejoin="round"
											d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5M9 11.25v1.5M12 9v3.75m3-6v6"
										/>
									</svg>
								</div>
							</div>
							<div class="p-3">
								<h3 class="text-sm font-semibold text-gray-900 line-clamp-2">
									Mechanical Keyboard
								</h3>
								<div class="flex items-center justify-between mt-2">
									<span class="text-base font-bold text-gray-900">$89.99</span>
									<button class="p-1.5 bg-brand-600 hover:bg-brand-700 text-white rounded-lg transition">
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
												d="M12 4v16m8-8H4"
											/>
										</svg>
									</button>
								</div>
							</div>
						</div>
						<div class="product-card bg-white rounded-2xl border border-gray-100 overflow-hidden transition-all duration-300 cursor-pointer">
							<div class="relative aspect-square bg-gray-50">
								<div class="absolute inset-0 bg-linear-to-br from-emerald-50 to-teal-100 flex items-center justify-center">
									<svg
										class="w-12 h-12 text-emerald-200"
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor"
										stroke-width="1"
									>
										<path
											stroke-linecap="round"
											stroke-linejoin="round"
											d="M21 7.5l-2.25-1.313M21 7.5v2.25m0-2.25l-2.25 1.313M3 7.5l2.25-1.313M3 7.5l2.25 1.313M3 7.5v2.25m9 3l2.25-1.313M12 12.75l-2.25-1.313M12 12.75V15m0 6.75l2.25-1.313M12 21.75V19.5m0 2.25l-2.25-1.313m0-16.875L12 2.25l2.25 1.313M21 14.25v2.25l-2.25 1.313m-13.5 0L3 16.5v-2.25"
										/>
									</svg>
								</div>
								<span class="absolute top-2 left-2 px-2 py-0.5 bg-red-500 text-white text-[10px] font-bold rounded-md">
									-15%
								</span>
							</div>
							<div class="p-3">
								<h3 class="text-sm font-semibold text-gray-900 line-clamp-2">
									Bluetooth Speaker
								</h3>
								<div class="flex items-center justify-between mt-2">
									<div>
										<span class="text-base font-bold text-gray-900">
											$42.49
										</span>
										<span class="text-xs text-gray-400 line-through ml-1">
											$49.99
										</span>
									</div>
									<button class="p-1.5 bg-brand-600 hover:bg-brand-700 text-white rounded-lg transition">
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
												d="M12 4v16m8-8H4"
											/>
										</svg>
									</button>
								</div>
							</div>
						</div>
					</div>
				</section>
			</main>
		</>
	);
};
