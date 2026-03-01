import { Link } from "@tanstack/solid-router";
import {
	ExternalLinkIcon,
	ImageIcon,
	MoreVerticalIcon,
	PaperclipIcon,
	SendIcon,
} from "lucide-solid";
import { For } from "solid-js";

interface ChatMessage {
	sender: "user" | "store";
	text: string;
	time: string;
}

const MESSAGES: ChatMessage[] = [
	{
		sender: "user",
		text: "Hi! I'm interested in the Pro Studio Wireless Headphones. Do you offer express shipping? I need them before Friday.",
		time: "10:23 AM",
	},
	{
		sender: "store",
		text: "Hey Alex! Thanks for your interest in the Pro Studios. We do offer express shipping — it's normally $9.99 but I can check if we can waive that for you.",
		time: "10:25 AM",
	},
	{
		sender: "user",
		text: "That would be amazing! I'm also choosing between the Matte Black and Navy Blue. Which one is more popular?",
		time: "10:28 AM",
	},
	{
		sender: "store",
		text: "Great choices! Matte Black is our bestseller — about 60% of orders. But the Navy Blue has been picking up lately, it looks really premium in person. Both have the same features and build quality.",
		time: "10:31 AM",
	},
	{
		sender: "store",
		text: "And good news — I checked with our warehouse and we can do free express shipping for you since you're a first-time buyer! Order before 2 PM and they'll arrive Thursday.",
		time: "10:32 AM",
	},
	{
		sender: "user",
		text: "That's perfect, thank you! One more question — does the -40% discount end soon?",
		time: "10:35 AM",
	},
	{
		sender: "store",
		text: "Yes, we can offer free express shipping on that order! Let me also mention — the 40% discount is part of our flash sale ending tonight at midnight. After that it goes back to $99.99. So I'd recommend ordering soon if you want to lock in the $59.99 price.",
		time: "10:37 AM",
	},
];

const QUICK_REPLIES = [
	"Is this still available?",
	"Can you offer a discount?",
	"What's the shipping time?",
	"Do you accept returns?",
];

const CHECK_PATH =
	"M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z";

const UserBubble = (props: { message: ChatMessage }) => (
	<div class="flex justify-end gap-2.5">
		<div class="max-w-[70%]">
			<div class="bg-brand-600 text-white px-4 py-2.5 rounded-2xl rounded-br-md">
				<p class="text-sm leading-relaxed">{props.message.text}</p>
			</div>
			<div class="flex items-center justify-end gap-1 mt-1">
				<span class="text-[10px] text-gray-400">{props.message.time}</span>
				<svg
					class="w-3.5 h-3.5 text-brand-400"
					fill="currentColor"
					viewBox="0 0 20 20"
				>
					<title>Sent</title>
					<path fill-rule="evenodd" d={CHECK_PATH} clip-rule="evenodd" />
				</svg>
			</div>
		</div>
	</div>
);

const StoreBubble = (props: { message: ChatMessage; showAvatar: boolean }) => (
	<div class="flex gap-2.5">
		<div class="w-7 h-7 shrink-0 mt-1">
			{props.showAvatar && (
				<div class="w-7 h-7 rounded-lg bg-linear-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-white text-[9px] font-bold">
					TV
				</div>
			)}
		</div>
		<div class="max-w-[70%]">
			<div class="bg-gray-100 text-gray-800 px-4 py-2.5 rounded-2xl rounded-bl-md">
				<p class="text-sm leading-relaxed">{props.message.text}</p>
			</div>
			<span class="text-[10px] text-gray-400 mt-1 block">
				{props.message.time}
			</span>
		</div>
	</div>
);

