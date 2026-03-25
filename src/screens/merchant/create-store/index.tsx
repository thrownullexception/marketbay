import { useRouter } from "@tanstack/solid-router";
import {
	ArrowLeftIcon,
	ArrowRightIcon,
	CheckIcon,
	GlobeIcon,
	MailIcon,
	PhoneIcon,
} from "lucide-solid";
import { Button } from "@/ui/button";
import { Container } from "@/ui/container";
import { TextLink } from "@/ui/link";
import "./styles.css";
import { CreateStoreRequestSchema } from "@/schemas/store";
import { useAppForm } from "@/ui/form";
import { FormCard, FormHeader, FormRoot } from "@/ui/form/card";
import { Grid2 } from "@/ui/grid";

export const CreateStoreScreen = () => {
	const router = useRouter();
	const form = useAppForm(() => ({
			validators: {
			onChange: CreateStoreRequestSchema,
		},
		onSubmit: ({ value }) => {
			console.log(value);
		},
	}));

	return (
		<>
			<div class="bg-white border-b border-gray-100">
				<Container size="md" class="py-5">
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
				</Container>
			</div>

			<main class="flex-1 py-8 sm:py-12">
				<Container size="md">
					<form
						onSubmit={(e) => {
							e.preventDefault();
							e.stopPropagation();
							form.handleSubmit();
						}}
					>
						<FormRoot>
							<FormHeader
								title="Set up your store"
								description="Tell buyers what your store is about. You can always change these later."
							/>
							<FormCard title="Store Information">
								<form.AppField name="name">
									{(field) => (
										<field.InputText
											label="Store Name"
											placeholder="e.g. TechVault, StyleHouse, GreenNest"
											description="This is how buyers will find and recognize your store."
											required
										/>
									)}
								</form.AppField>
								<form.AppField name="slug">
									{(field) => (
										<field.InputWithPrefix
											label="Store Handle"
											prefix="marketbay.com/store/"
											placeholder="your-store-name"
											required
										/>
									)}
								</form.AppField>

								<form.AppField name="description">
									{(field) => (
										<field.InputTextarea
											label="Description"
											placeholder="Tell buyers what you sell, what makes your products unique, and why they should shop with you..."
											description="This appears on your store profile page."
											required
										/>
									)}
								</form.AppField>
							</FormCard>

							<FormCard title="Category &amp; Location">
								<form.AppField name="primaryCategoryId">
									{(field) => (
										<field.InputSelect
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
												{
													label: "Home &amp; Garden",
													value: "home-and-garden",
												},
												{
													label: "Beauty &amp; Wellness",
													value: "beauty-and-wellness",
												},
												{
													label: "Sports &amp; Fitness",
													value: "sports-and-fitness",
												},
												{
													label: "Books &amp; Media",
													value: "books-and-media",
												},
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
									)}
								</form.AppField>

								<Grid2>
									<form.AppField name="state">
										{(field) => (
											<field.InputSelect
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
										)}
									</form.AppField>
									<form.AppField name="city">
										{(field) => (
											<field.InputText
												label="City"
												placeholder="e.g. San Francisco"
											/>
										)}
									</form.AppField>
								</Grid2>
							</FormCard>

							{/* <FormCard
								title="Branding"
								description="Upload a logo and cover to make your store stand out."
							>
								<Grid2>
									<form.AppField
										name="logo"
										children={(field) => (
											<field.InputFile
												label="Store Logo"
												accept="image"
												maxSizeInMB={2}
												description="Recommended: 400 × 400px, square"
											/>
										)}
									/>
									<form.AppField
										name="coverImage"
										children={(field) => (
											<field.InputFile
												label="Cover Image"
												accept="image"
												maxSizeInMB={5}
												description="Recommended: 1200 × 400px, landscape"
											/>
										)}
									/>
								</Grid2>
							</FormCard> */}

							<FormCard
								title="Contact &amp; Social"
								description="Optional — help buyers reach you outside MarketBay."
							>
								<form.AppField name="email">
									{(field) => (
										<field.InputText
											label="Business Email"
											placeholder="hello@yourbusiness.com"
											Icon={MailIcon}
											required
										/>
									)}
								</form.AppField>

								<form.AppField name="phone">
									{(field) => (
										<field.InputText
											label="Phone Number"
											placeholder="+234 (000) 000-0000"
											Icon={PhoneIcon}
											required
										/>
									)}
								</form.AppField>

								<form.AppField name="website">
									{(field) => (
										<field.InputText
											label="Website URL"
											placeholder="https://yourbusiness.com"
											Icon={GlobeIcon}
										/>
									)}
								</form.AppField>

								<form.AppField name="instagram">
									{(field) => (
										<field.InputWithPrefix
											label="Instagram URL"
											placeholder="yourbusiness"
											prefix="https://instagram.com/"
										/>
									)}
								</form.AppField>

								<form.AppField name="twitter">
									{(field) => (
										<field.InputWithPrefix
											label="X (Twitter) URL"
											placeholder="yourbusiness"
											prefix="https://x.com/"
										/>
									)}
								</form.AppField>
							</FormCard>

							<FormCard
								title="Policies"
								description="Set expectations for your buyers."
							>
								<form.AppField name="returnPolicy">
									{(field) => (
										<field.InputTextarea
											label="Return Policy"
											placeholder="We accept returns within 30 days of delivery. Items must be in original, unused condition with all packaging. Refunds are processed within 5-7 business days after we receive the returned item. Buyer is responsible for return shipping costs unless the item is defective."
										/>
									)}
								</form.AppField>

								<form.AppField name="warranty">
									{(field) => (
										<field.InputTextarea
											label="Warranty"
											placeholder="All electronics include a 1-year manufacturer warranty. Extended 2-year protection plan available at checkout. Warranty covers defects in materials and workmanship. Accidental damage not covered under standard warranty. Contact us within 48 hours of receiving a damaged product."
										/>
									)}
								</form.AppField>
							</FormCard>

							<FormCard>
								<form.AppField name="agreed">
									{(field) => (
										<field.InputCheckbox
											simpleLabel="terms-of-service"
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
													. I understand that MarketBay charges a commission on
													each sale.{" "}
												</>
											}
										/>
									)}
								</form.AppField>
							</FormCard>

							<div class="flex flex-col-reverse sm:flex-row items-center justify-between gap-3">
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
						</FormRoot>
					</form>
				</Container>
			</main>
		</>
	);
};
