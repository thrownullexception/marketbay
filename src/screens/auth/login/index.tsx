import { LockIcon, LogInIcon, MailIcon } from "lucide-solid";
import * as v from "valibot";
import { useAppForm } from "@/screens/_components/form";
import {
	FormCard,
	FormHeader,
	FormRoot,
	FormText,
} from "@/screens/_components/form-card";
import { DividerText } from "@/ui/divider";
import { TextLink } from "@/ui/link";
import { SocialAuth } from "../SocialAuth";

const LoginRequestSchema = v.object({
	email: v.pipe(v.string(), v.minLength(1)),
	password: v.pipe(v.string(), v.minLength(1)),
	remember: v.optional(v.boolean()),
});

export function LoginScreen() {
	const form = useAppForm(() => ({
		defaultValues: {
			email: "",
			password: "",
		} as v.InferInput<typeof LoginRequestSchema>,
		validators: {
			onChange: LoginRequestSchema,
		},
		onSubmit: ({ value }) => {
			console.log(value);
		},
	}));

	return (
		<FormRoot>
			<FormHeader
				title="Welcome back"
				description="Sign in to your MarketBay account"
			/>
			<form
				onSubmit={(e) => {
					e.preventDefault();
					e.stopPropagation();
					form.handleSubmit();
				}}
			>
				<FormCard>
					<form.AppField
						name="email"
						children={(field) => (
							<field.InputText
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
								placeholder="Enter your password"
								Icon={LockIcon}
								labelLink={{
									label: "Forgot password?",
									to: "/forgotpassword",
								}}
							/>
						)}
					/>

					<form.AppField
						name="remember"
						children={(field) => (
							<field.InputCheckbox id="remember" label="Remember me" />
						)}
					/>

					<form.AppForm>
						<form.SubmitButton label="Sign In" Icon={LogInIcon} />
					</form.AppForm>

					<DividerText text="or continue with" />
					<SocialAuth />
				</FormCard>
			</form>

			<FormText>
				Don't have an account?{" "}
				<TextLink to="/register" label="Sign up for free" />
			</FormText>
		</FormRoot>
	);
}
