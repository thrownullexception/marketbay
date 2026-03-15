import { linkOptions } from "@tanstack/solid-router";
import { Breadcrumb } from "@/ui/breadcrumb";
import { HelpByTopic } from "./HelpByTopic";
import "./styles.css";
import {
	FlagIcon,
	MailIcon,
	MapIcon,
	MessageCircleMore,
	PercentIcon,
	PhoneIcon,
	SearchIcon,
	StarIcon,
} from "lucide-solid";
import { CONSTANTS } from "@/env/client";
import { AnchorLink, LinkButton } from "@/ui/button";
import { Container } from "@/ui/container";
import { Grid4 } from "@/ui/grid";
import { ScreenSectionCard } from "@/ui/screen-section-card";
import { Faq } from "./Faq";

export function HelpScreen() {
	return (
		<>
			<Breadcrumb
				items={[
					{ label: "Home", link: linkOptions({ to: "/" }) },
					{ label: "Help", link: linkOptions({ to: "/help" }) },
				]}
			/>
			<section class="relative overflow-hidden bg-linear-to-r from-brand-600 to-brand-800">
				<div class="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48Y2lyY2xlIGN4PSIyMCIgY3k9IjIwIiByPSIxLjUiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4wNikiLz48L3N2Zz4=')] opacity-80"></div>
				<div class="relative max-w-3xl mx-auto px-4 py-12 sm:py-16 text-center">
					<h1 class="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white mb-3">
						How can we help you?
					</h1>
					<p class="text-brand-200 text-sm sm:text-base mb-8">
						Search our knowledge base or browse topics below
					</p>
					<div class="relative max-w-xl mx-auto">
						<input
							type="text"
							placeholder="Search for answers — e.g. 'return policy', 'track order'..."
							class="w-full pl-12 pr-4 py-4 rounded-2xl border-0 bg-white text-sm focus:outline-none focus:ring-4 focus:ring-white/30 transition shadow-lg text-gray-900 placeholder-gray-400"
						/>
						<SearchIcon class="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
					</div>
					<div class="flex flex-wrap items-center justify-center gap-2 mt-5 text-xs text-brand-200">
						<span>Popular:</span>
						<a
							href="#faq"
							class="px-2.5 py-1 bg-white/15 hover:bg-white/25 rounded-full transition"
						>
							Track my order
						</a>
						<a
							href="#faq"
							class="px-2.5 py-1 bg-white/15 hover:bg-white/25 rounded-full transition"
						>
							Return an item
						</a>
						<a
							href="#faq"
							class="px-2.5 py-1 bg-white/15 hover:bg-white/25 rounded-full transition"
						>
							Payment issues
						</a>
						<a
							href="#faq"
							class="px-2.5 py-1 bg-white/15 hover:bg-white/25 rounded-full transition"
						>
							Seller account
						</a>
					</div>
				</div>
			</section>

			<Container>
				<HelpByTopic />
				<Faq />

				<div class="bg-white rounded-2xl border border-gray-100 overflow-hidden">
					<div class="grid lg:grid-cols-3 divide-y lg:divide-y-0 lg:divide-x divide-gray-100">
						<div class="p-6 lg:p-8 flex flex-col items-center text-center">
							<div class="w-14 h-14 rounded-2xl bg-brand-50 flex items-center justify-center mx-auto mb-4">
								<MessageCircleMore class="w-7 h-7 text-brand-600" />
							</div>
							<h3 class="text-sm font-bold text-gray-900 mb-1">Live Chat</h3>
							<p class="text-xs text-gray-500 mb-4 leading-relaxed">
								Chat with our support team in real-time. Average response time
								under 2 minutes.
							</p>
							<LinkButton
								link={linkOptions({
									to: "/chat/$storeSlug",
									params: { storeSlug: "marketbay" },
								})}
								label="Start Chat"
								variant="primary"
								Icon={MessageCircleMore}
							/>
							<p class="text-[11px] text-emerald-600 font-medium mt-3 flex items-center justify-center gap-1">
								<span class="w-1.5 h-1.5 bg-emerald-400 rounded-full"></span>
								Available now
							</p>
						</div>

						<div class="p-6 lg:p-8 flex flex-col items-center text-center">
							<div class="w-14 h-14 rounded-2xl bg-violet-50 flex items-center justify-center mx-auto mb-4">
								<MailIcon class="w-7 h-7 text-violet-600" />
							</div>
							<h3 class="text-sm font-bold text-gray-900 mb-1">
								Email Support
							</h3>
							<p class="text-xs text-gray-500 mb-4 leading-relaxed">
								Send us a detailed message and we'll get back to you within 24
								hours.
							</p>
							<AnchorLink
								href={CONSTANTS.SUPPORT.EMAIL}
								label="Send Email"
								variant="default"
								Icon={MailIcon}
							/>
							<p class="text-[11px] text-gray-400 mt-3">
								{CONSTANTS.SUPPORT.EMAIL}
							</p>
						</div>

						<div class="p-6 lg:p-8 flex flex-col items-center text-center">
							<div class="w-14 h-14 rounded-2xl bg-accent-50 flex items-center justify-center mx-auto mb-4">
								<PhoneIcon class="w-7 h-7 text-accent-600" />
							</div>
							<h3 class="text-sm font-bold text-gray-900 mb-1">
								Phone Support
							</h3>
							<p class="text-xs text-gray-500 mb-4 leading-relaxed">
								Talk to a human. Available Mon-Fri, 8 AM - 8 PM.
							</p>
							<AnchorLink
								href={CONSTANTS.SUPPORT.PHONE}
								label="Call Us"
								variant="default"
								Icon={PhoneIcon}
							/>
							<p class="text-[11px] text-gray-400 mt-3">
								{CONSTANTS.SUPPORT.PHONE}
							</p>
						</div>
					</div>
				</div>

				<ScreenSectionCard title="Quick links">
					<Grid4>
						{[
							{
								title: "Shipping Zones",
								description: "Where we deliver",
								Icon: MapIcon,
							},
							{
								title: "Promo Codes",
								description: "How to use discounts",
								Icon: PercentIcon,
							},
							{
								title: "Seller Reviews",
								description: "How ratings work",
								Icon: StarIcon,
							},
							{
								title: "Report an Issue",
								description: "Flag problems",
								Icon: FlagIcon,
							},
						].map((item) => (
							<a
								href="/todo"
								class="flex items-center gap-3 bg-white rounded-2xl border border-gray-100 p-4 hover:border-brand-200 hover:bg-brand-50/30 transition group"
							>
								<div class="w-10 h-10 rounded-xl bg-gray-50 group-hover:bg-brand-50 flex items-center justify-center shrink-0 transition-colors">
									<item.Icon class="w-5 h-5 text-gray-400 group-hover:text-brand-600 transition-colors" />
								</div>
								<div>
									<p class="text-sm font-semibold text-gray-900">
										{item.title}
									</p>
									<p class="text-xs text-gray-500">{item.description}</p>
								</div>
							</a>
						))}
					</Grid4>
				</ScreenSectionCard>
			</Container>
		</>
	);
}
