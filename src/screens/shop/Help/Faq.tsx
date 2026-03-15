const faqs = [
	{
		question: "How do I track my order?",
		answer:
			'Go to <strong>My Account &rarr; My Orders</strong> and click on the order you want to track. You\'ll see real-time tracking updates including estimated delivery dates. You can also use the "Order Tracking" link in the top bar with your order number.',
	},
	{
		question: "What is the return policy?",
		answer:
			"Most items can be returned within <strong>30 days</strong> of delivery for a full refund. Items must be unused and in their original packaging. Some categories (perishables, personalized items) may have different policies — check the product page for details.",
	},
	{
		question: "How do I contact a seller?",
		answer:
			"Visit the seller's store page and click the <strong>Chat</strong> button, or go to <strong>Messages</strong> in your dashboard. You can ask about products, shipping, or anything else before or after purchasing.",
	},
	{
		question: "Is my payment information secure?",
		answer:
			"Yes. All transactions are encrypted with <strong>256-bit SSL</strong> and processed through PCI-compliant payment providers. We never store your full card details on our servers. You can also enable two-factor authentication for additional security.",
	},
	{
		question: "How long does shipping take?",
		answer:
			"Shipping times vary by seller and location. Most domestic orders arrive within <strong>3-7 business days</strong>. Express shipping (1-2 days) is available from select sellers. International orders typically take 7-14 business days.",
	},
	{
		question: "How do I become a seller?",
		answer:
			'Click <strong>"Sell on MarketBay"</strong> in the top bar or visit the Create Store page. You\'ll need to provide basic business information, verify your identity, and set up a payment method to receive funds. Store setup takes less than 10 minutes.',
	},
	{
		question: "How do promo codes work?",
		answer:
			'Enter your promo code at <strong>checkout</strong> in the "Discount Code" field. Codes are case-insensitive. Some codes are store-specific while others work across all sellers. Only one code can be applied per order.',
	},
	{
		question: "What is Buyer Protection?",
		answer:
			"Every purchase on MarketBay is covered by our <strong>Buyer Protection</strong> program. If your item doesn't arrive, arrives damaged, or doesn't match the listing, you can open a dispute and we'll help resolve it — including a full refund if needed.",
	},
];

import { AccordionItem } from "@/ui/accordion";
import { Grid2 } from "@/ui/grid";
import { ScreenSectionCard } from "@/ui/screen-section-card";

export function Faq() {
	return (
		<ScreenSectionCard
			title="Frequently Asked Questions"
			description="Quick answers to common questions"
		>
			<Grid2>
				<div class="space-y-3">
					{faqs
						.filter((_, index) => index % 2 === 0)
						.map((faq) => (
							<AccordionItem question={faq.question} answer={faq.answer} />
						))}
				</div>

				<div class="space-y-3">
					{faqs
						.filter((_, index) => index % 2 === 1)
						.map((faq) => (
							<AccordionItem question={faq.question} answer={faq.answer} />
						))}
				</div>
			</Grid2>
		</ScreenSectionCard>
	);
}
