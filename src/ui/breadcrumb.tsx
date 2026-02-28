import { Link } from "@tanstack/solid-router";
import { ChevronRight } from "lucide-solid";

export function Breadcrumb({
	items,
}: {
	items: {
		label: string;
		to: string;
	}[];
}) {
	return (
		<div class="bg-white border-b border-gray-100">
			<div class="max-w-7xl mx-auto px-4 py-2.5">
				<nav class="flex items-center gap-1.5 text-xs text-gray-400">
					{items.slice(0, -1).map((item) => (
						<>
							<Link to={item.to} class="hover:text-brand-600 transition">
								{item.label}
							</Link>
							<ChevronRight class="w-3 h-3 shrink-0" />
						</>
					))}
					<span class="text-gray-600 font-medium">
						{items[items.length - 1].label}
					</span>
				</nav>
			</div>
		</div>
	);
}
