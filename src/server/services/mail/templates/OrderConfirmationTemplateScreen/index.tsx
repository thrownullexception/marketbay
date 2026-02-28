import { EmailTemplatePreview } from "@/client/ui/email-template-preview";

export function OrderConfirmationTemplateScreen() {
	return (
		<EmailTemplatePreview
			cta="Track order"
			preheader="Your order #MV-10248 is confirmed and being prepared."
			sections={[
				{
					title: "Order details",
					lines: [
						"Order #MV-10248",
						"Placed Feb 15, 2026",
						"Payment confirmed",
					],
				},
				{
					title: "Items",
					lines: [
						"Leather Weekender Tote x1",
						"Travel Organizer Set x1",
						"Total: $188",
					],
				},
				{
					title: "Shipping",
					lines: [
						"243 Mercer St, New York, NY",
						"Standard shipping",
						"ETA Feb 20",
					],
				},
			]}
			title="Order Confirmation"
			tone="transactional"
		/>
	);
}
