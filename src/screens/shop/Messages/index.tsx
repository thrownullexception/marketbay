import "./styles.css";
import { Outlet } from "@tanstack/solid-router";
import { ChatEmptyState } from "./ChatEmptyState";
import { ChatView } from "./ChatView";
import { ConversationList } from "./ConversationList";
import { MessagesHeader } from "./MessagesHeader";

export function MessagesLayout() {
	return (
		<>
			<MessagesHeader />
			<main class="max-w-7xl mx-auto px-4">
				<div
					class="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm"
					style="height: calc(100vh - 240px); min-height: 500px;"
				>
					<div class="flex h-full">
						<ConversationList />
						<Outlet />
					</div>
				</div>
			</main>
		</>
	);
}
