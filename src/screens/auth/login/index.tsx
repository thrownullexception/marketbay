import { Link } from "@tanstack/solid-router";
import { LockIcon, MailIcon } from "lucide-solid";
import { SocialAuth } from "../SocialAuth";

export function LoginScreen() {
	return (
		<>
			<div class="text-center mb-8">
				<h1 class="text-2xl font-extrabold text-gray-900">Welcome back</h1>
				<p class="text-sm text-gray-500 mt-1.5">
					Sign in to your MarketBay account
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
								placeholder="you@example.com"
								class="w-full pl-10 pr-4 py-2.5 rounded-xl border border-gray-200 bg-gray-50 text-sm focus:outline-none focus:ring-2 focus:ring-brand-400 focus:border-transparent transition"
							/>
							<MailIcon class="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
						</div>
					</div>

					<div>
						<div class="flex items-center justify-between mb-1.5">
							<label
								for="password"
								class="block text-sm font-medium text-gray-700"
							>
								Password
							</label>
							<Link
								to="/forgotpassword"
								class="text-xs font-medium text-brand-600 hover:text-brand-700 transition"
							>
								Forgot password?
							</Link>
						</div>
						<div class="relative">
							<input
								type="password"
								id="password"
								placeholder="Enter your password"
								class="w-full pl-10 pr-4 py-2.5 rounded-xl border border-gray-200 bg-gray-50 text-sm focus:outline-none focus:ring-2 focus:ring-brand-400 focus:border-transparent transition"
							/>
							<LockIcon class="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
						</div>
					</div>

					<div class="flex items-center gap-2">
						<input
							type="checkbox"
							id="remember"
							class="w-4 h-4 rounded border-gray-300 text-brand-600 focus:ring-brand-500 transition"
						/>
						<label for="remember" class="text-sm text-gray-600">
							Remember me
						</label>
					</div>

					<button
						type="submit"
						class="w-full py-3 bg-brand-600 hover:bg-brand-700 text-white font-semibold rounded-xl transition shadow-sm text-sm"
					>
						Sign In
					</button>
				</form>

				<div class="relative my-6">
					<div class="absolute inset-0 flex items-center">
						<div class="w-full border-t border-gray-100"></div>
					</div>
					<div class="relative flex justify-center">
						<span class="bg-white px-3 text-xs text-gray-400 font-medium">
							or continue with
						</span>
					</div>
				</div>

				<SocialAuth />
			</div>

			<p class="text-center text-sm text-gray-500 mt-6">
				Don't have an account?{" "}
				<Link
					to="/register"
					class="font-semibold text-brand-600 hover:text-brand-700 transition"
				>
					Sign up for free
				</Link>
			</p>
		</>
	);
}
