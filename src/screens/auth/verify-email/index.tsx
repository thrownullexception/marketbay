import { linkOptions } from "@tanstack/solid-router";
import { RefreshCwIcon, ShieldCheckIcon } from "lucide-solid";
import type * as v from "valibot";
import { OTP_LENGTH, VerifyEmailRequestSchema } from "@/schemas/auth";
import { useTreatyMutation } from "@/shared/treaty/mutation";
import { getShopTreaty } from "@/shared/treaty/shop.treaty";
import { Alert } from "@/ui/alert";
import { Button } from "@/ui/button";
import { useAppForm } from "@/ui/form";
import { FormCard, FormHeader, FormRoot, FormText } from "@/ui/form/card";
import { TextLink } from "@/ui/link";

export function VerifyEmailScreen() {
	const resendMutation = useTreatyMutation(() => ({
		mutationFn: () =>
			getShopTreaty().auth["resend-verification-email"].post({}),
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
			otp: "",
		} as v.InferInput<typeof VerifyEmailRequestSchema>,
		validators: {
			onSubmit: VerifyEmailRequestSchema,
		},
		onSubmit: async ({ value }) => {
			await verifyMutation.mutateAsync(value);
		},
	}));

	return (
		<FormRoot>
			<div class="text-center">
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
					<form.AppField name="otp">
						{(field) => (
							<field.InputOtp
								label="Verification code"
								maxLength={OTP_LENGTH}
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

			<div class="flex justify-center">
				<Button
					label={
						resendMutation.isPending ? "Sending..." : "Resend verification code"
					}
					variant="default"
					Icon={RefreshCwIcon}
					disabled={resendMutation.isPending}
					onClick={() => resendMutation.mutate({})}
				/>
			</div>

			<FormText>
				Wrong account? <TextLink to="/login" label="Back to sign in" />
			</FormText>
		</FormRoot>
	);
}
