import { LockIcon, LogInIcon, MailIcon } from "lucide-solid";
import {
	FormCard,
	FormHeader,
	FormRoot,
	FormText,
} from "@/screens/_components/form-card";
import { Button } from "@/ui/button";
import { DividerText } from "@/ui/divider";
import { InputCheckbox } from "@/ui/input-checkbox";
import { InputPassword, InputText } from "@/ui/input-text";
import { TextLink } from "@/ui/link";
import { SocialAuth } from "../SocialAuth";

export function LoginScreen() {
	return (
		<FormRoot>
			<FormHeader
				title="Welcome back"
				description="Sign in to your MarketBay account"
			/>
			<form>
				<FormCard>
					<InputText
						label="Email address"
						placeholder="you@example.com"
						Icon={MailIcon}
					/>
					<InputPassword
						label="Password"
						placeholder="Enter your password"
						Icon={LockIcon}
						labelLink={{
							label: "Forgot password?",
							to: "/forgotpassword",
						}}
					/>
					<InputCheckbox checked={false} label="Remember me" id="remember" />
					<Button
						label="Sign In"
						type="submit"
						Icon={LogInIcon}
						variant="primary"
						fullWidth
					/>
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
