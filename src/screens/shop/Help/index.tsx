import { linkOptions } from "@tanstack/solid-router";
import { Breadcrumb } from "@/ui/breadcrumb";
import { HelpByTopic } from "./HelpByTopic";
import "./styles.css";
import { SearchIcon } from "lucide-solid";
import { Faq } from "./Faq";

export function HelpScreen() {
	return (
		<>
			<Breadcrumb
				items={[
					{ label: "Home", link: linkOptions({ to: "/" }) },
					{ label: "Help", link: linkOptions({ to: "/help" }) },
				]}
			/>
			<section class="relative overflow-hidden bg-linear-to-r from-brand-600 to-brand-800">
				<div class="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48Y2lyY2xlIGN4PSIyMCIgY3k9IjIwIiByPSIxLjUiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4wNikiLz48L3N2Zz4=')] opacity-80"></div>
				<div class="relative max-w-3xl mx-auto px-4 py-12 sm:py-16 text-center">
					<h1 class="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white mb-3">
						How can we help you?
					</h1>
					<p class="text-brand-200 text-sm sm:text-base mb-8">
						Search our knowledge base or browse topics below
					</p>
					<div class="relative max-w-xl mx-auto">
						<input
							type="text"
							placeholder="Search for answers — e.g. 'return policy', 'track order'..."
							class="w-full pl-12 pr-4 py-4 rounded-2xl border-0 bg-white text-sm focus:outline-none focus:ring-4 focus:ring-white/30 transition shadow-lg text-gray-900 placeholder-gray-400"
						/>
						<SearchIcon class="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
					</div>
					<div class="flex flex-wrap items-center justify-center gap-2 mt-5 text-xs text-brand-200">
						<span>Popular:</span>
						<a
							href="#faq"
							class="px-2.5 py-1 bg-white/15 hover:bg-white/25 rounded-full transition"
						>
							Track my order
						</a>
						<a
							href="#faq"
							class="px-2.5 py-1 bg-white/15 hover:bg-white/25 rounded-full transition"
						>
							Return an item
						</a>
						<a
							href="#faq"
							class="px-2.5 py-1 bg-white/15 hover:bg-white/25 rounded-full transition"
						>
							Payment issues
						</a>
						<a
							href="#faq"
							class="px-2.5 py-1 bg-white/15 hover:bg-white/25 rounded-full transition"
						>
							Seller account
						</a>
					</div>
				</div>
			</section>

			<main class="max-w-7xl mx-auto px-4 py-10 lg:py-14">
				<HelpByTopic />
				<Faq />

				<section class="mb-14">
					<div class="bg-white rounded-2xl border border-gray-100 overflow-hidden">
						<div class="grid lg:grid-cols-3 divide-y lg:divide-y-0 lg:divide-x divide-gray-100">
							<div class="p-6 lg:p-8 text-center">
								<div class="w-14 h-14 rounded-2xl bg-brand-50 flex items-center justify-center mx-auto mb-4">
									<svg
										class="w-7 h-7 text-brand-600"
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor"
										stroke-width="1.5"
									>
										<path
											stroke-linecap="round"
											stroke-linejoin="round"
											d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
										/>
									</svg>
								</div>
								<h3 class="text-sm font-bold text-gray-900 mb-1">Live Chat</h3>
								<p class="text-xs text-gray-500 mb-4 leading-relaxed">
									Chat with our support team in real-time. Average response time
									under 2 minutes.
								</p>
								<button class="inline-flex items-center gap-1.5 px-5 py-2.5 bg-brand-600 hover:bg-brand-700 text-white text-sm font-semibold rounded-xl transition shadow-sm">
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
									Start Chat
								</button>
								<p class="text-[11px] text-emerald-600 font-medium mt-3 flex items-center justify-center gap-1">
									<span class="w-1.5 h-1.5 bg-emerald-400 rounded-full"></span>
									Available now
								</p>
							</div>

							<div class="p-6 lg:p-8 text-center">
								<div class="w-14 h-14 rounded-2xl bg-violet-50 flex items-center justify-center mx-auto mb-4">
									<svg
										class="w-7 h-7 text-violet-600"
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor"
										stroke-width="1.5"
									>
										<path
											stroke-linecap="round"
											stroke-linejoin="round"
											d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
										/>
									</svg>
								</div>
								<h3 class="text-sm font-bold text-gray-900 mb-1">
									Email Support
								</h3>
								<p class="text-xs text-gray-500 mb-4 leading-relaxed">
									Send us a detailed message and we'll get back to you within 24
									hours.
								</p>
								<a
									href="mailto:support@marketbay.com"
									class="inline-flex items-center gap-1.5 px-5 py-2.5 border border-gray-200 bg-white hover:bg-gray-50 text-gray-700 text-sm font-semibold rounded-xl transition"
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
											d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
										/>
									</svg>
									Send Email
								</a>
								<p class="text-[11px] text-gray-400 mt-3">
									support@marketbay.com
								</p>
							</div>

							<div class="p-6 lg:p-8 text-center">
								<div class="w-14 h-14 rounded-2xl bg-accent-50 flex items-center justify-center mx-auto mb-4">
									<svg
										class="w-7 h-7 text-accent-600"
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor"
										stroke-width="1.5"
									>
										<path
											stroke-linecap="round"
											stroke-linejoin="round"
											d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
										/>
									</svg>
								</div>
								<h3 class="text-sm font-bold text-gray-900 mb-1">
									Phone Support
								</h3>
								<p class="text-xs text-gray-500 mb-4 leading-relaxed">
									Talk to a human. Available Mon-Fri, 8 AM - 8 PM EST.
								</p>
								<a
									href="tel:+18001234567"
									class="inline-flex items-center gap-1.5 px-5 py-2.5 border border-gray-200 bg-white hover:bg-gray-50 text-gray-700 text-sm font-semibold rounded-xl transition"
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
											d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
										/>
									</svg>
									Call Us
								</a>
								<p class="text-[11px] text-gray-400 mt-3">1-800-123-4567</p>
							</div>
						</div>
					</div>
				</section>

				<section>
					<h2 class="text-xl font-bold text-gray-900 mb-6">Quick links</h2>
					<div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
						<a
							href="#"
							class="flex items-center gap-3 bg-white rounded-2xl border border-gray-100 p-4 hover:border-brand-200 hover:bg-brand-50/30 transition group"
						>
							<div class="w-10 h-10 rounded-xl bg-gray-50 group-hover:bg-brand-50 flex items-center justify-center flex-shrink-0 transition-colors">
								<svg
									class="w-5 h-5 text-gray-400 group-hover:text-brand-600 transition-colors"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
									stroke-width="2"
								>
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
									/>
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
									/>
								</svg>
							</div>
							<div>
								<p class="text-sm font-semibold text-gray-900">
									Shipping Zones
								</p>
								<p class="text-xs text-gray-500">Where we deliver</p>
							</div>
						</a>
						<a
							href="#"
							class="flex items-center gap-3 bg-white rounded-2xl border border-gray-100 p-4 hover:border-brand-200 hover:bg-brand-50/30 transition group"
						>
							<div class="w-10 h-10 rounded-xl bg-gray-50 group-hover:bg-brand-50 flex items-center justify-center flex-shrink-0 transition-colors">
								<svg
									class="w-5 h-5 text-gray-400 group-hover:text-brand-600 transition-colors"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
									stroke-width="2"
								>
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										d="M9 14.25l6-6m4.5-3.493V21.75l-3.75-1.5-3.75 1.5-3.75-1.5-3.75 1.5V4.757c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0c1.1.128 1.907 1.077 1.907 2.185zM9.75 9h.008v.008H9.75V9zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm4.125 4.5h.008v.008h-.008V13.5zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
									/>
								</svg>
							</div>
							<div>
								<p class="text-sm font-semibold text-gray-900">Promo Codes</p>
								<p class="text-xs text-gray-500">How to use discounts</p>
							</div>
						</a>
						<a
							href="#"
							class="flex items-center gap-3 bg-white rounded-2xl border border-gray-100 p-4 hover:border-brand-200 hover:bg-brand-50/30 transition group"
						>
							<div class="w-10 h-10 rounded-xl bg-gray-50 group-hover:bg-brand-50 flex items-center justify-center flex-shrink-0 transition-colors">
								<svg
									class="w-5 h-5 text-gray-400 group-hover:text-brand-600 transition-colors"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
									stroke-width="2"
								>
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
									/>
								</svg>
							</div>
							<div>
								<p class="text-sm font-semibold text-gray-900">
									Seller Reviews
								</p>
								<p class="text-xs text-gray-500">How ratings work</p>
							</div>
						</a>
						<a
							href="#"
							class="flex items-center gap-3 bg-white rounded-2xl border border-gray-100 p-4 hover:border-brand-200 hover:bg-brand-50/30 transition group"
						>
							<div class="w-10 h-10 rounded-xl bg-gray-50 group-hover:bg-brand-50 flex items-center justify-center flex-shrink-0 transition-colors">
								<svg
									class="w-5 h-5 text-gray-400 group-hover:text-brand-600 transition-colors"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
									stroke-width="2"
								>
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z"
									/>
								</svg>
							</div>
							<div>
								<p class="text-sm font-semibold text-gray-900">
									Report an Issue
								</p>
								<p class="text-xs text-gray-500">Flag problems</p>
							</div>
						</a>
					</div>
				</section>
			</main>
		</>
	);
}
