import { Hr, Section, Text } from "@react-email/components";
import { EmailLayout } from "./components/layout";
import { OtpDisplay } from "./components/otp-display";

interface VerifyAccountEmailProps {
	firstName: string;
	otp: string;
	expiresInMinutes?: number;
}

export default function VerifyAccountEmail({
	firstName,
	otp,
	expiresInMinutes = 10,
}: VerifyAccountEmailProps) {
	return (
		<EmailLayout
			preview={`${otp} is your MarketBay verification code`}
		>
			<Section className="mb-6 text-center">
				<div
					style={{
						width: "56px",
						height: "56px",
						borderRadius: "16px",
						backgroundColor: "#eef4ff",
						border: "2px solid #bdd4ff",
						display: "inline-flex",
						alignItems: "center",
						justifyContent: "center",
						margin: "0 auto",
					}}
				>
					<svg
						width="28"
						height="28"
						viewBox="0 0 24 24"
						fill="none"
						stroke="#1d44f2"
						strokeWidth="2"
						strokeLinecap="round"
						strokeLinejoin="round"
					>
						<path d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
					</svg>
				</div>
			</Section>

			{/* Heading */}
			<Text
				style={{
					fontFamily: "Inter, Arial, sans-serif",
					fontSize: "22px",
					fontWeight: "800",
					color: "#141c56",
					textAlign: "center",
					margin: "0 0 8px",
					letterSpacing: "-0.5px",
				}}
			>
				Verify your email address
			</Text>
			<Text
				style={{
					fontFamily: "Inter, Arial, sans-serif",
					fontSize: "15px",
					color: "#6b7280",
					textAlign: "center",
					margin: "0 0 32px",
					lineHeight: "1.6",
				}}
			>
				Hi {firstName}, enter the code below in the MarketBay app to verify your
				email and activate your account.
			</Text>

			{/* OTP */}
			<OtpDisplay otp={otp} expiresInMinutes={expiresInMinutes} />

			<Hr style={{ borderColor: "#f3f4f6", margin: "24px 0" }} />

			{/* Security note */}
			<Section>
				<table style={{ borderCollapse: "collapse", width: "100%" }}>
					<tbody>
						<tr>
							<td style={{ width: "20px", verticalAlign: "top", paddingTop: "2px" }}>
								<svg
									width="16"
									height="16"
									viewBox="0 0 20 20"
									fill="#10b981"
								>
									<path
										fillRule="evenodd"
										d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
										clipRule="evenodd"
									/>
								</svg>
							</td>
							<td style={{ paddingLeft: "8px" }}>
								<Text
									style={{
										fontFamily: "Inter, Arial, sans-serif",
										fontSize: "13px",
										color: "#6b7280",
										margin: "0",
										lineHeight: "1.5",
									}}
								>
									If you didn't create a MarketBay account, you can safely
									ignore this email.
								</Text>
							</td>
						</tr>
					</tbody>
				</table>
			</Section>
		</EmailLayout>
	);
}

VerifyAccountEmail.PreviewProps = {
	firstName: "Alex",
	otp: "482917",
	expiresInMinutes: 10,
} satisfies VerifyAccountEmailProps;
