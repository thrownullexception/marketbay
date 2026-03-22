import { Hr, Section, Text } from "@react-email/components";
import * as React from "react";
import { EmailLayout } from "./components/layout";
import { OtpDisplay } from "./components/otp-display";

interface ResetPasswordEmailProps {
	firstName: string;
	otp: string;
	expiresInMinutes?: number;
}

export default function ResetPasswordEmail({
	firstName,
	otp,
	expiresInMinutes = 10,
}: ResetPasswordEmailProps) {
	return (
		<EmailLayout preview={`${otp} is your MarketBay password reset code`}>
			{/* Icon */}
			<Section className="mb-6 text-center">
				<div
					style={{
						width: "56px",
						height: "56px",
						borderRadius: "16px",
						backgroundColor: "#fff3c6",
						border: "2px solid #ffe588",
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
						stroke="#dd7302"
						strokeWidth="2"
						strokeLinecap="round"
						strokeLinejoin="round"
					>
						<path d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
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
				Reset your password
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
				Hi {firstName}, enter the code below in the MarketBay app to reset your
				password.
			</Text>

			{/* OTP */}
			<OtpDisplay otp={otp} expiresInMinutes={expiresInMinutes} />

			<Hr style={{ borderColor: "#f3f4f6", margin: "24px 0" }} />

			{/* Warning note */}
			<Section>
				<table style={{ borderCollapse: "collapse", width: "100%" }}>
					<tbody>
						<tr>
							<td
								style={{ width: "20px", verticalAlign: "top", paddingTop: "2px" }}
							>
								<svg
									width="16"
									height="16"
									viewBox="0 0 20 20"
									fill="#f59e0b"
								>
									<path
										fillRule="evenodd"
										d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
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
									If you didn't request a password reset, please secure your
									account immediately. Someone may be trying to access it.
								</Text>
							</td>
						</tr>
					</tbody>
				</table>
			</Section>
		</EmailLayout>
	);
}

ResetPasswordEmail.PreviewProps = {
	firstName: "Alex",
	otp: "739254",
	expiresInMinutes: 10,
} satisfies ResetPasswordEmailProps;
