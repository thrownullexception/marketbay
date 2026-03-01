import { useRouter } from "@tanstack/solid-router";
import { LockKeyholeIcon, MailIcon } from "lucide-solid";
import { createSignal, Show } from "solid-js";
import { AlertDefault, AlertInfo } from "@/ui/alert";
import { Button } from "@/ui/button";
import { InputText } from "@/ui/input-text";
import { TextLink } from "@/ui/link";

export function ForgotPasswordScreen() {
	const [isSubmitted, setIsSubmitted] = createSignal(false);
	const router = useRouter();
	return (
		<>
			<Show when={!isSubmitted()}>
				<div id="request-form">
					<div class="text-center mb-8">
						<div class="w-16 h-16 rounded-2xl bg-brand-50 flex items-center justify-center mx-auto mb-5">
							<LockKeyholeIcon class="w-8 h-8 text-brand-600" />
						</div>
						<h1 class="text-2xl font-extrabold text-gray-900">
							Reset your password
						</h1>
						<p class="text-sm text-gray-500 mt-1.5">
							Enter the email address linked to your account and we'll send you
							a reset link.
						</p>
					</div>

					<div class="bg-white rounded-2xl border border-gray-100 shadow-sm p-8">
						<form class="space-y-5">
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
						</form>
					</div>

					<p class="text-center text-sm text-gray-500 mt-6">
						Remember your password? <TextLink to="/login" label="Sign in" />
					</p>
				</div>
			</Show>
			<Show when={isSubmitted()}>
				<div id="success-state">
					<div class="text-center mb-8 fade-in">
						<div class="w-16 h-16 rounded-2xl bg-emerald-50 flex items-center justify-center mx-auto mb-5">
							<MailIcon class="w-8 h-8 text-emerald-600" />
						</div>
						<h1 class="text-2xl font-extrabold text-gray-900">
							Check your email
						</h1>
						<p class="text-sm text-gray-500 mt-1.5">
							We've sent a password reset link to
						</p>
						<p
							class="text-sm font-semibold text-gray-900 mt-1"
							id="sent-email"
						></p>
					</div>

					<div class="bg-white rounded-2xl border border-gray-100 shadow-sm p-8 fade-in">
						<div class="space-y-4">
							<AlertInfo description="Click the link in the email to create a new password. The link expires in 60 minutes." />
							<AlertDefault description="Don't see the email? Check your spam folder or make sure you entered the correct address." />
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
					</div>

					<p class="text-center text-sm text-gray-500 mt-6">
						Need help? <TextLink to="/help" label="Contact Support" />
					</p>
				</div>
			</Show>
		</>
	);
}
