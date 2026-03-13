import { EmailTemplatePreview } from "@/client/ui/email-template-preview";

export function ShippingNotificationTemplateScreen() {
	return (
		<EmailTemplatePreview
			cta="Track package"
			preheader="Your order is on the way with tracking details included."
			sections={[
				{
					title: "Shipment",
					lines: [
						"Carrier: UPS",
						"Tracking: 1Z0A45X903499223",
						"Shipped Feb 16, 2026",
					],
				},
				{
					title: "Delivery",
					lines: [
						"Estimated arrival: Feb 20",
						"Signature not required",
						"Live tracking enabled",
					],
				},
			]}
			title="Shipping Notification"
			tone="transactional"
		/>
	);
}
