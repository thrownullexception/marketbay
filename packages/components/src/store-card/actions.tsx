import { Link } from "@tanstack/solid-router";
import { ExternalLinkIcon, MessageCircleIcon } from "lucide-solid";

export const StoreCardActions = (props: {
	following?: boolean;
	slug: string;
}) => {
	return (
		<div class="flex gap-2 mt-4">
			<button
				type="button"
				class={`flex-1 px-3 py-2 text-xs font-semibold rounded-lg transition ${
					props.following
						? "bg-brand-600 hover:bg-brand-700 text-white"
						: "bg-brand-50 hover:bg-brand-100 text-brand-600"
				}`}
			>
				{props.following ? "Following" : "Follow"}
			</button>
			<button
				type="button"
				class="px-3 py-2 bg-gray-50 hover:bg-gray-100 text-gray-500 text-xs font-semibold rounded-lg transition"
				aria-label="Chat with seller"
			>
				<MessageCircleIcon class="w-4 h-4" />
			</button>
			<Link
				to="/store/$storeSlug"
				params={{
					storeSlug: props.slug,
				}}
				class="px-3 py-2 bg-gray-50 hover:bg-gray-100 text-gray-500 text-xs font-semibold rounded-lg transition"
				aria-label="Visit store"
			>
				<ExternalLinkIcon class="w-4 h-4" />
			</Link>
		</div>
	);
};
