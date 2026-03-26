import { linkOptions } from "@tanstack/solid-router";
import { LockIcon, LogInIcon, MailIcon } from "lucide-solid";
import type * as v from "valibot";
import { LoginRequestSchema } from "@/schemas/auth";
import { useTreatyMutation } from "@/shared/treaty/mutation";
import { getShopTreaty } from "@/shared/treaty/shop.treaty";
import { DividerText } from "@/ui/divider";
import { useAppForm } from "@/ui/form";
import { FormCard, FormHeader, FormRoot, FormText } from "@/ui/form/card";
import { TextLink } from "@/ui/link";
import { SocialAuth } from "../social-auth";

export function LoginScreen() {
	const signInMutation = useTreatyMutation(() => ({
		redirect: linkOptions({ to: "/account"}),
		mutationFn: getShopTreaty().auth.signin.post,
		endpoints: [],
	}));

	const form = useAppForm(() => ({
		defaultValues: {
			email: "",
			password: "",
		} as v.InferInput<typeof LoginRequestSchema>,
		validators: {
			onChange: LoginRequestSchema,
		},
		onSubmit: async ({ value }) => {
			await signInMutation.mutateAsync(value);
			// if (result.status === 422) {
			// 	navigate({to: "/verify-email"});
			// }
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
					<form.AppField name="email">
						{(field) => (
							<field.InputText
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
								placeholder="Enter your password"
								Icon={LockIcon}
								labelLink={{
									label: "Forgot password?",
									to: "/forgotpassword",
								}}
							/>
						)}
					</form.AppField>

					<form.AppField name="remember">
						{(field) => (
							<field.InputCheckbox simpleLabel="remember" label="Remember me" />
						)}
					</form.AppField>

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
