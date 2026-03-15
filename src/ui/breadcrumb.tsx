import { Link, type LinkOptions } from "@tanstack/solid-router";
import { ChevronRight } from "lucide-solid";
import { Container } from "./container";

export type BreadcrumbItem = {
	label: string;
	link: LinkOptions;
};

export function Breadcrumb({ items }: { items: BreadcrumbItem[] }) {
	return (
		<div class="bg-white border-b border-gray-100">
			<Container class="py-2.5">
				<BreadcrumbNav items={items} />
			</Container>
		</div>
	);
}

export const BreadcrumbNav = ({ items }: { items: BreadcrumbItem[] }) => {
	return (
		<nav class="flex items-center gap-1.5 text-xs text-gray-400">
			{items.slice(0, -1).map((item) => (
				<>
					<Link class="hover:text-brand-600 transition" {...item.link}>
						{item.label}
					</Link>
					<ChevronRight class="w-3 h-3 shrink-0" />
				</>
			))}
			<span class="text-gray-600 font-medium">
				{items[items.length - 1].label}
			</span>
		</nav>
	);
};