export const ChatView = () => {
	return (
		<div class="hidden sm:flex flex-col flex-1" id="chatView">
			<div class="flex items-center justify-between px-5 py-3 border-b border-gray-100 bg-white">
				<div class="flex items-center gap-3">
					<div class="relative">
						<div class="w-10 h-10 rounded-xl bg-linear-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-white text-xs font-bold shadow-sm">
							TV
						</div>
						<span class="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-emerald-400 border-2 border-white rounded-full" />
					</div>
					<div>
						<div class="flex items-center gap-2">
							<h2 class="text-sm font-semibold text-gray-900">TechVault</h2>
							<span class="inline-flex items-center gap-0.5 px-1.5 py-0.5 bg-blue-50 text-blue-600 text-[10px] font-semibold rounded-full border border-blue-100">
								<svg
									class="w-2.5 h-2.5"
									fill="currentColor"
									viewBox="0 0 20 20"
								>
									<title>Verified</title>
									<path
										fill-rule="evenodd"
										d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
										clip-rule="evenodd"
									/>
								</svg>
								Verified
							</span>
						</div>
						<p class="text-[11px] text-emerald-500 font-medium">Online now</p>
					</div>
				</div>
				<div class="flex items-center gap-1.5">
					<Link
						to="/store/$storeSlug"
						params={{ storeSlug: "techvault" }}
						class="p-2 rounded-lg hover:bg-gray-100 text-gray-400 hover:text-gray-600 transition"
						title="Visit Store"
					>
						<ExternalLinkIcon class="w-4.5 h-4.5" />
					</Link>
					<button
						type="button"
						class="p-2 rounded-lg hover:bg-gray-100 text-gray-400 hover:text-gray-600 transition"
						title="More options"
					>
						<MoreVerticalIcon class="w-4.5 h-4.5" />
					</button>
				</div>
			</div>

			<div class="px-5 py-2.5 bg-gray-50 border-b border-gray-100">
				<Link
					to="/product/$productSlug"
					params={{ productSlug: "pro-studio-wireless-headphones" }}
					class="flex items-center gap-3 group"
				>
					<div class="w-10 h-10 rounded-lg bg-linear-to-br from-blue-50 to-indigo-100 flex items-center justify-center shrink-0">
						<svg
							class="w-5 h-5 text-brand-300"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
							stroke-width="1.5"
						>
							<title>Product</title>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								d="M19.114 5.636a9 9 0 010 12.728M16.463 8.288a5.25 5.25 0 010 7.424M6.75 8.25l4.72-4.72a.75.75 0 011.28.53v15.88a.75.75 0 01-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.01 9.01 0 012.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75z"
							/>
						</svg>
					</div>
					<div class="flex-1 min-w-0">
						<p class="text-xs text-gray-400">Discussing</p>
						<p class="text-sm font-medium text-gray-700 group-hover:text-brand-600 transition truncate">
							Pro Studio Wireless Headphones — Active Noise Cancelling
						</p>
					</div>
					<div class="shrink-0">
						<span class="text-sm font-bold text-gray-900">$59.99</span>
						<span class="text-xs text-gray-400 line-through ml-1">$99.99</span>
					</div>
					<svg
						class="w-4 h-4 text-gray-300 shrink-0"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
						stroke-width="2"
					>
						<title>View product</title>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							d="M9 5l7 7-7 7"
						/>
					</svg>
				</Link>
			</div>

			<div class="flex-1 overflow-y-auto px-5 py-5 space-y-5 chat-scrollbar bg-white">
				<div class="flex items-center gap-3">
					<hr class="flex-1 border-gray-100" />
					<span class="text-[11px] text-gray-400 font-medium">Today</span>
					<hr class="flex-1 border-gray-100" />
				</div>

				<For each={MESSAGES}>
					{(msg, i) => {
						if (msg.sender === "user") {
							return <UserBubble message={msg} />;
						}
						const prev = MESSAGES[i() - 1];
						const showAvatar = !prev || prev.sender !== "store";
						return <StoreBubble message={msg} showAvatar={showAvatar} />;
					}}
				</For>

				<div class="flex gap-2.5 items-end opacity-0" id="typingIndicator">
					<div class="w-7 h-7 rounded-lg bg-linear-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-white text-[9px] font-bold shrink-0">
						TV
					</div>
					<div class="bg-gray-100 px-4 py-3 rounded-2xl rounded-bl-md">
						<div class="flex gap-1">
							<span
								class="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
								style="animation-delay: 0ms"
							/>
							<span
								class="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
								style="animation-delay: 150ms"
							/>
							<span
								class="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
								style="animation-delay: 300ms"
							/>
						</div>
					</div>
				</div>
			</div>

			<div class="px-5 py-2 border-t border-gray-50 bg-gray-50/50">
				<div class="flex gap-2 overflow-x-auto scrollbar-hide">
					<For each={QUICK_REPLIES}>
						{(reply) => (
							<button
								type="button"
								class="shrink-0 px-3 py-1.5 text-xs font-medium text-gray-500 bg-white border border-gray-200 rounded-full hover:bg-gray-50 hover:text-gray-700 transition"
							>
								{reply}
							</button>
						)}
					</For>
				</div>
			</div>

			<div class="px-4 py-3 border-t border-gray-200 bg-white">
				<div class="flex items-end gap-2">
					<button
						type="button"
						class="p-2 rounded-lg hover:bg-gray-100 text-gray-400 hover:text-gray-600 transition shrink-0"
						title="Attach file"
					>
						<PaperclipIcon class="w-5 h-5" />
					</button>
					<button
						type="button"
						class="p-2 rounded-lg hover:bg-gray-100 text-gray-400 hover:text-gray-600 transition shrink-0"
						title="Send image"
					>
						<ImageIcon class="w-5 h-5" />
					</button>
					<div class="flex-1 relative">
						<textarea
							rows="1"
							placeholder="Type a message..."
							class="w-full px-4 py-2.5 rounded-xl border border-gray-200 bg-gray-50 text-sm focus:outline-none focus:ring-2 focus:ring-brand-400 focus:border-transparent transition resize-none"
							style="min-height: 42px; max-height: 120px;"
						/>
					</div>
					<button
						type="button"
						class="p-2.5 bg-brand-600 hover:bg-brand-700 text-white rounded-xl transition shrink-0 shadow-sm"
						title="Send message"
					>
						<SendIcon class="w-5 h-5" />
					</button>
				</div>
				<p class="text-[10px] text-gray-400 mt-1.5 text-center">
					Avg. reply time:{" "}
					<span class="font-medium text-emerald-500">&lt; 5 minutes</span>
				</p>
			</div>
		</div>
	);
};
