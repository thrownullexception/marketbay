import { Link } from "@tanstack/solid-router";
import { ExternalLinkIcon, MessageCircleIcon } from "lucide-solid";
import "./styles.css";

export interface StoreCardData {
	name: string;
	initials: string;
	category: string;
	rating: string;
	reviewCount: string;
	avatarGradient: string;
	avatarShadow: string;
	following?: boolean;
}

export const StoreCard = (props: { store: StoreCardData }) => (
	<div class="store-card bg-white rounded-2xl border border-gray-100 p-5 transition-all duration-300">
		<div class="flex items-center gap-3">
			<div
				class={`w-12 h-12 rounded-xl bg-linear-to-br ${props.store.avatarGradient} flex items-center justify-center text-white text-sm font-bold shrink-0 shadow-md ${props.store.avatarShadow}`}
			>
				{props.store.initials}
			</div>
			<div class="min-w-0">
				<h3 class="font-semibold text-gray-900 text-sm truncate">
					{props.store.name}
				</h3>
				<p class="text-xs text-gray-500 truncate">{props.store.category}</p>
				<div class="flex items-center gap-1 mt-0.5">
					<svg
						class="w-3 h-3 text-accent-500"
						fill="currentColor"
						viewBox="0 0 20 20"
					>
						<title>Rating</title>
						<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
					</svg>
					<span class="text-xs text-gray-500">
						{props.store.rating} &bull; {props.store.reviewCount}
					</span>
				</div>
			</div>
		</div>
		<div class="flex gap-2 mt-4">
			<button
				type="button"
				class={`flex-1 px-3 py-2 text-xs font-semibold rounded-lg transition ${
					props.store.following
						? "bg-brand-600 hover:bg-brand-700 text-white"
						: "bg-brand-50 hover:bg-brand-100 text-brand-600"
				}`}
			>
				{props.store.following ? "Following" : "Follow"}
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
					storeSlug: props.store.name.toLowerCase().replace(/\s+/g, "-"),
				}}
				class="px-3 py-2 bg-gray-50 hover:bg-gray-100 text-gray-500 text-xs font-semibold rounded-lg transition"
				aria-label="Visit store"
			>
				<ExternalLinkIcon class="w-4 h-4" />
			</Link>
		</div>
	</div>
);
