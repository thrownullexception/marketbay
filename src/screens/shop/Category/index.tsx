import { linkOptions } from "@tanstack/solid-router";
import { For } from "solid-js";
import {
	ProductCard,
	type ProductCardData,
} from "@/screens/_components/product-card";
import { SearchToolbar } from "@/screens/_components/search-toolbar";
import { Breadcrumb } from "@/ui/breadcrumb";
import { Pagination } from "@/ui/pagination";

const CATEGORY_PRODUCTS: ProductCardData[] = [
	{
		storeName: "TechVault",
		name: "Pro Studio Wireless Headphones — Active Noise Cancelling",
		rating: "4.9",
		ratingCount: "243",
		price: "$59.99",
		originalPrice: "$99.99",
		imageGradient: "from-blue-50 to-indigo-100",
		iconColor: "text-brand-200",
		badge: "-40%",
	},
	{
		storeName: "TechVault",
		name: `Ultra HD 27" Monitor — 4K IPS Display`,
		rating: "4.9",
		ratingCount: "128",
		price: "$299",
		originalPrice: "$399",
		imageGradient: "from-slate-50 to-gray-100",
		iconColor: "text-gray-300",
		badge: "-25%",
	},
	{
		storeName: "TechVault",
		name: "MagSafe Phone Case — Frosted Clear",
		rating: "4.8",
		ratingCount: "890",
		price: "$19.99",
		imageGradient: "from-violet-50 to-purple-100",
		iconColor: "text-violet-200",
		wishlisted: true,
	},
	{
		storeName: "GadgetWorld",
		name: "Mechanical Keyboard — RGB Hot-Swap",
		rating: "4.7",
		ratingCount: "156",
		price: "$89.99",
		imageGradient: "from-cyan-50 to-sky-100",
		iconColor: "text-cyan-200",
		badge: "New",
		badgeColor: "bg-brand-600",
	},
	{
		storeName: "SoundLab",
		name: "Portable Bluetooth Speaker — Waterproof IPX7",
		rating: "4.6",
		ratingCount: "312",
		price: "$42.49",
		originalPrice: "$49.99",
		imageGradient: "from-emerald-50 to-teal-100",
		iconColor: "text-emerald-200",
		badge: "-15%",
	},
	{
		storeName: "HomeHaven",
		name: "Smart LED Floor Lamp — Dimmable WiFi",
		rating: "4.9",
		ratingCount: "1.2k",
		price: "$54.99",
		imageGradient: "from-amber-50 to-orange-100",
		iconColor: "text-amber-200",
	},
	{
		storeName: "PixelHub",
		name: "Action Camera 4K — Underwater 30m",
		rating: "4.5",
		ratingCount: "87",
		price: "$79.99",
		originalPrice: "$99.99",
		imageGradient: "from-pink-50 to-rose-100",
		iconColor: "text-rose-200",
		badge: "-20%",
	},
	{
		storeName: "TechVault",
		name: "Fast Wireless Charger Pad — 15W MagSafe",
		rating: "4.7",
		ratingCount: "445",
		price: "$24.99",
		imageGradient: "from-indigo-50 to-blue-100",
		iconColor: "text-indigo-200",
	},
	{
		storeName: "HomeHaven",
		name: "Smart WiFi Router — Mesh System 3-Pack",
		rating: "4.8",
		ratingCount: "203",
		price: "$149.00",
		imageGradient: "from-teal-50 to-emerald-100",
		iconColor: "text-teal-200",
		badge: "New",
		badgeColor: "bg-brand-600",
	},
];

