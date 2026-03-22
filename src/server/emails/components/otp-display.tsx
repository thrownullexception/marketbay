import { Section, Text } from "@react-email/components";
import * as React from "react";

interface OtpDisplayProps {
	otp: string;
	expiresInMinutes?: number;
}

export function OtpDisplay({ otp, expiresInMinutes = 10 }: OtpDisplayProps) {
	const digits = otp.split("");

	return (
		<>
			<Section className="my-6">
				<table style={{ borderCollapse: "collapse", margin: "0 auto" }}>
					<tbody>
						<tr>
							{digits.map((digit, i) => (
								// biome-ignore lint/suspicious/noArrayIndexKey: static OTP digits
								<td key={i} style={{ padding: "0 4px" }}>
									<div
										style={{
											width: "48px",
											height: "56px",
											backgroundColor: "#eef4ff",
											border: "2px solid #bdd4ff",
											borderRadius: "12px",
											display: "flex",
											alignItems: "center",
											justifyContent: "center",
											fontFamily: "Inter, Arial, sans-serif",
											fontSize: "28px",
											fontWeight: "800",
											color: "#1d44f2",
											letterSpacing: "-1px",
											textAlign: "center",
											lineHeight: "56px",
										}}
									>
										{digit}
									</div>
								</td>
							))}
						</tr>
					</tbody>
				</table>
			</Section>

			<Text
				style={{
					fontFamily: "Inter, Arial, sans-serif",
					fontSize: "13px",
					color: "#6b7280",
					textAlign: "center",
					margin: "0 0 24px",
				}}
			>
				This code expires in{" "}
				<strong style={{ color: "#374151" }}>{expiresInMinutes} minutes</strong>.
				Do not share it with anyone.
			</Text>
		</>
	);
}
