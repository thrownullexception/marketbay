import { linkOptions } from "@tanstack/solid-router";
import { MailIcon, RefreshCwIcon, ShieldCheckIcon } from "lucide-solid";
import type * as v from "valibot";
import { OTP_LENGTH, VerifyEmailRequestSchema } from "@/schemas/auth";
import { useTreatyMutation } from "@/shared/treaty/mutation";
import { getShopTreaty } from "@/shared/treaty/shop.treaty";
import { Alert } from "@/ui/alert";
import { Button } from "@/ui/button";
import { useAppForm } from "@/ui/form";
import { FormCard, FormHeader, FormRoot, FormText } from "@/ui/form/card";
import { TextLink } from "@/ui/link";

// if no local storage email, redirect to login

export function VerifyEmailScreen() {

	const resendMutation = useTreatyMutation(() => ({
		mutationFn: getShopTreaty().auth["resend-verification-email"].post,
		endpoints: [],
		onSuccessMessage: () => "Verification code resent — check your inbox.",
	}));

	const verifyMutation = useTreatyMutation(() => ({
		redirect: linkOptions({ to: "/account" }),
		mutationFn: getShopTreaty().auth["verify-email"].post,
		endpoints: [],
	}));

	const form = useAppForm(() => ({
		defaultValues: {
			email: localStorage.getItem("email") ?? "",
			otp: "",
		} as v.InferInput<typeof VerifyEmailRequestSchema>,
		validators: {
			onChange: VerifyEmailRequestSchema,
		},
		onSubmit: async ({ value }) => {
			await verifyMutation.mutateAsync(value);
		},
	}));

	return (
		<FormRoot>
			<div class="text-center">
				<div class="w-16 h-16 rounded-2xl bg-brand-50 flex items-center justify-center mx-auto mb-5">
					<ShieldCheckIcon class="w-8 h-8 text-brand-600" />
				</div>
				<FormHeader
					title="Verify your email"
					description={`Enter the ${OTP_LENGTH}-digit code we sent to your email address`}
				/>
			</div>

			<form
				onSubmit={(e) => {
					e.preventDefault();
					e.stopPropagation();
					form.handleSubmit();
				}}
			>
				<FormCard>
					<Alert
						variant="info"
						description="Check your inbox (and spam folder) for an email from MarketBay with your verification code."
					/>

					<div class="hidden">
						<form.AppField name="email">
							{(field) => (
								<field.InputText
									label="Email address"
									placeholder="you@example.com"
									Icon={MailIcon}
								/>
							)}
						</form.AppField>
					</div>

					<form.AppField name="otp">
						{(field) => (
							<field.InputText
								label="Verification code"
								placeholder={`${"0".repeat(OTP_LENGTH)}`}
								type="tel"
								description={`Enter the ${OTP_LENGTH}-digit code from your email`}
							/>
						)}
					</form.AppField>

					<form.AppForm>
						<form.SubmitButton label="Verify Email" Icon={ShieldCheckIcon} />
					</form.AppForm>
				</FormCard>
			</form>

			<FormText>
				<span>Didn't receive the code?</span>
			</FormText>

			<form.Subscribe selector={(state) => state.values.email}>
				{(email) => (
					<div class="flex justify-center">
						<Button
							label={
								resendMutation.isPending
									? "Sending..."
									: "Resend verification code"
							}
							variant="default"
							Icon={RefreshCwIcon}
							disabled={resendMutation.isPending || !email()}
							onClick={() => resendMutation.mutate({ email: email() })}
						/>
					</div>
				)}
			</form.Subscribe>

			<FormText>
				Wrong account? <TextLink to="/login" label="Back to sign in" />
			</FormText>
		</FormRoot>
	);
}