export const CategoryScreen = () => {
	return (
		<>
			<Breadcrumb
				items={linkOptions([
					{ label: "Home", to: "/" },
					{
						label: "Electronics",
						to: "/category/$categorySlug",
						params: { categorySlug: "electronics" },
					},
				])}
			/>

			<section class="bg-linear-to-r from-brand-700 to-brand-900 relative overflow-hidden">
				<div class="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48Y2lyY2xlIGN4PSIyMCIgY3k9IjIwIiByPSIxLjUiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4wNikiLz48L3N2Zz4=')] opacity-80"></div>
				<div class="max-w-7xl mx-auto px-4 py-8 relative">
					<div class="flex items-center gap-4">
						<div class="w-14 h-14 rounded-2xl bg-white/10 backdrop-blur flex items-center justify-center flex-shrink-0">
							<svg
								class="w-7 h-7 text-white"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
								stroke-width="1.5"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
								/>
							</svg>
						</div>
						<div>
							<h1 class="text-2xl lg:text-3xl font-extrabold text-white">
								Electronics
							</h1>
							<p class="text-brand-200 text-sm mt-0.5">
								1,248 products from 86 stores
							</p>
						</div>
					</div>
					<div class="flex gap-2 mt-5 overflow-x-auto scrollbar-hide pb-1">
						<a
							href="#"
							class="whitespace-nowrap px-3.5 py-1.5 bg-white text-brand-700 text-xs font-semibold rounded-full transition"
						>
							All
						</a>
						<a
							href="#"
							class="whitespace-nowrap px-3.5 py-1.5 bg-white/15 hover:bg-white/25 text-white text-xs font-medium rounded-full transition"
						>
							Headphones
						</a>
						<a
							href="#"
							class="whitespace-nowrap px-3.5 py-1.5 bg-white/15 hover:bg-white/25 text-white text-xs font-medium rounded-full transition"
						>
							Monitors
						</a>
						<a
							href="#"
							class="whitespace-nowrap px-3.5 py-1.5 bg-white/15 hover:bg-white/25 text-white text-xs font-medium rounded-full transition"
						>
							Keyboards
						</a>
						<a
							href="#"
							class="whitespace-nowrap px-3.5 py-1.5 bg-white/15 hover:bg-white/25 text-white text-xs font-medium rounded-full transition"
						>
							Speakers
						</a>
						<a
							href="#"
							class="whitespace-nowrap px-3.5 py-1.5 bg-white/15 hover:bg-white/25 text-white text-xs font-medium rounded-full transition"
						>
							Phone Cases
						</a>
						<a
							href="#"
							class="whitespace-nowrap px-3.5 py-1.5 bg-white/15 hover:bg-white/25 text-white text-xs font-medium rounded-full transition"
						>
							Chargers
						</a>
						<a
							href="#"
							class="whitespace-nowrap px-3.5 py-1.5 bg-white/15 hover:bg-white/25 text-white text-xs font-medium rounded-full transition"
						>
							Cameras
						</a>
						<a
							href="#"
							class="whitespace-nowrap px-3.5 py-1.5 bg-white/15 hover:bg-white/25 text-white text-xs font-medium rounded-full transition"
						>
							Smart Home
						</a>
					</div>
				</div>
			</section>

			<main class="max-w-7xl mx-auto px-4 py-6 lg:py-8">
				<div class="flex gap-8">
					<aside class="hidden lg:block w-60 shrink-0">
						<div class="sticky top-24 space-y-6">
							<div>
								<h3 class="text-sm font-bold text-gray-900 mb-3">
									Price Range
								</h3>
								<div class="space-y-2">
									<label class="flex items-center gap-2 cursor-pointer group">
										<input
											type="checkbox"
											class="w-4 h-4 rounded border-gray-300 text-brand-600 focus:ring-brand-500"
										/>
										<span class="text-sm text-gray-600 group-hover:text-gray-900 transition">
											Under $25
										</span>
										<span class="ml-auto text-xs text-gray-400">312</span>
									</label>
									<label class="flex items-center gap-2 cursor-pointer group">
										<input
											type="checkbox"
											class="w-4 h-4 rounded border-gray-300 text-brand-600 focus:ring-brand-500"
										/>
										<span class="text-sm text-gray-600 group-hover:text-gray-900 transition">
											$25 – $50
										</span>
										<span class="ml-auto text-xs text-gray-400">287</span>
									</label>
									<label class="flex items-center gap-2 cursor-pointer group">
										<input
											type="checkbox"
											checked
											class="w-4 h-4 rounded border-gray-300 text-brand-600 focus:ring-brand-500"
										/>
										<span class="text-sm text-gray-900 font-medium">
											$50 – $100
										</span>
										<span class="ml-auto text-xs text-gray-400">198</span>
									</label>
									<label class="flex items-center gap-2 cursor-pointer group">
										<input
											type="checkbox"
											class="w-4 h-4 rounded border-gray-300 text-brand-600 focus:ring-brand-500"
										/>
										<span class="text-sm text-gray-600 group-hover:text-gray-900 transition">
											$100 – $300
										</span>
										<span class="ml-auto text-xs text-gray-400">326</span>
									</label>
									<label class="flex items-center gap-2 cursor-pointer group">
										<input
											type="checkbox"
											class="w-4 h-4 rounded border-gray-300 text-brand-600 focus:ring-brand-500"
										/>
										<span class="text-sm text-gray-600 group-hover:text-gray-900 transition">
											Over $300
										</span>
										<span class="ml-auto text-xs text-gray-400">125</span>
									</label>
								</div>
							</div>

							<hr class="border-gray-100" />

							<div>
								<h3 class="text-sm font-bold text-gray-900 mb-3">Store</h3>
								<div class="space-y-2">
									<label class="flex items-center gap-2 cursor-pointer group">
										<input
											type="checkbox"
											class="w-4 h-4 rounded border-gray-300 text-brand-600 focus:ring-brand-500"
										/>
										<span class="text-sm text-gray-600 group-hover:text-gray-900 transition">
											TechVault
										</span>
										<span class="ml-auto text-xs text-gray-400">412</span>
									</label>
									<label class="flex items-center gap-2 cursor-pointer group">
										<input
											type="checkbox"
											class="w-4 h-4 rounded border-gray-300 text-brand-600 focus:ring-brand-500"
										/>
										<span class="text-sm text-gray-600 group-hover:text-gray-900 transition">
											GadgetWorld
										</span>
										<span class="ml-auto text-xs text-gray-400">289</span>
									</label>
									<label class="flex items-center gap-2 cursor-pointer group">
										<input
											type="checkbox"
											class="w-4 h-4 rounded border-gray-300 text-brand-600 focus:ring-brand-500"
										/>
										<span class="text-sm text-gray-600 group-hover:text-gray-900 transition">
											PixelHub
										</span>
										<span class="ml-auto text-xs text-gray-400">176</span>
									</label>
									<label class="flex items-center gap-2 cursor-pointer group">
										<input
											type="checkbox"
											class="w-4 h-4 rounded border-gray-300 text-brand-600 focus:ring-brand-500"
										/>
										<span class="text-sm text-gray-600 group-hover:text-gray-900 transition">
											SoundLab
										</span>
										<span class="ml-auto text-xs text-gray-400">143</span>
									</label>
									<label class="flex items-center gap-2 cursor-pointer group">
										<input
											type="checkbox"
											class="w-4 h-4 rounded border-gray-300 text-brand-600 focus:ring-brand-500"
										/>
										<span class="text-sm text-gray-600 group-hover:text-gray-900 transition">
											HomeHaven
										</span>
										<span class="ml-auto text-xs text-gray-400">98</span>
									</label>
								</div>
								<button class="mt-2 text-xs font-semibold text-brand-600 hover:text-brand-700 transition">
									Show all 86 stores &rarr;
								</button>
							</div>

							<hr class="border-gray-100" />

							<div>
								<h3 class="text-sm font-bold text-gray-900 mb-3">Rating</h3>
								<div class="space-y-2">
									<label class="flex items-center gap-2 cursor-pointer group">
										<input
											type="radio"
											name="rating"
											class="w-4 h-4 border-gray-300 text-brand-600 focus:ring-brand-500"
										/>
										<div class="flex text-accent-500">
											<svg
												class="w-3.5 h-3.5"
												fill="currentColor"
												viewBox="0 0 20 20"
											>
												<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
											</svg>
											<svg
												class="w-3.5 h-3.5"
												fill="currentColor"
												viewBox="0 0 20 20"
											>
												<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
											</svg>
											<svg
												class="w-3.5 h-3.5"
												fill="currentColor"
												viewBox="0 0 20 20"
											>
												<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
											</svg>
											<svg
												class="w-3.5 h-3.5"
												fill="currentColor"
												viewBox="0 0 20 20"
											>
												<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
											</svg>
											<svg
												class="w-3.5 h-3.5"
												fill="currentColor"
												viewBox="0 0 20 20"
											>
												<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
											</svg>
										</div>
										<span class="text-xs text-gray-500">& up</span>
									</label>
									<label class="flex items-center gap-2 cursor-pointer group">
										<input
											type="radio"
											name="rating"
											checked
											class="w-4 h-4 border-gray-300 text-brand-600 focus:ring-brand-500"
										/>
										<div class="flex text-accent-500">
											<svg
												class="w-3.5 h-3.5"
												fill="currentColor"
												viewBox="0 0 20 20"
											>
												<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
											</svg>
											<svg
												class="w-3.5 h-3.5"
												fill="currentColor"
												viewBox="0 0 20 20"
											>
												<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
											</svg>
											<svg
												class="w-3.5 h-3.5"
												fill="currentColor"
												viewBox="0 0 20 20"
											>
												<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
											</svg>
											<svg
												class="w-3.5 h-3.5"
												fill="currentColor"
												viewBox="0 0 20 20"
											>
												<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
											</svg>
											<svg
												class="w-3.5 h-3.5 text-gray-200"
												fill="currentColor"
												viewBox="0 0 20 20"
											>
												<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
											</svg>
										</div>
										<span class="text-xs text-gray-500">& up</span>
									</label>
									<label class="flex items-center gap-2 cursor-pointer group">
										<input
											type="radio"
											name="rating"
											class="w-4 h-4 border-gray-300 text-brand-600 focus:ring-brand-500"
										/>
										<div class="flex text-accent-500">
											<svg
												class="w-3.5 h-3.5"
												fill="currentColor"
												viewBox="0 0 20 20"
											>
												<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
											</svg>
											<svg
												class="w-3.5 h-3.5"
												fill="currentColor"
												viewBox="0 0 20 20"
											>
												<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
											</svg>
											<svg
												class="w-3.5 h-3.5"
												fill="currentColor"
												viewBox="0 0 20 20"
											>
												<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
											</svg>
											<svg
												class="w-3.5 h-3.5 text-gray-200"
												fill="currentColor"
												viewBox="0 0 20 20"
											>
												<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
											</svg>
											<svg
												class="w-3.5 h-3.5 text-gray-200"
												fill="currentColor"
												viewBox="0 0 20 20"
											>
												<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
											</svg>
										</div>
										<span class="text-xs text-gray-500">& up</span>
									</label>
								</div>
							</div>

							<hr class="border-gray-100" />

							<div>
								<h3 class="text-sm font-bold text-gray-900 mb-3">Shipping</h3>
								<div class="space-y-2">
									<label class="flex items-center gap-2 cursor-pointer group">
										<input
											type="checkbox"
											class="w-4 h-4 rounded border-gray-300 text-brand-600 focus:ring-brand-500"
										/>
										<span class="text-sm text-gray-600 group-hover:text-gray-900 transition">
											Free shipping
										</span>
									</label>
									<label class="flex items-center gap-2 cursor-pointer group">
										<input
											type="checkbox"
											class="w-4 h-4 rounded border-gray-300 text-brand-600 focus:ring-brand-500"
										/>
										<span class="text-sm text-gray-600 group-hover:text-gray-900 transition">
											Ships in 24h
										</span>
									</label>
								</div>
							</div>

							<hr class="border-gray-100" />

							<div>
								<h3 class="text-sm font-bold text-gray-900 mb-3">Condition</h3>
								<div class="space-y-2">
									<label class="flex items-center gap-2 cursor-pointer group">
										<input
											type="checkbox"
											checked
											class="w-4 h-4 rounded border-gray-300 text-brand-600 focus:ring-brand-500"
										/>
										<span class="text-sm text-gray-900 font-medium">New</span>
									</label>
									<label class="flex items-center gap-2 cursor-pointer group">
										<input
											type="checkbox"
											class="w-4 h-4 rounded border-gray-300 text-brand-600 focus:ring-brand-500"
										/>
										<span class="text-sm text-gray-600 group-hover:text-gray-900 transition">
											Refurbished
										</span>
									</label>
								</div>
							</div>

							<button class="w-full py-2.5 border border-gray-200 text-sm font-semibold text-gray-600 rounded-xl hover:bg-gray-50 transition">
								Clear All Filters
							</button>
						</div>
					</aside>

					<div class="flex-1 min-w-0">
						<SearchToolbar />

						<div class="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-4">
							<For each={CATEGORY_PRODUCTS}>
								{(product) => <ProductCard product={product} />}
							</For>
						</div>
						<Pagination />
					</div>
				</div>
			</main>
		</>
	);
};
