import { Link } from "@tanstack/solid-router";
import { SearchIcon } from "lucide-solid";
import type { JSX } from "solid-js";
import { For, Show } from "solid-js";

interface Conversation {
	initials: string | JSX.Element;
	name: string;
	gradient: string;
	online?: boolean;
	timeAgo: string;
	subject: string;
	lastMessage: string;
	lastMessageSender: string;
	senderHighlight?: boolean;
	unreadCount?: number;
	active?: boolean;
}

const CONVERSATIONS: Conversation[] = [
	{
		initials: "TV",
		name: "TechVault",
		gradient: "from-blue-500 to-indigo-600",
		online: true,
		timeAgo: "2m ago",
		subject: "Re: Pro Studio Wireless Headphones",
		lastMessage:
			"Yes, we can offer free express shipping on that order! Let me...",
		lastMessageSender: "TechVault",
		senderHighlight: true,
		unreadCount: 2,
		active: true,
	},
	{
		initials: "GN",
		name: "GreenNest",
		gradient: "from-emerald-500 to-teal-600",
		online: true,
		timeAgo: "15m ago",
		subject: "Re: Vitamin C Serum — Natural Glow",
		lastMessage: "Great question! The serum is suitable for all skin types...",
		lastMessageSender: "GreenNest",
		senderHighlight: true,
		unreadCount: 1,
	},
	{
		initials: "SH",
		name: "StyleHouse",
		gradient: "from-rose-500 to-pink-600",
		timeAgo: "Yesterday",
		subject: "Re: Cashmere Blend Oversize Sweater",
		lastMessage: "Thanks for the quick reply! I'll place the order now.",
		lastMessageSender: "You",
	},
	{
		initials: "FG",
		name: "FitGear Pro",
		gradient: "from-orange-500 to-amber-600",
		timeAgo: "Feb 24",
		subject: "Re: Resistance Band Set — Pro Series",
		lastMessage: "Your order #MB-29481 has been shipped! Tracking link: ...",
		lastMessageSender: "FitGear Pro",
	},
	{
		initials: "HH",
		name: "HomeHaven",
		gradient: "from-amber-400 to-orange-500",
		timeAgo: "Feb 22",
		subject: "Re: Smart LED Floor Lamp",
		lastMessage: "Got it, thank you! The lamp is amazing.",
		lastMessageSender: "You",
	},
	{
		initials: "BN",
		name: "BookNook",
		gradient: "from-violet-500 to-purple-600",
		timeAgo: "Feb 19",
		subject: "Re: The Art of Focus — 2026 Bestseller",
		lastMessage: "We appreciate your support! Use code READER15 for 15% off...",
		lastMessageSender: "BookNook",
	},
];

const SUPPORT_CONVERSATION: Conversation = {
	initials: (
		<svg
			class="w-5 h-5"
			fill="none"
			viewBox="0 0 24 24"
			stroke="currentColor"
			stroke-width="2"
		>
			<title>Support</title>
			<path
				stroke-linecap="round"
				stroke-linejoin="round"
				d="M13 10V3L4 14h7v7l9-11h-7z"
			/>
		</svg>
	),
	name: "MarketBay Support",
	gradient: "from-brand-500 to-brand-700",
	timeAgo: "Feb 15",
	subject: "Account & Orders",
	lastMessage: "Your refund for order #MB-28103 has been processed...",
	lastMessageSender: "Support",
};

const ConversationItem = (props: { conversation: Conversation }) => {
	const isUnread = () => (props.conversation.unreadCount ?? 0) > 0;

	return (
		<Link to="/messages/$storeSlug" params={{ storeSlug: "todo" }}>
			<div
				class={`conversation-item flex items-start gap-3 px-4 py-3.5 cursor-pointer border-b border-gray-50 ${props.conversation.active ? "active" : ""}`}
			>
				<div class="relative shrink-0">
					<div
						class={`w-11 h-11 rounded-xl bg-linear-to-br ${props.conversation.gradient} flex items-center justify-center text-white text-xs font-bold shadow-sm`}
					>
						{props.conversation.initials}
					</div>
					<Show when={props.conversation.online}>
						<span class="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-emerald-400 border-2 border-white rounded-full" />
					</Show>
				</div>
				<div class="flex-1 min-w-0">
					<div class="flex items-center justify-between">
						<h3
							class={`text-sm truncate ${isUnread() ? "font-semibold text-gray-900" : "font-medium text-gray-700"}`}
						>
							{props.conversation.name}
						</h3>
						<span
							class={`text-[11px] shrink-0 ${isUnread() ? "text-brand-600 font-medium" : "text-gray-400"}`}
						>
							{props.conversation.timeAgo}
						</span>
					</div>
					<p class="text-xs text-gray-500 mt-0.5 truncate">
						{props.conversation.subject}
					</p>
					<p
						class={`text-xs mt-0.5 truncate ${isUnread() ? "text-gray-600" : "text-gray-500"}`}
					>
						<span
							class={`font-medium ${props.conversation.senderHighlight ? "text-brand-600" : ""}`}
						>
							{props.conversation.lastMessageSender}:
						</span>{" "}
						{props.conversation.lastMessage}
					</p>
				</div>
				<Show when={props.conversation.unreadCount}>
					<span class="w-5 h-5 bg-brand-600 text-white text-[10px] font-bold rounded-full flex items-center justify-center shrink-0 mt-1">
						{props.conversation.unreadCount}
					</span>
				</Show>
			</div>
		</Link>
	);
};

const FILTER_TABS = ["All", "Unread", "Buying", "Selling"];

export const ConversationList = () => {
	return (
		<div
			class="w-full sm:w-80 lg:w-96 border-r border-gray-200 flex flex-col shrink-0"
			id="conversationList"
		>
			<div class="p-3 border-b border-gray-100">
				<div class="relative">
					<input
						type="text"
						placeholder="Search messages..."
						class="w-full pl-9 pr-3 py-2 rounded-lg border border-gray-200 bg-gray-50 text-sm focus:outline-none focus:ring-2 focus:ring-brand-400 focus:border-transparent transition"
					/>
					<SearchIcon class="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-gray-400" />
				</div>
				<div class="flex gap-1.5 mt-2">
					<For each={FILTER_TABS}>
						{(tab, i) => (
							<button
								type="button"
								class={`px-2.5 py-1 text-xs font-semibold rounded-full transition ${
									i() === 0
										? "bg-brand-600 text-white"
										: "bg-gray-100 text-gray-600 hover:bg-gray-200"
								}`}
							>
								{tab}
							</button>
						)}
					</For>
				</div>
			</div>

			<div class="flex-1 overflow-y-auto scrollbar-hide">
				<For each={CONVERSATIONS}>
					{(conv) => <ConversationItem conversation={conv} />}
				</For>
				<ConversationItem conversation={SUPPORT_CONVERSATION} />
			</div>
		</div>
	);
};
