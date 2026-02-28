import { Link } from "@tanstack/solid-router";
import { LockIcon, LockKeyhole, MailIcon, UserIcon } from "lucide-solid";
import { SocialAuth } from "../SocialAuth";

export function RegisterScreen() {
	return (
		<>
			<div class="text-center mb-8">
				<h1 class="text-2xl font-extrabold text-gray-900">
					Create your account
				</h1>
				<p class="text-sm text-gray-500 mt-1.5">
					Join thousands of buyers and sellers on MarketBay
				</p>
			</div>

			<div class="bg-white rounded-2xl border border-gray-100 shadow-sm p-8">
				<SocialAuth />

				<div class="relative mt-6 mb-6">
					<div class="absolute inset-0 flex items-center">
						<div class="w-full border-t border-gray-100"></div>
					</div>
					<div class="relative flex justify-center">
						<span class="bg-white px-3 text-xs text-gray-400 font-medium">
							or register with email
						</span>
					</div>
				</div>

				<form class="space-y-5">
					<div class="grid grid-cols-2 gap-4">
						<div>
							<label
								for="first-name"
								class="block text-sm font-medium text-gray-700 mb-1.5"
							>
								First name
							</label>
							<div class="relative">
								<input
									type="text"
									id="first-name"
									placeholder="John"
									class="w-full pl-10 pr-4 py-2.5 rounded-xl border border-gray-200 bg-gray-50 text-sm focus:outline-none focus:ring-2 focus:ring-brand-400 focus:border-transparent transition"
								/>
								<UserIcon class="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
							</div>
						</div>
						<div>
							<label
								for="last-name"
								class="block text-sm font-medium text-gray-700 mb-1.5"
							>
								Last name
							</label>
							<div class="relative">
								<input
									type="text"
									id="last-name"
									placeholder="Doe"
									class="w-full pl-10 pr-4 py-2.5 rounded-xl border border-gray-200 bg-gray-50 text-sm focus:outline-none focus:ring-2 focus:ring-brand-400 focus:border-transparent transition"
								/>
								<UserIcon class="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
							</div>
						</div>
					</div>

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
								placeholder="you@example.com"
								class="w-full pl-10 pr-4 py-2.5 rounded-xl border border-gray-200 bg-gray-50 text-sm focus:outline-none focus:ring-2 focus:ring-brand-400 focus:border-transparent transition"
							/>
							<MailIcon class="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
						</div>
					</div>

					<div>
						<label
							for="password"
							class="block text-sm font-medium text-gray-700 mb-1.5"
						>
							Password
						</label>
						<div class="relative">
							<input
								type="password"
								id="password"
								placeholder="Create a strong password"
								class="w-full pl-10 pr-4 py-2.5 rounded-xl border border-gray-200 bg-gray-50 text-sm focus:outline-none focus:ring-2 focus:ring-brand-400 focus:border-transparent transition"
							/>
							<LockIcon class="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
						</div>
						<div class="flex gap-1.5 mt-2">
							<div class="h-1 flex-1 rounded-full bg-gray-200"></div>
							<div class="h-1 flex-1 rounded-full bg-gray-200"></div>
							<div class="h-1 flex-1 rounded-full bg-gray-200"></div>
							<div class="h-1 flex-1 rounded-full bg-gray-200"></div>
						</div>
						<p class="text-xs text-gray-400 mt-1.5">
							Use 8+ characters with a mix of letters, numbers &amp; symbols
						</p>
					</div>

					<div>
						<label
							for="confirm-password"
							class="block text-sm font-medium text-gray-700 mb-1.5"
						>
							Confirm password
						</label>
						<div class="relative">
							<input
								type="password"
								id="confirm-password"
								placeholder="Re-enter your password"
								class="w-full pl-10 pr-4 py-2.5 rounded-xl border border-gray-200 bg-gray-50 text-sm focus:outline-none focus:ring-2 focus:ring-brand-400 focus:border-transparent transition"
							/>
							<LockKeyhole class="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
						</div>
					</div>

					<div class="flex items-start gap-2">
						<input
							type="checkbox"
							id="terms"
							class="w-4 h-4 mt-0.5 rounded border-gray-300 text-brand-600 focus:ring-brand-500 transition"
						/>
						<label for="terms" class="text-sm text-gray-600">
							I agree to the{" "}
							<Link
								to="/terms-of-service"
								class="font-medium text-brand-600 hover:text-brand-700 transition"
							>
								Terms of Service
							</Link>{" "}
							and{" "}
							<Link
								to="/privacy-policy"
								class="font-medium text-brand-600 hover:text-brand-700 transition"
							>
								Privacy Policy
							</Link>
						</label>
					</div>

					<button
						type="submit"
						class="w-full py-3 bg-brand-600 hover:bg-brand-700 text-white font-semibold rounded-xl transition shadow-sm text-sm"
					>
						Create Account
					</button>
				</form>
			</div>

			<p class="text-center text-sm text-gray-500 mt-6">
				Already have an account?{" "}
				<Link
					to="/login"
					class="font-semibold text-brand-600 hover:text-brand-700 transition"
				>
					Sign in
				</Link>
			</p>
		</>
	);
}
