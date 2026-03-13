import { EmailTemplatePreview } from "@/client/ui/email-template-preview";

export function NewFollowerTemplateScreen() {
	return (
		<EmailTemplatePreview
			cta="View follower"
			preheader="You have a new follower interested in your store."
			sections={[
				{
					title: "Follower update",
					lines: [
						"Marcus Lee started following Atelier Finch",
						"Follower count: 1,420",
						"Milestone reached: 1.4k",
					],
				},
				{
					title: "Suggestions",
					lines: [
						"Publish new arrivals",
						"Launch limited promo",
						"Message followers with updates",
					],
				},
			]}
			title="New Follower Notification"
			tone="operational"
		/>
	);
}
