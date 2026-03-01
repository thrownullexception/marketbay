import "./styles.css";
import { Outlet } from "@tanstack/solid-router";
import { ChatConversations } from "./Conversations";
import { ChatHeader } from "./Header";

export function ChatLayout() {
	return (
		<>
			<ChatHeader />
			<main class="max-w-7xl mx-auto px-4">
				<div
					class="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm"
					style="height: calc(100vh - 240px); min-height: 500px;"
				>
					<div class="flex h-full">
						<ChatConversations />
						<Outlet />
					</div>
				</div>
			</main>
		</>
	);
}
