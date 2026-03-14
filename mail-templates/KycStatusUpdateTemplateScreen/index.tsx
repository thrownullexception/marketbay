import { EmailTemplatePreview } from "@/client/ui/email-template-preview";

export function KycStatusUpdateTemplateScreen() {
	return (
		<EmailTemplatePreview
			cta="View verification"
			preheader="Your business verification status has changed."
			sections={[
				{
					title: "Status",
					lines: [
						"Current status: Approved",
						"Level: Verified",
						"Effective date: Feb 15, 2026",
					],
				},
				{
					title: "If rejected",
					lines: [
						"Review rejection reasons",
						"Re-upload required docs",
						"Contact support for appeal",
					],
				},
			]}
			title="KYC Status Update"
			tone="operational"
		/>
	);
}
