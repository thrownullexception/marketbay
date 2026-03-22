import {
	Body,
	Container,
	Font,
	Head,
	Html,
	Preview,
	Section,
	Tailwind,
	Text,
} from "@react-email/components";
import * as React from "react";

const BRAND = {
	950: "#141c56",
	900: "#1a2b8e",
	600: "#1d44f2",
	400: "#5b90ff",
	200: "#bdd4ff",
	50: "#eef4ff",
};

interface EmailLayoutProps {
	preview: string;
	children: React.ReactNode;
}

export function EmailLayout({ preview, children }: EmailLayoutProps) {
	return (
		<Html lang="en">
			<Head>
				<Font
					fontFamily="Inter"
					fallbackFontFamily="Arial"
					webFont={{
						url: "https://fonts.gstatic.com/s/inter/v18/UcCO3FwrK3iLTeHuS_nVMrMxCp50SjIw2boKoduKmMEVuLyfAZ9hiJ-Ek-_EeA.woff2",
						format: "woff2",
					}}
					fontWeight={400}
					fontStyle="normal"
				/>
				<Font
					fontFamily="Inter"
					fallbackFontFamily="Arial"
					webFont={{
						url: "https://fonts.gstatic.com/s/inter/v18/UcCO3FwrK3iLTeHuS_nVMrMxCp50SjIw2boKoduKmMEVuI6fAZ9hiJ-Ek-_EeA.woff2",
						format: "woff2",
					}}
					fontWeight={600}
					fontStyle="normal"
				/>
				<Font
					fontFamily="Inter"
					fallbackFontFamily="Arial"
					webFont={{
						url: "https://fonts.gstatic.com/s/inter/v18/UcCO3FwrK3iLTeHuS_nVMrMxCp50SjIw2boKoduKmMEVuFuYAZ9hiJ-Ek-_EeA.woff2",
						format: "woff2",
					}}
					fontWeight={800}
					fontStyle="normal"
				/>
			</Head>
			<Preview>{preview}</Preview>
			<Tailwind
				config={{
					theme: {
						extend: {
							colors: {
								brand: {
									50: "#eef4ff",
									100: "#dae6ff",
									200: "#bdd4ff",
									300: "#90b8ff",
									400: "#5b90ff",
									500: "#3568fc",
									600: "#1d44f2",
									700: "#1633de",
									800: "#182cb4",
									900: "#1a2b8e",
									950: "#141c56",
								},
								accent: {
									50: "#fffbeb",
									100: "#fff3c6",
									200: "#ffe588",
									300: "#ffd24a",
									400: "#ffbf20",
									500: "#f99b07",
									600: "#dd7302",
									700: "#b75006",
									800: "#943d0c",
									900: "#7a330d",
									950: "#461902",
								},
							},
							fontFamily: {
								sans: ["Inter", "Arial", "system-ui", "sans-serif"],
							},
						},
					},
				}}
			>
				<Body className="bg-gray-50 font-sans m-0 p-0 antialiased">

					{/* Header / Logo */}
					<Section className="bg-white border-b border-gray-100 w-full">
						<Container className="max-w-xl mx-auto px-6 py-4">
							<table style={{ width: "100%", borderCollapse: "collapse" }}>
								<tbody>
									<tr>
										<td>
											<table style={{ borderCollapse: "collapse" }}>
												<tbody>
													<tr>
														<td style={{ paddingRight: "8px" }}>
															<div
																style={{
																	width: "36px",
																	height: "36px",
																	borderRadius: "8px",
																	backgroundColor: BRAND[600],
																	display: "flex",
																	alignItems: "center",
																	justifyContent: "center",
																}}
															>
																<svg
																	width="20"
																	height="20"
																	viewBox="0 0 24 24"
																	fill="none"
																	stroke="white"
																	strokeWidth="2"
																	strokeLinecap="round"
																	strokeLinejoin="round"
																>
																	<path d="M13 10V3L4 14h7v7l9-11h-7z" />
																</svg>
															</div>
														</td>
														<td>
															<span
																style={{
																	fontFamily: "Inter, Arial, sans-serif",
																	fontSize: "20px",
																	fontWeight: "800",
																	color: BRAND[950],
																	letterSpacing: "-0.5px",
																}}
															>
																Market
																<span style={{ color: BRAND[600] }}>Bay</span>
															</span>
														</td>
													</tr>
												</tbody>
											</table>
										</td>
									</tr>
								</tbody>
							</table>
						</Container>
					</Section>

					{/* Main card */}
					<Container className="max-w-xl mx-auto px-4 py-8">
						<Section className="bg-white rounded-2xl border border-gray-100 shadow-sm px-8 py-8">
							{children}
						</Section>
					</Container>

					{/* Footer */}
					<EmailFooter />
				</Body>
			</Tailwind>
		</Html>
	);
}

