import { MessageCircleIcon } from "lucide-solid";

export const ChatEmptyState = () => {
	return (
		<div class="flex flex-col items-center justify-center flex-1 bg-gray-50/50">
			<div class="text-center max-w-xs">
				<div class="w-16 h-16 rounded-2xl bg-brand-50 flex items-center justify-center mx-auto mb-4">
					<MessageCircleIcon class="w-8 h-8 text-brand-300" />
				</div>
				<h3 class="text-base font-semibold text-gray-900 mb-1">
					Your Messages
				</h3>
				<p class="text-sm text-gray-500">
					Select a conversation to start chatting with sellers and buyers on
					MarketBay.
				</p>
			</div>
		</div>
	);
};
