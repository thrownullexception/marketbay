import { EmailTemplatePreview } from "@/client/ui/email-template-preview";

export function PromotionWonTemplateScreen() {
	return (
		<EmailTemplatePreview
			cta="Set up campaign"
			preheader="Congratulations, your bid won a promotion slot."
			sections={[
				{
					title: "Auction result",
					lines: [
						"Slot: Homepage Hero",
						"Winning bid: $24 CPM",
						"Campaign window: Feb 20-27",
					],
				},
				{
					title: "Next steps",
					lines: [
						"Upload creatives",
						"Set budget cap",
						"Enable performance alerts",
					],
				},
			]}
			title="Promotion Slot Won"
			tone="marketing"
		/>
	);
}
