import { Link } from "@tanstack/solid-router";
import { LockKeyholeIcon, MailIcon } from "lucide-solid";
import { createSignal, Show } from "solid-js";

export function ForgotPasswordScreen() {
	const [isSubmitted, setIsSubmitted] = createSignal(false);
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
							<div>
								<label
									for="email"
									class="block text-sm font-medium text-gray-700 mb-1.5"
								>
									Email address
								</label>
								<div class="relative">
									<input
										type="email"
										id="email"
										required
										placeholder="you@example.com"
										class="w-full pl-10 pr-4 py-2.5 rounded-xl border border-gray-200 bg-gray-50 text-sm focus:outline-none focus:ring-2 focus:ring-brand-400 focus:border-transparent transition"
									/>
									<MailIcon class="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
								</div>
							</div>

							<button
								type="submit"
								onclick={() => setIsSubmitted(true)}
								class="w-full py-3 bg-brand-600 hover:bg-brand-700 text-white font-semibold rounded-xl transition shadow-sm text-sm"
							>
								Send Reset Link
							</button>
						</form>
					</div>

					<p class="text-center text-sm text-gray-500 mt-6">
						Remember your password?{" "}
						<a
							href="login.html"
							class="font-semibold text-brand-600 hover:text-brand-700 transition"
						>
							Sign in
						</a>
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
							<div class="flex items-start gap-3 p-3 bg-brand-50/50 rounded-xl">
								<svg
									class="w-5 h-5 text-brand-600 flex-shrink-0 mt-0.5"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
									stroke-width="2"
								>
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"
									/>
								</svg>
								<div>
									<p class="text-sm text-gray-700">
										Click the link in the email to create a new password. The
										link expires in <strong>60 minutes</strong>.
									</p>
								</div>
							</div>

							<div class="flex items-start gap-3 p-3 bg-gray-50 rounded-xl">
								<svg
									class="w-5 h-5 text-gray-400 flex-shrink-0 mt-0.5"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
									stroke-width="2"
								>
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z"
									/>
								</svg>
								<div>
									<p class="text-sm text-gray-600">
										Don't see the email? Check your spam folder or make sure you
										entered the correct address.
									</p>
								</div>
							</div>
						</div>

						<div class="mt-6 flex flex-col gap-3">
							<button
								onclick={() => setIsSubmitted(false)}
								type="button"
								class="w-full py-3 border border-gray-200 bg-white hover:bg-gray-50 text-gray-700 font-semibold rounded-xl transition text-sm"
							>
								Resend Email
							</button>
							<Link
								to="/login"
								class="w-full py-3 bg-brand-600 hover:bg-brand-700 text-white font-semibold rounded-xl transition shadow-sm text-sm text-center block"
							>
								Back to Sign In
							</Link>
						</div>
					</div>

					<p class="text-center text-sm text-gray-500 mt-6">
						Need help?{" "}
						<Link
							to="/help"
							class="font-semibold text-brand-600 hover:text-brand-700 transition"
						>
							Contact Support
						</Link>
					</p>
				</div>
			</Show>
		</>
	);
}
