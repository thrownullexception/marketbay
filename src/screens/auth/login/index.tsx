import { LockIcon, LogInIcon, MailIcon } from "lucide-solid";
import { Button } from "@/ui/button";
import { InputCheckbox } from "@/ui/input-checkbox";
import { InputText } from "@/ui/input-text";
import { TextLink } from "@/ui/link";
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
					<InputText
						label="Email address"
						placeholder="you@example.com"
						Icon={MailIcon}
					/>

					<InputText
						label="Password"
						placeholder="Enter your password"
						Icon={LockIcon}
						labelLink={{
							label: "Forgot password?",
							to: "/forgotpassword",
						}}
					/>

					<InputCheckbox label="Remember me" id="remember" />

					<Button
						label="Sign In"
						type="submit"
						Icon={LogInIcon}
						variant="primary"
						fullWidth
					/>
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
				<TextLink to="/register" label="Sign up for free" />
			</p>
		</>
	);
}
