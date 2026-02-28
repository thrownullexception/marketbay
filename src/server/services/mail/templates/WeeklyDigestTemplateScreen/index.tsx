import { EmailTemplatePreview } from "@/client/ui/email-template-preview";

export function WeeklyDigestTemplateScreen() {
	return (
		<EmailTemplatePreview
			cta="Explore updates"
			preheader="Your weekly roundup from followed stores and trending picks."
			sections={[
				{
					title: "From stores you follow",
					lines: [
						"Atelier Finch: 4 new products",
						"Oak & Ash: 20% weekend sale",
						"Northline: New spring collection",
					],
				},
				{
					title: "Recommended",
					lines: [
						"Trending travel accessories",
						"Top-rated home decor",
						"Recently viewed back in stock",
					],
				},
			]}
			title="Weekly Digest"
			tone="marketing"
		/>
	);
}
