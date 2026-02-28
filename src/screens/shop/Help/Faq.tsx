import { Accordion } from "@kobalte/core/accordion";
import { ChevronDownIcon } from "lucide-solid";

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

const AccordionItem = ({ faq }: { faq: (typeof faqs)[0] }) => {
	return (
		<Accordion.Item
			class="bg-white rounded-2xl border border-gray-100 overflow-hidden"
			value={faq.question}
		>
			<Accordion.Header class="accordion__item-header">
				<Accordion.Trigger class="w-full px-5 py-4 flex items-center justify-between text-left cursor-pointer">
					<span class="text-sm font-semibold text-gray-900 pr-4">
						{faq.question}
					</span>
					<ChevronDownIcon
						class="faq-chevron w-5 h-5 text-gray-400 shrink-0"
						aria-hidden
					/>
				</Accordion.Trigger>
			</Accordion.Header>
			<Accordion.Content class="faq-answer px-5 pb-0">
				<div class="pb-4">
					<p
						class="text-sm text-gray-600 leading-relaxed"
						innerHTML={faq.answer}
					/>
				</div>
			</Accordion.Content>
		</Accordion.Item>
	);
};

export function Faq() {
	return (
		<section id="faq" class="mb-14">
			<div class="flex items-end justify-between mb-6">
				<div>
					<h2 class="text-xl font-bold text-gray-900">
						Frequently Asked Questions
					</h2>
					<p class="text-gray-500 text-sm mt-0.5">
						Quick answers to common questions
					</p>
				</div>
			</div>
			<Accordion class="accordion" multiple>
				<div class="grid lg:grid-cols-2 gap-4">
					<div class="space-y-3">
						{faqs
							.filter((_, index) => index % 2 === 0)
							.map((faq) => (
								<AccordionItem faq={faq} />
							))}
					</div>

					<div class="space-y-3">
						{faqs
							.filter((_, index) => index % 2 === 1)
							.map((faq) => (
								<AccordionItem faq={faq} />
							))}
					</div>
				</div>
			</Accordion>
		</section>
	);
}
