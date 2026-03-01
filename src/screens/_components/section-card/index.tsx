import { Link, type LinkOptions } from "@tanstack/solid-router";
import type { JSX } from "solid-js";

export const SectionCard = (props: {
	title: string;
	description?: string;
	children: JSX.Element;
	alternate?: boolean;
	action?: {
		label: string;
		to: LinkOptions["to"];
		params?: LinkOptions["params"];
		search?: LinkOptions["search"];
	};
}) => {
	return (
		<section class={`py-10 ${props.alternate ? "bg-gray-50" : "bg-white"}`}>
			<div class="max-w-7xl mx-auto px-4">
				<div class="flex items-end justify-between mb-6">
					<div>
						<h2 class="text-xl font-bold text-gray-900">{props.title}</h2>
						<p class="text-gray-500 text-sm mt-0.5">{props.description}</p>
					</div>
					{props.action ? (
						<Link
							to={props.action.to}
							search={props.action.search}
							params={props.action.params}
							class="text-sm font-semibold text-brand-600 hover:text-brand-700 transition hidden sm:inline-flex items-center gap-1"
						>
							{props.action.label} <span>&rarr;</span>
						</Link>
					) : null}
				</div>
				{props.children}
			</div>
		</section>
	);
};
