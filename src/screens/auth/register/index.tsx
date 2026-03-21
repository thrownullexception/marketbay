import { LockIcon, MailIcon, UserIcon, UserPlusIcon } from "lucide-solid";
import type * as v from "valibot";
import { RegisterRequestSchema } from "@/schemas/auth";
import { DividerText } from "@/ui/divider";
import { useAppForm } from "@/ui/form";
import { FormCard, FormHeader, FormRoot, FormText } from "@/ui/form/card";
import { Grid2 } from "@/ui/grid";
import { TextLink } from "@/ui/link";
import { SocialAuth } from "../social-auth";

export function RegisterScreen() {
	const form = useAppForm(() => ({
		defaultValues: {
			email: "",
			password: "",
			firstName: "",
			lastName: "",
			agreed: false,
		} as v.InferInput<typeof RegisterRequestSchema>,
		validators: {
			onChange: RegisterRequestSchema,
		},
		onSubmit: ({ value }) => {
			console.log(value);
		},
	}));

	return (
		<FormRoot>
			<FormHeader
				title="Create your account"
				description="Join thousands of buyers and sellers on MarketBay"
			/>
			<form
				onSubmit={(e) => {
					e.preventDefault();
					e.stopPropagation();
					form.handleSubmit();
				}}
			>
				<FormCard>
					<SocialAuth />
					<DividerText text="or register with email" />
					<Grid2>
						<form.AppField name="firstName">
							{(field) => (
								<field.InputText
									label="First name"
									placeholder="John"
									Icon={UserIcon}
								/>
							)}
						</form.AppField>
						<form.AppField name="lastName">
							{(field) => (
								<field.InputText
									label="Last name"
									placeholder="Doe"
									Icon={UserIcon}
								/>
							)}
						</form.AppField>
					</Grid2>
					<form.AppField name="email">
						{(field) => (
							<field.InputText
								type="email"
								label="Email address"
								placeholder="you@example.com"
								Icon={MailIcon}
							/>
						)}
					</form.AppField>
					<form.AppField name="password">
						{(field) => (
							<field.InputPassword
								label="Password"
								placeholder="Create a strong password"
								description="Use 8+ characters with a mix of letters, numbers &amp; symbols"
								Icon={LockIcon}
								labelLink={{
									label: "Forgot password?",
									to: "/forgotpassword",
								}}
							/>
						)}
					</form.AppField>

					<form.AppField name="agreed">
						{(field) => (
							<field.InputCheckbox
								id="terms"
								label={
									<>
										I agree to the{" "}
										<TextLink to="/terms-of-service" label="Terms of Service" />{" "}
										and <TextLink to="/privacy-policy" label="Privacy Policy" />
									</>
								}
							/>
						)}
					</form.AppField>

					<form.AppForm>
						<form.SubmitButton label="Create Account" Icon={UserPlusIcon} />
					</form.AppForm>
				</FormCard>
			</form>
			<FormText>
				Already have an account? <TextLink to="/login" label="Sign in" />
			</FormText>
		</FormRoot>
	);
}
