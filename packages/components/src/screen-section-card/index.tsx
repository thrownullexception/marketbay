import { Link, type LinkOptions } from "@tanstack/solid-router";
import clsx from "clsx";
import { Container } from "packages/ui/layout";
import type { JSX } from "solid-js";

export const ScreenSectionCard = (props: {
	title: string;
	description?: string;
	children: JSX.Element;
	alternate?: boolean;
	border?: boolean;
	isLast?: boolean;
	noPadding?: boolean;
	action?: {
		label: string;
		to: LinkOptions["to"];
		params?: LinkOptions["params"];
		search?: LinkOptions["search"];
	};
}) => {
	return (
		<section
			class={clsx({
				"bg-gray-50": props.alternate,
				"border-t border-gray-100 mt-14": props.border,
				"pb-0": props.isLast,
				"py-8": !props.noPadding,
			})}
		>
			<Container>
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
			</Container>
		</section>
	);
};
