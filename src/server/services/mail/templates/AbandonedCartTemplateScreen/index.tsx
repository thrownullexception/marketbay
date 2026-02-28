import { EmailTemplatePreview } from "@/client/ui/email-template-preview";

export function AbandonedCartTemplateScreen() {
	return (
		<EmailTemplatePreview
			cta="Complete purchase"
			preheader="Items in your cart are almost gone. Checkout now."
			sections={[
				{
					title: "Saved cart",
					lines: [
						"Leather Weekender Tote",
						"Travel Organizer Set",
						"Cart total: $166",
					],
				},
				{
					title: "Urgency",
					lines: [
						"2 items low in stock",
						"Prices may change",
						"Fast checkout available",
					],
				},
			]}
			title="Abandoned Cart Reminder"
			tone="marketing"
		/>
	);
}
