import { StarIcon } from "lucide-solid";
import { For } from "solid-js";
import { Button } from "@/ui/button";

export interface Review {
	initials: string;
	initialsColor: string;
	name: string;
	rating: number;
	timeAgo: string;
	body: string;
	verified?: boolean;
	variant?: string;
	product?: string;
}

export interface RatingBar {
	stars: number;
	count?: number;
	width: string;
}

const ReviewsSummary = (props: {
	overallRating: number;
	totalRatings: string;
	ratingBars: RatingBar[];
}) => (
	<div class="bg-white rounded-2xl border border-gray-100 p-6">
		<div class="text-center mb-5">
			<div class="text-5xl font-extrabold text-gray-900">
				{props.overallRating}
			</div>
			<div class="flex justify-center text-yellow-500 mt-1.5 gap-0.5">
				<For each={Array.from({ length: 5 })}>
					{() => <StarIcon class="w-4 h-4" fill="currentColor" />}
				</For>
			</div>
			<p class="text-xs text-gray-400 mt-1">{props.totalRatings}</p>
		</div>

		<div class="space-y-2">
			<For each={props.ratingBars}>
				{(bar) => (
					<div class="flex items-center gap-2.5">
						<div class="flex items-center gap-1 w-8 shrink-0 justify-end">
							<span class="text-sm text-gray-600">{bar.stars}</span>
							<StarIcon class="w-3 h-3 text-yellow-500" fill="currentColor" />
						</div>
						<div class="flex-1 h-2.5 bg-gray-100 rounded-full overflow-hidden">
							<div
								class="h-full bg-yellow-500 rounded-full"
								style={`width:${bar.width}`}
							/>
						</div>
						{bar.count !== undefined && (
							<span class="text-xs text-gray-400 w-10 text-right tabular-nums">
								{bar.count.toLocaleString()}
							</span>
						)}
					</div>
				)}
			</For>
		</div>
	</div>
);

const ReviewCard = (props: { review: Review }) => (
	<div class="bg-white rounded-xl border border-gray-100 px-4 py-3">
		<div class="flex items-center gap-2.5">
			<div
				class={`w-8 h-8 rounded-full ${props.review.initialsColor} flex items-center justify-center text-xs font-bold shrink-0`}
			>
				{props.review.initials}
			</div>
			<p class="text-sm font-semibold text-gray-900">{props.review.name}</p>
			<div class="flex text-yellow-500">
				<For each={Array.from({ length: props.review.rating })}>
					{() => <StarIcon class="w-3 h-3" fill="currentColor" />}
				</For>
				<For each={Array.from({ length: 5 - props.review.rating })}>
					{() => (
						<StarIcon
							class="w-3 h-3 text-gray-200"
							fill="currentColor"
						/>
					)}
				</For>
			</div>
			<span class="text-xs text-gray-400">{props.review.timeAgo}</span>
			{props.review.verified && (
				<span class="text-[11px] text-emerald-600 font-medium flex items-center gap-0.5">
					<svg class="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
						<title>Verified</title>
						<path
							fill-rule="evenodd"
							d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
							clip-rule="evenodd"
						/>
					</svg>
					Verified
				</span>
			)}
		</div>
		<p class="text-sm text-gray-600 leading-relaxed mt-2">
			{props.review.body}
		</p>
		{(props.review.variant || props.review.product) && (
			<div class="flex items-center gap-3 mt-2 pt-2 border-t border-gray-50 text-xs text-gray-400">
				{props.review.variant && <span>{props.review.variant}</span>}
				{props.review.product && (
					<span>
						Purchased:{" "}
						<span class="text-gray-600 font-medium">
							{props.review.product}
						</span>
					</span>
				)}
			</div>
		)}
	</div>
);

export const ReviewsList = (props: {
	overallRating: number;
	totalRatings: string;
	ratingBars: RatingBar[];
	reviews: Review[];
}) => (
	<div class="flex flex-col lg:flex-row gap-8">
		<div class="lg:w-72 shrink-0">
			<div class="lg:sticky lg:top-24">
				<ReviewsSummary
					overallRating={props.overallRating}
					totalRatings={props.totalRatings}
					ratingBars={props.ratingBars}
				/>
			</div>
		</div>
		<div class="flex-1 space-y-4">
			<For each={props.reviews}>
				{(review) => <ReviewCard review={review} />}
			</For>
			<div class="flex justify-center pt-4">
				<Button variant="default" label="Load More" />
			</div>
		</div>
	</div>
);
