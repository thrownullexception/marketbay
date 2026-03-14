import clsx from "clsx";
import type { JSX } from "solid-js";
import { For } from "solid-js";

export type DataTableColumn = {
	label: string;
	align?: "left" | "right";
	hideBelow?: "md" | "lg";
	width?: string;
};

export const DataTable = (props: {
	columns: DataTableColumn[];
	children: JSX.Element;
}) => {
	return (
		<div class="overflow-x-auto">
			<table class="w-full text-sm">
				<thead>
					<tr class="border-b border-gray-50 bg-white">
						<For each={props.columns}>
							{(col) => (
								<th
									class={clsx(
										"py-3 text-xs font-semibold text-gray-500 uppercase tracking-wider",
										col.align === "right"
											? "text-right px-5"
											: "text-left px-3",
										col.hideBelow === "md" && "hidden md:table-cell",
										col.hideBelow === "lg" && "hidden lg:table-cell",
										col.width,
									)}
								>
									{col.label}
								</th>
							)}
						</For>
					</tr>
				</thead>
				<tbody class="divide-y divide-gray-50">{props.children}</tbody>
			</table>
		</div>
	);
};
