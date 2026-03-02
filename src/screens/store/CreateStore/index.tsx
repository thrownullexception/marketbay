import { useRouter } from "@tanstack/solid-router";
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
import { Button } from "@/ui/button";
import { InputCheckbox, InputCheckboxGroup } from "@/ui/input-checkbox";
import { InputFile } from "@/ui/input-file";
import { InputSelect } from "@/ui/input-select";
import { InputText } from "@/ui/input-text";
import { InputTextarea } from "@/ui/input-textarea";
import { TextLink } from "@/ui/link";
import "./styles.css";
import { FormCard, FormHeader } from "@/screens/_components/form-card";
import { Grid2 } from "@/ui/grid";

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
					<form class="space-y-8">
						<FormHeader
							title="Set up your store"
							description="Tell buyers what your store is about. You can always change these later."
						/>
						<FormCard title="Store Information">
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
									Store Handle
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
						</FormCard>

						<FormCard title="Category &amp; Location">
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

							<Grid2>
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
							</Grid2>
						</FormCard>

						<FormCard
							title="Branding"
							description="Upload a logo and cover to make your store stand out."
						>
							<Grid2>
								<InputFile
									label="Store Logo"
									accept="image"
									maxSizeInMB={2}
									description="Recommended: 400 × 400px, square"
								/>
								<InputFile
									label="Cover Image"
									accept="image"
									maxSizeInMB={5}
									description="Recommended: 1200 × 400px, landscape"
								/>
							</Grid2>
						</FormCard>

						<FormCard
							title="Contact &amp; Social"
							description="Optional — help buyers reach you outside MarketBay."
						>
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
						</FormCard>

						<FormCard
							title="Shipping &amp; Policies"
							description="Set expectations for your buyers."
						>
							<InputCheckboxGroup
								label="Shipping options"
								value="standard"
								options={[
									{
										label: "Standard Shipping",
										value: "standard",
										description: "5–8 business days",
									},
									{
										label: "Express Shipping",
										value: "express",
										description: "1–3 business days",
									},
									{
										label: "Free Shipping",
										value: "free",
										description: "On orders over a minimum amount you set",
									},
								]}
							/>
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
						</FormCard>

						<FormCard>
							<InputCheckbox
								id="terms-of-service"
								checked={true}
								label={
									<>
										I agree to the MarketBay{" "}
										<TextLink
											to="/store-terms-of-service"
											label="Store Terms of Service"
										/>{" "}
										and{" "}
										<TextLink
											to="/marketplace-guidelines"
											label="Marketplace Guidelines"
										/>
										. I understand that MarketBay charges a commission on each
										sale.{" "}
									</>
								}
							/>
						</FormCard>

						<div class="flex flex-col-reverse sm:flex-row items-center justify-between gap-3 pt-2 pb-8">
							<Button
								label="Back"
								type="button"
								onClick={() => router.history.back()}
								Icon={ArrowLeftIcon}
								variant="default"
							/>
							<Button
								label="Create Store"
								type="submit"
								Icon={ArrowRightIcon}
								variant="primary"
								iconPosition="right"
							/>
						</div>
					</form>
				</div>
			</main>
		</>
	);
};
