import { LockIcon, MailIcon, UserIcon, UserPlusIcon } from "lucide-solid";
import * as v from "valibot";
import { useAppForm } from "@/screens/_components/form";
import {
	FormCard,
	FormHeader,
	FormRoot,
	FormText,
} from "@/screens/_components/form-card";
import { DividerText } from "@/ui/divider";
import { Grid2 } from "@/ui/grid";
import { TextLink } from "@/ui/link";
import { SocialAuth } from "../SocialAuth";

const RegisterRequestSchema = v.object({
	firstName: v.pipe(v.string(), v.minLength(1)),
	lastName: v.pipe(v.string(), v.minLength(1)),
	email: v.pipe(v.string(), v.minLength(1)),
	password: v.pipe(v.string(), v.minLength(1)),
	agreed: v.pipe(
		v.boolean(),
		v.transform((value) => value === true),
	),
});

export function RegisterScreen() {
	const form = useAppForm(() => ({
		defaultValues: {
			email: "",
			password: "",
			firstName: "",
			lastName: "",
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
						<form.AppField
							name="firstName"
							children={(field) => (
								<field.InputText
									label="First name"
									placeholder="John"
									Icon={UserIcon}
								/>
							)}
						/>
						<form.AppField
							name="lastName"
							children={(field) => (
								<field.InputText
									label="Last name"
									placeholder="Doe"
									Icon={UserIcon}
								/>
							)}
						/>
					</Grid2>
					<form.AppField
						name="email"
						children={(field) => (
							<field.InputText
								type="email"
								label="Email address"
								placeholder="you@example.com"
								Icon={MailIcon}
							/>
						)}
					/>
					<form.AppField
						name="password"
						children={(field) => (
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
					/>

					<form.AppField
						name="agreed"
						children={(field) => (
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
					/>

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
