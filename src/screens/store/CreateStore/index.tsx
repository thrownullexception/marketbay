import {
	ArrowLeftIcon,
	ArrowRightIcon,
	CheckIcon,
	MailIcon,
	PhoneIcon,
} from "lucide-solid";
import "./styles.css";
import { useRouter } from "@tanstack/solid-router";

export const CreateStoreScreen = () => {
	const router = useRouter();

	return (
		<>
			<div class="bg-white border-b border-gray-100">
				<div class="max-w-3xl mx-auto px-4 py-5">
					<div class="flex items-center justify-between">
						<div class="flex items-center gap-2 step-complete">
							<div class="step-circle w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold border-2 border-transparent">
								<CheckIcon class="w-4 h-4" />
							</div>
							<span class="text-sm font-medium text-gray-900 hidden sm:inline">
								Account
							</span>
						</div>
						<div class="flex-1 h-0.5 mx-3 bg-emerald-500 rounded step-line"></div>
						<div class="flex items-center gap-2 step-active">
							<div class="step-circle w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold border-2 border-transparent">
								2
							</div>
							<span class="text-sm font-semibold text-brand-600 hidden sm:inline">
								Store Details
							</span>
						</div>
						<div class="flex-1 h-0.5 mx-3 bg-gray-200 rounded step-line"></div>
						<div class="flex items-center gap-2">
							<div class="step-circle w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold border-2 border-gray-200 text-gray-400 bg-white">
								3
							</div>
							<span class="text-sm font-medium text-gray-400 hidden sm:inline">
								Branding
							</span>
						</div>
						<div class="flex-1 h-0.5 mx-3 bg-gray-200 rounded step-line"></div>
						<div class="flex items-center gap-2">
							<div class="step-circle w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold border-2 border-gray-200 text-gray-400 bg-white">
								4
							</div>
							<span class="text-sm font-medium text-gray-400 hidden sm:inline">
								Review
							</span>
						</div>
					</div>
				</div>
			</div>

			<main class="flex-1 py-8 sm:py-12">
				<div class="max-w-3xl mx-auto px-4">
					<div class="mb-8">
						<h1 class="text-2xl font-extrabold text-gray-900">
							Set up your store
						</h1>
						<p class="text-sm text-gray-500 mt-1">
							Tell buyers what your store is about. You can always change these
							later.
						</p>
					</div>

					<form class="space-y-8">
						<div class="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
							<h2 class="text-base font-semibold text-gray-900 mb-4">
								Store Information
							</h2>
							<div class="space-y-5">
								<div>
									<label
										for="store-name"
										class="block text-sm font-medium text-gray-700 mb-1.5"
									>
										Store Name <span class="text-red-400">*</span>
									</label>
									<input
										id="store-name"
										type="text"
										placeholder="e.g. TechVault, StyleHouse, GreenNest"
										class="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-brand-400 focus:border-transparent transition"
									/>
									<p class="text-xs text-gray-400 mt-1.5">
										This is how buyers will find and recognize your store.
									</p>
								</div>

								<div>
									<label
										for="store-url"
										class="block text-sm font-medium text-gray-700 mb-1.5"
									>
										Store URL
									</label>
									<div class="flex rounded-xl border border-gray-200 overflow-hidden focus-within:ring-2 focus-within:ring-brand-400 focus-within:border-transparent transition">
										<span class="inline-flex items-center px-3.5 bg-gray-50 text-sm text-gray-400 border-r border-gray-200 select-none">
											marketbay.com/store/
										</span>
										<input
											id="store-url"
											type="text"
											placeholder="your-store-name"
											class="flex-1 px-3 py-2.5 text-sm focus:outline-none"
										/>
									</div>
								</div>

								<div>
									<label
										for="store-desc"
										class="block text-sm font-medium text-gray-700 mb-1.5"
									>
										Description <span class="text-red-400">*</span>
									</label>
									<textarea
										id="store-desc"
										rows="3"
										placeholder="Tell buyers what you sell, what makes your products unique, and why they should shop with you..."
										class="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-brand-400 focus:border-transparent transition resize-none"
									></textarea>
									<div class="flex justify-between mt-1.5">
										<p class="text-xs text-gray-400">
											This appears on your store profile page.
										</p>
										<span class="text-xs text-gray-400">0 / 500</span>
									</div>
								</div>
							</div>
						</div>

						<div class="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
							<h2 class="text-base font-semibold text-gray-900 mb-4">
								Category &amp; Location
							</h2>
							<div class="space-y-5">
								<div>
									<label
										for="store-cat"
										class="block text-sm font-medium text-gray-700 mb-1.5"
									>
										Primary Category <span class="text-red-400">*</span>
									</label>
									<select
										id="store-cat"
										class="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm text-gray-600 focus:outline-none focus:ring-2 focus:ring-brand-400 focus:border-transparent transition cursor-pointer bg-white appearance-none bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHZpZXdCb3g9IjAgMCAyMCAyMCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNNiA4bDQgNCA0LTQiIHN0cm9rZT0iIzlDQTNCNSIgc3Ryb2tlLXdpZHRoPSIxLjUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPjwvc3ZnPg==')] bg-no-repeat bg-[right_12px_center]"
									>
										<option value="" disabled selected>
											Select a category
										</option>
										<option>Electronics &amp; Gadgets</option>
										<option>Fashion &amp; Accessories</option>
										<option>Home &amp; Garden</option>
										<option>Beauty &amp; Wellness</option>
										<option>Sports &amp; Fitness</option>
										<option>Books &amp; Media</option>
										<option>Toys &amp; Games</option>
										<option>Automotive</option>
										<option>Groceries &amp; Food</option>
										<option>Art &amp; Crafts</option>
										<option>Other</option>
									</select>
								</div>

								<div class="grid sm:grid-cols-2 gap-5">
									<div>
										<label
											for="store-country"
											class="block text-sm font-medium text-gray-700 mb-1.5"
										>
											Country <span class="text-red-400">*</span>
										</label>
										<select
											id="store-country"
											class="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm text-gray-600 focus:outline-none focus:ring-2 focus:ring-brand-400 focus:border-transparent transition cursor-pointer bg-white appearance-none bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHZpZXdCb3g9IjAgMCAyMCAyMCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNNiA4bDQgNCA0LTQiIHN0cm9rZT0iIzlDQTNCNSIgc3Ryb2tlLXdpZHRoPSIxLjUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPjwvc3ZnPg==')] bg-no-repeat bg-[right_12px_center]"
										>
											<option value="" disabled selected>
												Select country
											</option>
											<option>United States</option>
											<option>United Kingdom</option>
											<option>Canada</option>
											<option>Australia</option>
											<option>Germany</option>
											<option>France</option>
											<option>Japan</option>
											<option>Other</option>
										</select>
									</div>
									<div>
										<label
											for="store-city"
											class="block text-sm font-medium text-gray-700 mb-1.5"
										>
											City
										</label>
										<input
											id="store-city"
											type="text"
											placeholder="e.g. San Francisco"
											class="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-brand-400 focus:border-transparent transition"
										/>
									</div>
								</div>
							</div>
						</div>

						<div class="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
							<h2 class="text-base font-semibold text-gray-900 mb-1">
								Branding
							</h2>
							<p class="text-sm text-gray-500 mb-5">
								Upload a logo and cover to make your store stand out.
							</p>

							<div class="grid sm:grid-cols-2 gap-6">
								<div>
									<label class="block text-sm font-medium text-gray-700 mb-2">
										Store Logo
									</label>
									<div class="relative group">
										<div class="w-full aspect-square max-w-[180px] rounded-2xl border-2 border-dashed border-gray-200 bg-gray-50 flex flex-col items-center justify-center cursor-pointer hover:border-brand-300 hover:bg-brand-50/30 transition-colors">
											<div class="w-12 h-12 rounded-xl bg-gray-100 flex items-center justify-center mb-3">
												<svg
													class="w-6 h-6 text-gray-400"
													fill="none"
													viewBox="0 0 24 24"
													stroke="currentColor"
													stroke-width="1.5"
												>
													<path
														stroke-linecap="round"
														stroke-linejoin="round"
														d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909M3.75 21h16.5A2.25 2.25 0 0022.5 18.75V5.25A2.25 2.25 0 0020.25 3H3.75A2.25 2.25 0 001.5 5.25v13.5A2.25 2.25 0 003.75 21z"
													/>
												</svg>
											</div>
											<p class="text-xs font-medium text-gray-500">
												Click to upload
											</p>
											<p class="text-[11px] text-gray-400 mt-0.5">
												PNG, JPG up to 2MB
											</p>
										</div>
										<input
											type="file"
											accept="image/*"
											class="absolute inset-0 opacity-0 cursor-pointer"
										/>
									</div>
									<p class="text-xs text-gray-400 mt-2">
										Recommended: 400 &times; 400px, square
									</p>
								</div>

								<div>
									<label class="block text-sm font-medium text-gray-700 mb-2">
										Cover Image
									</label>
									<div class="relative group">
										<div class="w-full aspect-[16/9] rounded-2xl border-2 border-dashed border-gray-200 bg-gray-50 flex flex-col items-center justify-center cursor-pointer hover:border-brand-300 hover:bg-brand-50/30 transition-colors">
											<div class="w-12 h-12 rounded-xl bg-gray-100 flex items-center justify-center mb-3">
												<svg
													class="w-6 h-6 text-gray-400"
													fill="none"
													viewBox="0 0 24 24"
													stroke="currentColor"
													stroke-width="1.5"
												>
													<path
														stroke-linecap="round"
														stroke-linejoin="round"
														d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909M3.75 21h16.5A2.25 2.25 0 0022.5 18.75V5.25A2.25 2.25 0 0020.25 3H3.75A2.25 2.25 0 001.5 5.25v13.5A2.25 2.25 0 003.75 21z"
													/>
												</svg>
											</div>
											<p class="text-xs font-medium text-gray-500">
												Click to upload
											</p>
											<p class="text-[11px] text-gray-400 mt-0.5">
												PNG, JPG up to 5MB
											</p>
										</div>
										<input
											type="file"
											accept="image/*"
											class="absolute inset-0 opacity-0 cursor-pointer"
										/>
									</div>
									<p class="text-xs text-gray-400 mt-2">
										Recommended: 1200 &times; 400px, landscape
									</p>
								</div>
							</div>
						</div>

						<div class="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
							<h2 class="text-base font-semibold text-gray-900 mb-1">
								Contact &amp; Social
							</h2>
							<p class="text-sm text-gray-500 mb-5">
								Optional — help buyers reach you outside MarketBay.
							</p>

							<div class="space-y-5">
								<div>
									<label
										for="store-email"
										class="block text-sm font-medium text-gray-700 mb-1.5"
									>
										Business Email
									</label>
									<div class="relative">
										<MailIcon class="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
										<input
											id="store-email"
											type="email"
											placeholder="hello@yourbusiness.com"
											class="w-full pl-10 pr-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-brand-400 focus:border-transparent transition"
										/>
									</div>
								</div>

								<div>
									<label
										for="store-phone"
										class="block text-sm font-medium text-gray-700 mb-1.5"
									>
										Phone Number
									</label>
									<div class="relative">
										<PhoneIcon class="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
										<input
											id="store-phone"
											type="tel"
											placeholder="+1 (555) 000-0000"
											class="w-full pl-10 pr-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-brand-400 focus:border-transparent transition"
										/>
									</div>
								</div>

								<div>
									<label class="block text-sm font-medium text-gray-700 mb-3">
										Social Links
									</label>
									<div class="space-y-3">
										<div class="relative">
											<div class="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400">
												<svg fill="currentColor" viewBox="0 0 24 24">
													<path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
												</svg>
											</div>
											<input
												type="url"
												placeholder="Instagram URL"
												class="w-full pl-10 pr-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-brand-400 focus:border-transparent transition"
											/>
										</div>
										<div class="relative">
											<div class="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400">
												<svg fill="currentColor" viewBox="0 0 24 24">
													<path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
												</svg>
											</div>
											<input
												type="url"
												placeholder="X (Twitter) URL"
												class="w-full pl-10 pr-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-brand-400 focus:border-transparent transition"
											/>
										</div>
										<div class="relative">
											<div class="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400">
												<svg
													fill="none"
													viewBox="0 0 24 24"
													stroke="currentColor"
													stroke-width="2"
												>
													<path
														stroke-linecap="round"
														stroke-linejoin="round"
														d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418"
													/>
												</svg>
											</div>
											<input
												type="url"
												placeholder="Website URL"
												class="w-full pl-10 pr-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-brand-400 focus:border-transparent transition"
											/>
										</div>
									</div>
								</div>
							</div>
						</div>

						<div class="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
							<h2 class="text-base font-semibold text-gray-900 mb-1">
								Shipping &amp; Policies
							</h2>
							<p class="text-sm text-gray-500 mb-5">
								Set expectations for your buyers.
							</p>

							<div class="space-y-5">
								<div>
									<label class="block text-sm font-medium text-gray-700 mb-3">
										Shipping Options
									</label>
									<div class="space-y-3">
										<label class="flex items-start gap-3 p-3.5 rounded-xl border border-gray-200 cursor-pointer hover:border-brand-200 hover:bg-brand-50/30 transition-colors has-[:checked]:border-brand-400 has-[:checked]:bg-brand-50/50">
											<input
												type="checkbox"
												checked
												class="mt-0.5 rounded border-gray-300 text-brand-600 focus:ring-brand-500"
											/>
											<div>
												<p class="text-sm font-medium text-gray-900">
													Standard Shipping
												</p>
												<p class="text-xs text-gray-500 mt-0.5">
													5–8 business days
												</p>
											</div>
										</label>
										<label class="flex items-start gap-3 p-3.5 rounded-xl border border-gray-200 cursor-pointer hover:border-brand-200 hover:bg-brand-50/30 transition-colors has-[:checked]:border-brand-400 has-[:checked]:bg-brand-50/50">
											<input
												type="checkbox"
												class="mt-0.5 rounded border-gray-300 text-brand-600 focus:ring-brand-500"
											/>
											<div>
												<p class="text-sm font-medium text-gray-900">
													Express Shipping
												</p>
												<p class="text-xs text-gray-500 mt-0.5">
													1–3 business days
												</p>
											</div>
										</label>
										<label class="flex items-start gap-3 p-3.5 rounded-xl border border-gray-200 cursor-pointer hover:border-brand-200 hover:bg-brand-50/30 transition-colors has-[:checked]:border-brand-400 has-[:checked]:bg-brand-50/50">
											<input
												type="checkbox"
												class="mt-0.5 rounded border-gray-300 text-brand-600 focus:ring-brand-500"
											/>
											<div>
												<p class="text-sm font-medium text-gray-900">
													Free Shipping
												</p>
												<p class="text-xs text-gray-500 mt-0.5">
													On orders over a minimum amount you set
												</p>
											</div>
										</label>
									</div>
								</div>

								<div>
									<label
										for="return-policy"
										class="block text-sm font-medium text-gray-700 mb-1.5"
									>
										Return Policy
									</label>
									<select
										id="return-policy"
										class="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm text-gray-600 focus:outline-none focus:ring-2 focus:ring-brand-400 focus:border-transparent transition cursor-pointer bg-white appearance-none bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHZpZXdCb3g9IjAgMCAyMCAyMCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNNiA4bDQgNCA0LTQiIHN0cm9rZT0iIzlDQTNCNSIgc3Ryb2tlLXdpZHRoPSIxLjUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPjwvc3ZnPg==')] bg-no-repeat bg-[right_12px_center]"
									>
										<option>30-day returns</option>
										<option>14-day returns</option>
										<option>60-day returns</option>
										<option>No returns</option>
									</select>
								</div>
							</div>
						</div>

						<div class="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
							<label class="flex items-start gap-3 cursor-pointer">
								<input
									type="checkbox"
									class="mt-0.5 rounded border-gray-300 text-brand-600 focus:ring-brand-500"
								/>
								<p class="text-sm text-gray-600">
									I agree to the MarketBay{" "}
									<a
										href="#"
										class="text-brand-600 hover:underline font-medium"
									>
										Seller Terms of Service
									</a>{" "}
									and{" "}
									<a
										href="#"
										class="text-brand-600 hover:underline font-medium"
									>
										Marketplace Guidelines
									</a>
									. I understand that MarketBay charges a commission on each
									sale.
								</p>
							</label>
						</div>

						<div class="flex flex-col-reverse sm:flex-row items-center justify-between gap-3 pt-2 pb-8">
							<button
								type="button"
								onClick={() => router.history.back()}
								class="cursor-pointer flex-1 sm:flex-initial px-8 py-3 border border-gray-200 rounded-xl text-sm font-semibold text-gray-600 hover:bg-gray-50 transition flex items-center justify-center gap-2"
							>
								<ArrowLeftIcon class="w-4 h-4" />
								Back
							</button>

							<button
								type="submit"
								class="cursor-pointer flex-1 sm:flex-initial px-8 py-3 bg-brand-600 hover:bg-brand-700 text-white text-sm font-semibold rounded-xl transition shadow-sm flex items-center justify-center gap-2"
							>
								Create Store
								<ArrowRightIcon class="w-4 h-4" />
							</button>
						</div>
					</form>
				</div>
			</main>
		</>
	);
};
