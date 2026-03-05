/** biome-ignore-all lint/correctness/noChildrenProp: <explanation> */
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
import { Container } from "@/ui/layout";
import { TextLink } from "@/ui/link";
import "./styles.css";
import * as v from "valibot";
import { useAppForm } from "@/screens/_components/form";
import {
	FormCard,
	FormHeader,
	FormRoot,
} from "@/screens/_components/form-card";
import { Grid2 } from "@/ui/grid";

const CreateStoreRequestSchema = v.object({
	name: v.pipe(v.string(), v.minLength(1), v.maxLength(10)),
	handle: v.pipe(v.string(), v.minLength(1)),
	description: v.pipe(v.string(), v.minLength(1)),
	primaryCategory: v.pipe(v.string(), v.minLength(1)),
	state: v.pipe(v.string(), v.minLength(1)),
	city: v.pipe(v.string()),
	logo: v.pipe(v.string(), v.minLength(1)),
	coverImage: v.pipe(v.string(), v.minLength(1)),
	businessEmail: v.pipe(v.string(), v.minLength(1), v.email()),
	phoneNumber: v.pipe(v.string(), v.minLength(1)),
	websiteURL: v.pipe(v.string()),
	instagramURL: v.pipe(v.string()),
	xURL: v.pipe(v.string()),
	shippingOptions: v.pipe(v.string(), v.minLength(1)),
	returnPolicy: v.pipe(v.string(), v.minLength(1)),
	termsOfService: v.pipe(
		v.boolean(),
		v.transform((value) => value === true),
	),
	// marketplaceGuidelines: v.pipe(
	// 	v.boolean(),
	// 	v.transform((value) => value === true),
	// ),
	// commission: v.pipe(v.number(), v.min(0)),
	// minimumOrderAmount: v.pipe(v.number(), v.min(0)),
	// freeShippingThreshold: v.pipe(v.number(), v.min(0)),
	// standardShippingDays: v.pipe(v.number(), v.min(0)),
	// expressShippingDays: v.pipe(v.number(), v.min(0)),
	// freeShipping: v.pipe(
	// 	v.boolean(),
	// 	v.transform((value) => value === true),
	// ),
	// standardShipping: v.pipe(
	// 	v.boolean(),
	// 	v.transform((value) => value === true),
	// ),
});

export const CreateStoreScreen = () => {
	const router = useRouter();
	const form = useAppForm(() => ({
		defaultValues: {
			name: "",
			handle: "",
			description: "",
			primaryCategory: "",
			state: "",
			city: "",
			logo: "",
			coverImage: "",
			businessEmail: "",
			password: "",
			phoneNumber: "",
			websiteURL: "",
			instagramURL: "",
			xURL: "",
			shippingOptions: "",
			returnPolicy: "",
			termsOfService: false,
			// marketplaceGuidelines: false,
			// commission: 0,
			// minimumOrderAmount: 0,
			// freeShippingThreshold: 0,
			// standardShippingDays: 0,
			// expressShippingDays: 0,
			// freeShipping: false,
			// standardShipping: false,
		} as v.InferInput<typeof CreateStoreRequestSchema>,
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
								<form.AppField
									name="name"
									children={(field) => (
										<field.InputText
											label="Store Name"
											placeholder="e.g. TechVault, StyleHouse, GreenNest"
											description="This is how buyers will find and recognize your store."
											required
										/>
									)}
								/>
								<form.AppField
									name="handle"
									children={(field) => (
										<field.InputWithPrefix
											label="Store Handle"
											prefix="marketbay.com/store/"
											placeholder="your-store-name"
											required
										/>
									)}
								/>

								<form.AppField
									name="description"
									children={(field) => (
										<field.InputTextarea
											label="Description"
											placeholder="Tell buyers what you sell, what makes your products unique, and why they should shop with you..."
											description="This appears on your store profile page."
											required
										/>
									)}
								/>
							</FormCard>

							<FormCard title="Category &amp; Location">
								<form.AppField
									name="primaryCategory"
									children={(field) => (
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
								/>

								<Grid2>
									<form.AppField
										name="state"
										children={(field) => (
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
									/>
									<form.AppField
										name="city"
										children={(field) => (
											<field.InputText
												label="City"
												placeholder="e.g. San Francisco"
											/>
										)}
									/>
								</Grid2>
							</FormCard>

							<FormCard
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
							</FormCard>

							<FormCard
								title="Contact &amp; Social"
								description="Optional — help buyers reach you outside MarketBay."
							>
								<form.AppField
									name="businessEmail"
									children={(field) => (
										<field.InputText
											label="Business Email"
											placeholder="hello@yourbusiness.com"
											Icon={MailIcon}
											required
										/>
									)}
								/>

								<form.AppField
									name="phoneNumber"
									children={(field) => (
										<field.InputText
											label="Phone Number"
											placeholder="+234 (000) 000-0000"
											Icon={PhoneIcon}
											required
										/>
									)}
								/>

								<form.AppField
									name="websiteURL"
									children={(field) => (
										<field.InputWithPrefix
											label="Website URL"
											placeholder="yourbusiness.com"
											prefix="https://www."
										/>
									)}
								/>

								<form.AppField
									name="instagramURL"
									children={(field) => (
										<field.InputWithPrefix
											label="Instagram URL"
											placeholder="yourbusiness"
											prefix="https://instagram.com/"
										/>
									)}
								/>

								<form.AppField
									name="xURL"
									children={(field) => (
										<field.InputWithPrefix
											label="X (Twitter) URL"
											placeholder="yourbusiness"
											prefix="https://x.com/"
										/>
									)}
								/>
							</FormCard>

							{/* <FormCard
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
							</FormCard> */}

							<FormCard>
								<form.AppField
									name="termsOfService"
									children={(field) => (
										<field.InputCheckbox
											id="terms-of-service"
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
								/>
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
