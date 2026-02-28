import { EmailTemplatePreview } from "@/client/ui/email-template-preview";

export function NewMessageTemplateScreen() {
	return (
		<EmailTemplatePreview
			cta="Reply now"
			preheader="A new message is waiting in your inbox."
			sections={[
				{
					title: "Message preview",
					lines: [
						"From: Maya Rivera",
						"Can you ship this before Friday?",
						"Conversation: Order #MV-10248",
					],
				},
				{
					title: "Actions",
					lines: [
						"Open conversation",
						"Use canned response",
						"Mark resolved after reply",
					],
				},
			]}
			title="New Message Alert"
			tone="transactional"
		/>
	);
}
