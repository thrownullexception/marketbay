import {
	ArrowLeftIcon,
	ArrowRightIcon,
	CheckIcon,
	GlobeIcon,
	InstagramIcon,
	MailIcon,
	PhoneIcon,
	TwitterIcon,
} from "lucide-solid";
import "./styles.css";
import { useRouter } from "@tanstack/solid-router";
import { DefaultButton, PrimaryButton } from "@/ui/button";
import { InputSelect } from "@/ui/input-select";
import { InputText } from "@/ui/input-text";
import { InputTextarea } from "@/ui/input-textarea";

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
								<InputText
									label="Store Name"
									placeholder="e.g. TechVault, StyleHouse, GreenNest"
									description="This is how buyers will find and recognize your store."
									required
								/>

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

								<InputTextarea
									label="Description"
									placeholder="Tell buyers what you sell, what makes your products unique, and why they should shop with you..."
									description="This appears on your store profile page."
									required
								/>
							</div>
						</div>

						<div class="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
							<h2 class="text-base font-semibold text-gray-900 mb-4">
								Category &amp; Location
							</h2>
							<div class="space-y-5">
								<InputSelect
									label="Primary Category"
									placeholder="Select a category"
									description="This is the category that will be displayed on your store profile page."
									required
									options={[
										{
											label: "Electronics &amp; Gadgets",
											value: "electronics-and-gadgets",
										},
										{
											label: "Fashion &amp; Accessories",
											value: "fashion-and-accessories",
										},
										{ label: "Home &amp; Garden", value: "home-and-garden" },
										{
											label: "Beauty &amp; Wellness",
											value: "beauty-and-wellness",
										},
										{
											label: "Sports &amp; Fitness",
											value: "sports-and-fitness",
										},
										{ label: "Books &amp; Media", value: "books-and-media" },
										{ label: "Toys &amp; Games", value: "toys-and-games" },
										{ label: "Automotive", value: "automotive" },
										{
											label: "Groceries &amp; Food",
											value: "groceries-and-food",
										},
										{ label: "Art &amp; Crafts", value: "art-and-crafts" },
										{ label: "Other", value: "other" },
									]}
								/>

								<div class="grid sm:grid-cols-2 gap-5">
									<InputSelect
										label="State"
										placeholder="Select a state"
										required
										options={[
											{ label: "California", value: "california" },
											{ label: "New York", value: "new-york" },
											{ label: "Texas", value: "texas" },
											{ label: "Florida", value: "florida" },
											{ label: "Illinois", value: "illinois" },
											{ label: "Other", value: "other" },
										]}
									/>
									<InputText label="City" placeholder="e.g. San Francisco" />
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
								<InputText
									label="Business Email"
									placeholder="hello@yourbusiness.com"
									Icon={MailIcon}
								/>

								<InputText
									label="Phone Number"
									placeholder="+234 (000) 000-0000"
									Icon={PhoneIcon}
								/>

								<InputText
									label="Website URL"
									placeholder="https://yourwebsite.com"
									Icon={GlobeIcon}
								/>

								<InputText
									label="Instagram URL"
									placeholder="https://www.instagram.com/yourbusiness"
									Icon={InstagramIcon}
								/>

								<InputText
									label="X (Twitter) URL"
									placeholder="https://x.com/yourbusiness"
									Icon={TwitterIcon}
								/>
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

								<InputSelect
									label="Return Policy"
									placeholder="Select a return policy"
									required
									options={[
										{ label: "30-day returns", value: "30-day-returns" },
										{ label: "14-day returns", value: "14-day-returns" },
										{ label: "60-day returns", value: "60-day-returns" },
										{ label: "No returns", value: "no-returns" },
									]}
								/>
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
							<DefaultButton
								label="Back"
								onClick={() => router.history.back()}
								Icon={ArrowLeftIcon}
							/>
							<PrimaryButton
								label="Create Store"
								type="submit"
								Icon={ArrowRightIcon}
							/>
						</div>
					</form>
				</div>
			</main>
		</>
	);
};
