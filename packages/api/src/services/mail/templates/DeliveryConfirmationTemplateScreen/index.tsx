import { EmailTemplatePreview } from "@/client/ui/email-template-preview";

export function DeliveryConfirmationTemplateScreen() {
	return (
		<EmailTemplatePreview
			cta="Leave a review"
			preheader="Your package was delivered. Tell us how it went."
			sections={[
				{
					title: "Delivery status",
					lines: [
						"Delivered Feb 20, 2026",
						"Left at front desk",
						"Photo proof available",
					],
				},
				{
					title: "Next actions",
					lines: [
						"Rate your purchase",
						"Report an issue",
						"Buy again recommendations",
					],
				},
			]}
			title="Delivery Confirmation"
			tone="transactional"
		/>
	);
}
