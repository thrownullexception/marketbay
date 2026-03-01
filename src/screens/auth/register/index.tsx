import {
	LockIcon,
	LockKeyhole,
	MailIcon,
	UserIcon,
	UserPlusIcon,
} from "lucide-solid";
import { Button } from "@/ui/button";
import { InputCheckbox } from "@/ui/input-checkbox";
import { InputText } from "@/ui/input-text";
import { TextLink } from "@/ui/link";
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
						<InputText label="First name" placeholder="John" Icon={UserIcon} />
						<InputText label="Last name" placeholder="Doe" Icon={UserIcon} />
					</div>
					<InputText
						label="Email address"
						placeholder="you@example.com"
						Icon={MailIcon}
					/>
					<InputText
						label="Password"
						placeholder="Create a strong password"
						Icon={LockIcon}
						description="Use 8+ characters with a mix of letters, numbers &amp; symbols"
					/>
					<div class="flex gap-1.5 mt-2">
						<div class="h-1 flex-1 rounded-full bg-gray-200"></div>
						<div class="h-1 flex-1 rounded-full bg-gray-200"></div>
						<div class="h-1 flex-1 rounded-full bg-gray-200"></div>
						<div class="h-1 flex-1 rounded-full bg-gray-200"></div>
					</div>
					<InputText
						label="Confirm password"
						placeholder="Re-enter your password"
						Icon={LockKeyhole}
					/>
					<InputCheckbox
						label={
							<>
								I agree to the{" "}
								<TextLink to="/terms-of-service" label="Terms of Service" /> and{" "}
								<TextLink to="/privacy-policy" label="Privacy Policy" />
							</>
						}
						id="terms"
					/>
					<Button
						label="Create Account"
						type="submit"
						Icon={UserPlusIcon}
						variant="primary"
						fullWidth
					/>
				</form>
			</div>

			<p class="text-center text-sm text-gray-500 mt-6">
				Already have an account? <TextLink to="/login" label="Sign in" />
			</p>
		</>
	);
}
