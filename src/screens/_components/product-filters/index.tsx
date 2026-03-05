import { XIcon } from "lucide-solid";
import { createMemo, createSignal, For, type JSX, Show } from "solid-js";
import { Button } from "@/ui/button";
import { StarIcon } from "lucide-solid";

const FilterShell = (props: {
	title: string;
	canClear: boolean;
	children: JSX.Element;
}) => {
	return (
		<div class="bg-white rounded-xl border border-gray-100 p-4">
			<div class="flex items-center justify-between mb-3">
				<h3 class="text-sm font-semibold text-gray-900">{props.title}</h3>
				<Show when={props.canClear}>
					<Button
						type="button"
						variant="primaryText"
						size="sm"
						label="Clear"
						onClick={() => {
							console.log("todo");
						}}
					/>
				</Show>
			</div>
			<div class="space-y-2 text-sm">{props.children}</div>
		</div>
	);
};

export const ActiveFilters = () => {
	return (
		<div class="bg-white rounded-xl border border-gray-100 p-4">
			<div class="flex items-center justify-between mb-3">
				<h3 class="text-sm font-semibold text-gray-900">Active Filters</h3>
				<Button
					type="button"
					variant="primaryText"
					size="sm"
					label="Clear all"
					onClick={() => {
						console.log("todo");
					}}
				/>
			</div>
			<div class="flex flex-wrap gap-1.5">
				<For each={[{ label: "$50 – $100" }, { label: "4 stars & up" }]}>
					{(filter) => (
						<Button
							type="button"
							variant="soft"
							size="sm"
							Icon={XIcon}
							iconPosition="right"
							label={filter.label}
							onClick={() => {
								console.log("remove filter", filter.label);
							}}
						/>
					)}
				</For>
			</div>
		</div>
	);
};

const MAX_OPTIONS_TO_SHOW = 7;

type FilterOption = {
	value: string;
	label: string | JSX.Element;
	count?: string;
};

export const FilterOptions = (props: {
	options: FilterOption[];
	values: string[];
	title: string;
	type: "checkbox" | "radio";
	name: string;
}) => {
	const [showAll, setShowAll] = createSignal(false);
	const options = createMemo(() =>
		showAll() ? props.options : props.options.slice(0, MAX_OPTIONS_TO_SHOW),
	);

	return (
		<FilterShell title={props.title} canClear={props.values.length > 0}>
			<For each={options()}>
				{(option) => (
					<label class="flex items-center gap-2 cursor-pointer group">
						<input
							type={props.type || "checkbox"}
							name={props.name}
							class="w-4 h-4 rounded border-gray-300 text-brand-600 focus:ring-brand-500"
						/>
						<span class="text-sm text-gray-600 group-hover:text-gray-900 transition">
							{option.label}
						</span>
						{option.count && (
							<span class="ml-auto text-xs text-gray-400">{option.count}</span>
						)}
					</label>
				)}
			</For>
			{props.options.length > MAX_OPTIONS_TO_SHOW && (
				<div class="mt-4">
					<Button
						type="button"
						variant="primaryText"
						size="sm"
						label={
							showAll()
								? "Show less"
								: `Show ${props.options.length - MAX_OPTIONS_TO_SHOW} more`
						}
						onClick={() => setShowAll((prev) => !prev)}
					/>
				</div>
			)}
		</FilterShell>
	);
};

export const PriceRangeFilter = (props: { options: FilterOption[] }) => {
	return (
		<FilterOptions
			type="radio"
			name="price_range"
			options={props.options}
			values={[]}
			title="Price Range"
		/>
	);
};

const RatingOption = (props: { rating: number }) => {
	return (
		// <div class="flex items-center gap-1">
		// 	<For each={Array(props.rating)}>
		// 		{() => (
		// 			<div class="flex text-yellow-500">
		<StarIcon class="w-3.5 h-3.5" fill="currentColor" />
		// 			</div>
		// 		)}
		// 	</For>
		// </div>
	);
};

export const RatingFilter = () => {
	return (
		<FilterOptions
			type="radio"
			name="rating"
			options={
				[
					// {
					// 	value: "4_up",
					// 	label: <RatingOption rating={4} />,
					// },
					// {
					// 	value: "3_up",
					// 	label: <RatingOption rating={3} />,
					// },
					// {
					// 	value: "2_up",
					// 	label: <div>2</div>,
					// },
				]
			}
			values={[]}
			title="Minimum Rating"
		/>
	);
};
