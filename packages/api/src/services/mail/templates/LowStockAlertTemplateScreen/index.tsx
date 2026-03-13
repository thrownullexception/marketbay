import { EmailTemplatePreview } from "@/client/ui/email-template-preview";

export function LowStockAlertTemplateScreen() {
	return (
		<EmailTemplatePreview
			cta="Update inventory"
			preheader="Several SKUs are below your stock threshold."
			sections={[
				{
					title: "Low stock items",
					lines: [
						"Leather Weekender Tote: 3 left",
						"Canvas Utility Bag: 5 left",
						"Travel Organizer Set: 4 left",
					],
				},
				{
					title: "Recommendations",
					lines: [
						"Create restock PO",
						"Adjust threshold",
						"Pause ads for low SKUs",
					],
				},
			]}
			title="Low Stock Alert"
			tone="operational"
		/>
	);
}
