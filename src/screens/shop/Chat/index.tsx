import "./styles.css";
import { linkOptions, Outlet } from "@tanstack/solid-router";
import { ScreenSectionCard } from "@/screens/_components/screen-section-card";
import { Breadcrumb } from "@/ui/breadcrumb";
import { ChatConversations } from "./Conversations";

export function ChatLayout() {
	return (
		<>
			<Breadcrumb
				items={[
					{ label: "Home", link: linkOptions({ to: "/" }) },
					{ label: "Messages", link: linkOptions({ to: "/chat" }) },
				]}
			/>
			<ScreenSectionCard title="Messages" description="Chat with stores">
				<div
					class="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm"
					style="height: calc(100vh - 240px); min-height: 500px;"
				>
					<div class="flex h-full">
						<ChatConversations />
						<Outlet />
					</div>
				</div>
			</ScreenSectionCard>
		</>
	);
}
