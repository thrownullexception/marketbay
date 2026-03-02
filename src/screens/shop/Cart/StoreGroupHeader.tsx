import { Link } from "@tanstack/solid-router";
import { BadgeCheckIcon, TriangleAlert } from "lucide-solid";

interface StoreGroupHeaderProps {
	initials: string;
	name: string;
	storeUrl: string;
	gradientFrom: string;
	gradientTo: string;
	verified?: boolean;
	shippingNote?: string;
	shippingWarning?: string;
}

export const StoreGroupHeader = (props: StoreGroupHeaderProps) => {
	return (
		<div class="flex items-center gap-3 px-5 py-4 border-b border-gray-50 bg-gray-50/50">
			<div
				class={`w-8 h-8 rounded-lg bg-linear-to-br ${props.gradientFrom} ${props.gradientTo} flex items-center justify-center text-white text-[10px] font-bold shrink-0 shadow-sm`}
			>
				{props.initials}
			</div>
			<div class="flex-1 min-w-0">
				<div class="flex items-center gap-2">
					<a
						href={props.storeUrl}
						class="text-sm font-semibold text-gray-900 hover:text-brand-600 transition"
					>
						{props.name}
					</a>
					{props.verified && (
						<span class="inline-flex items-center gap-0.5 px-1.5 py-0.5 bg-blue-50 text-blue-600 text-[10px] font-semibold rounded-full border border-blue-100">
							<BadgeCheckIcon class="w-2.5 h-2.5" aria-label="Verified" />
							Verified
						</span>
					)}
				</div>
				{props.shippingNote && (
					<p class="text-xs text-gray-400 mt-0.5">{props.shippingNote}</p>
				)}
				{props.shippingWarning && (
					<p class="text-xs text-amber-600 mt-0.5 flex items-center gap-1">
						<TriangleAlert class="w-3 h-3" />
						{props.shippingWarning}
					</p>
				)}
			</div>
			<Link
				to="/chat/$storeSlug"
				params={{ storeSlug: "todo" }}
				class="text-xs text-brand-600 font-medium hover:underline hidden sm:inline"
			>
				Chat with seller
			</Link>
		</div>
	);
};
