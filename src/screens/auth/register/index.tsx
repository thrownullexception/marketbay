import {
	LockIcon,
	LockKeyhole,
	MailIcon,
	UserIcon,
	UserPlusIcon,
} from "lucide-solid";
import {
	FormCard,
	FormHeader,
	FormRoot,
	FormText,
} from "@/screens/_components/form-card";
import { Button } from "@/ui/button";
import { DividerText } from "@/ui/divider";
import { Grid2 } from "@/ui/grid";
import { InputCheckbox } from "@/ui/input-checkbox";
import { InputPassword, InputText } from "@/ui/input-text";
import { TextLink } from "@/ui/link";
import { SocialAuth } from "../SocialAuth";

export function RegisterScreen() {
	return (
		<FormRoot>
			<FormHeader
				title="Create your account"
				description="Join thousands of buyers and sellers on MarketBay"
			/>
			<form>
				<FormCard>
					<SocialAuth />
					<DividerText text="or register with email" />
					<Grid2>
						<InputText label="First name" placeholder="John" Icon={UserIcon} />
						<InputText label="Last name" placeholder="Doe" Icon={UserIcon} />
					</Grid2>
					<InputText
						label="Email address"
						placeholder="you@example.com"
						Icon={MailIcon}
					/>
					<InputPassword
						label="Password"
						placeholder="Create a strong password"
						Icon={LockIcon}
						description="Use 8+ characters with a mix of letters, numbers &amp; symbols"
					/>
					<InputPassword
						label="Confirm password"
						placeholder="Re-enter your password"
						Icon={LockKeyhole}
					/>
					<InputCheckbox
						checked={false}
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
				</FormCard>
			</form>
			<FormText>
				Already have an account? <TextLink to="/login" label="Sign in" />
			</FormText>
		</FormRoot>
	);
}