export function EmailFooter() {
	return (
		<Section className=" bg-white border-b border-gray-100 w-full py-6">
			<Container className="max-w-xl mx-auto px-6">
				<table style={{ width: "100%", borderCollapse: "collapse" }}>
					<tbody>
						<tr>
							<td style={{ textAlign: "center", paddingBottom: "12px" }}>
								<table
									style={{
										borderCollapse: "collapse",
										margin: "0 auto",
									}}
								>
									<tbody>
										<tr>
											<td style={{ paddingRight: "6px" }}>
												<div
													style={{
														width: "28px",
														height: "28px",
														borderRadius: "6px",
														backgroundColor: BRAND[600],
														display: "inline-flex",
														alignItems: "center",
														justifyContent: "center",
													}}
												>
													<svg
														width="14"
														height="14"
														viewBox="0 0 24 24"
														fill="none"
														stroke="white"
														strokeWidth="2"
														strokeLinecap="round"
														strokeLinejoin="round"
													>
														<path d="M13 10V3L4 14h7v7l9-11h-7z" />
													</svg>
												</div>
											</td>
											<td>
												<span
													style={{
														fontFamily: "Inter, Arial, sans-serif",
														fontSize: "14px",
														fontWeight: "800",
														color: "white",
													}}
												>
													Market
													<span style={{ color: BRAND[400] }}>Bay</span>
												</span>
											</td>
										</tr>
									</tbody>
								</table>
							</td>
						</tr>
						<tr>
							<td style={{ textAlign: "center", paddingBottom: "12px" }}>
								<Text
									style={{
										color: BRAND[200],
										fontSize: "12px",
										margin: "0",
									}}
								>
									© 2026 MarketBay. All rights reserved.
								</Text>
							</td>
						</tr>
						<tr>
							<td style={{ textAlign: "center" }}>
								<table
									style={{ borderCollapse: "collapse", margin: "0 auto" }}
								>
									<tbody>
										<tr>
											<td style={{ padding: "0 8px" }}>
												<a
													href="https://marketbay.com/privacy"
													style={{
														color: BRAND[200],
														fontSize: "11px",
														textDecoration: "none",
													}}
												>
													Privacy
												</a>
											</td>
											<td
												style={{
													color: BRAND[200],
													fontSize: "11px",
												}}
											>
												·
											</td>
											<td style={{ padding: "0 8px" }}>
												<a
													href="https://marketbay.com/terms"
													style={{
														color: BRAND[200],
														fontSize: "11px",
														textDecoration: "none",
													}}
												>
													Terms
												</a>
											</td>
											<td
												style={{
													color: BRAND[200],
													fontSize: "11px",
												}}
											>
												·
											</td>
											<td style={{ padding: "0 8px" }}>
												<a
													href="https://marketbay.com/help"
													style={{
														color: BRAND[200],
														fontSize: "11px",
														textDecoration: "none",
													}}
												>
													Help
												</a>
											</td>
										</tr>
									</tbody>
								</table>
							</td>
						</tr>
					</tbody>
				</table>
			</Container>
		</Section>
	);
}
