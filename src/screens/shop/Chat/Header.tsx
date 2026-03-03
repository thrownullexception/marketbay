import { linkOptions } from "@tanstack/solid-router";
import { CheckCheckIcon } from "lucide-solid";
import { Breadcrumb } from "@/ui/breadcrumb";
import { Button } from "@/ui/button";

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
						<Button
							type="button"
							label="Mark All Read"
							variant="default"
							size="sm"
							Icon={CheckCheckIcon}
						/>
					</div>
				</div>
			</div>
		</>
	);
};
