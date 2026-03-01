import { linkOptions } from "@tanstack/solid-router";
import { CheckCheckIcon } from "lucide-solid";
import { Breadcrumb } from "@/ui/breadcrumb";

export const ChatHeader = () => {
	return (
		<>
			<Breadcrumb
				items={[
					{ label: "Home", link: linkOptions({ to: "/" }) },
					{ label: "Messages", link: linkOptions({ to: "/chat" }) },
				]}
			/>

			<div class="max-w-7xl mx-auto px-4 py-6">
				<div class="flex items-center justify-between mb-5">
					<div>
						<h1 class="text-xl font-bold text-gray-900">Messages</h1>
						<p class="text-sm text-gray-500 mt-0.5">Chat with stores</p>
					</div>
					<div class="flex items-center gap-2">
						<button
							type="button"
							class="hidden sm:inline-flex items-center gap-1.5 px-3 py-2 text-xs font-semibold text-gray-600 bg-gray-100 hover:bg-gray-200 rounded-lg transition"
						>
							<CheckCheckIcon class="w-3.5 h-3.5" />
							Mark All Read
						</button>
					</div>
				</div>
			</div>
		</>
	);
};
