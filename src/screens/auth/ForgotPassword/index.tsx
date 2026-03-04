import { useRouter } from "@tanstack/solid-router";
import { MailIcon } from "lucide-solid";
import { createSignal, Show } from "solid-js";
import { FormCard, FormHeader } from "@/screens/_components/form-card";
import { Alert } from "@/ui/alert";
import { Button } from "@/ui/button";
import { InputText } from "@/ui/input-text";
import { TextLink } from "@/ui/link";

export function ForgotPasswordScreen() {
	const [isSubmitted, setIsSubmitted] = createSignal(false);
	const router = useRouter();
	return (
		<>
			<Show when={!isSubmitted()}>
				<div class="space-y-8">
					<FormHeader
						title="Reset your password"
						description="Enter the email address linked to your account and we'll send you a reset link."
					/>
					<form>
						<FormCard>
							<InputText
								label="Email address"
								placeholder="you@example.com"
								Icon={MailIcon}
							/>

							<Button
								type="submit"
								onClick={() => setIsSubmitted(true)}
								label="Send Reset Link"
								variant="primary"
								fullWidth
							/>
						</FormCard>
					</form>

					<p class="text-center text-sm text-gray-500 mt-6">
						Remember your password? <TextLink to="/login" label="Sign in" />
					</p>
				</div>
			</Show>
			<Show when={isSubmitted()}>
				<div class="space-y-8">
					<div class="text-center fade-in">
						<div class="w-16 h-16 rounded-2xl bg-emerald-50 flex items-center justify-center mx-auto mb-5">
							<MailIcon class="w-8 h-8 text-emerald-600" />
						</div>
						<FormHeader
							title="Check your email"
							description="We've sent a password reset link to"
						/>
						<p class="text-sm font-semibold text-gray-900 mt-1">todo</p>
					</div>

					<FormCard>
						<div class="space-y-4">
							<Alert
								variant="info"
								title="Email sent"
								description="Click the link in the email to create a new password. The link expires in <b>60 minutes</b>."
							/>
							<Alert
								variant="default"
								title="Don't see the email?"
								description=" Check your spam folder or make sure you entered the correct address."
							/>
						</div>

						<div class="mt-6 flex flex-col gap-3">
							<Button
								onClick={() => setIsSubmitted(false)}
								label="Resend Email"
								variant="default"
								fullWidth
							/>
							<Button
								onClick={() => router.navigate({ to: "/login" })}
								label="Back to Sign In"
								variant="primary"
								fullWidth
							/>
						</div>
					</FormCard>

					<p class="text-center text-sm text-gray-500">
						Need help? <TextLink to="/help" label="Contact Support" />
					</p>
				</div>
			</Show>
		</>
	);
}
