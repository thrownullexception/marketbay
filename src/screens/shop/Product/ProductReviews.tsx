import { Link } from "@tanstack/solid-router";
import { For } from "solid-js";

interface Review {
	initials: string;
	name: string;
	avatarBg: string;
	avatarText: string;
	stars: number;
	timeAgo: string;
	verified: boolean;
	body: string;
	variant?: string;
}

const REVIEWS: Review[] = [
	{
		initials: "JM",
		name: "James M.",
		avatarBg: "bg-brand-100",
		avatarText: "text-brand-600",
		stars: 5,
		timeAgo: "2 weeks ago",
		verified: true,
		body: "Incredible quality for the price. The noise cancellation is top-notch — completely blocks out office chatter and subway noise. Build quality feels premium, not plastic-y at all. Battery easily lasts 3 days with moderate use. The quick charge is a lifesaver too. Highly recommend.",
		variant: "Color: Matte Black",
	},
	{
		initials: "SL",
		name: "Sarah L.",
		avatarBg: "bg-emerald-100",
		avatarText: "text-emerald-600",
		stars: 4,
		timeAgo: "1 month ago",
		verified: true,
		body: "Really comfortable for long work-from-home sessions. The cushions don't make my ears sweat like my old pair. Sound quality is excellent for the price. Only minor note: the Bluetooth multipoint switching could be slightly faster, but it works. I chatted with the seller beforehand and they were super helpful.",
		variant: "Color: Pearl White",
	},
];

const RATING_BARS = [
	{ stars: 5, width: "85%" },
	{ stars: 4, width: "10%" },
	{ stars: 3, width: "3%" },
	{ stars: 2, width: "1%" },
	{ stars: 1, width: "1%" },
];

const STAR_PATH =
	"M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z";

const StarIcon = (props: { class?: string }) => (
	<svg class={props.class ?? "w-3 h-3"} fill="currentColor" viewBox="0 0 20 20">
		<title>Star</title>
		<path d={STAR_PATH} />
	</svg>
);

const ReviewCard = (props: { review: Review }) => (
	<div class="border-b border-gray-100 pb-6">
		<div class="flex items-center gap-3 mb-2">
			<div
				class={`w-8 h-8 rounded-full ${props.review.avatarBg} ${props.review.avatarText} flex items-center justify-center text-xs font-bold`}
			>
				{props.review.initials}
			</div>
			<div>
				<p class="text-sm font-semibold text-gray-900">{props.review.name}</p>
				<div class="flex items-center gap-1.5">
					<div class="flex text-accent-500">
						<For each={Array.from({ length: 5 })}>
							{(_, i) => (
								<StarIcon
									class={`w-3 h-3 ${i() < props.review.stars ? "text-accent-500" : "text-gray-200"}`}
								/>
							)}
						</For>
					</div>
					<span class="text-[11px] text-gray-400">{props.review.timeAgo}</span>
					{props.review.verified && (
						<span class="text-[11px] text-emerald-600 font-medium flex items-center gap-0.5">
							<svg class="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
								<title>Verified</title>
								<path
									fill-rule="evenodd"
									d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
									clip-rule="evenodd"
								/>
							</svg>{" "}
							Verified Purchase
						</span>
					)}
				</div>
			</div>
		</div>
		<p class="text-sm text-gray-600 leading-relaxed">{props.review.body}</p>
		{props.review.variant && (
			<p class="text-xs text-gray-400 mt-2">{props.review.variant}</p>
		)}
	</div>
);

export const ProductReviews = () => {
	return (
		<section id="reviews" class="mt-14 border-t border-gray-100 pt-10">
			<div class="flex items-end justify-between mb-8">
				<div>
					<h2 class="text-xl font-bold text-gray-900">Customer Reviews</h2>
					<p class="text-sm text-gray-500 mt-0.5">
						243 reviews for this product
					</p>
				</div>
				<button
					type="button"
					class="hidden sm:inline-flex items-center gap-2 px-4 py-2 border border-gray-200 rounded-xl text-sm font-semibold text-gray-600 hover:bg-gray-50 transition"
				>
					<svg
						class="w-4 h-4"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
						stroke-width="2"
					>
						<title>Write review</title>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931z"
						/>
					</svg>
					Write a Review
				</button>
			</div>

			<div class="flex flex-col sm:flex-row gap-8 mb-8">
				<div class="flex items-center gap-6 bg-gray-50 rounded-2xl p-6 sm:w-64 shrink-0">
					<div class="text-center">
						<div class="text-4xl font-extrabold text-gray-900">4.9</div>
						<div class="flex justify-center text-accent-500 mt-1 gap-0.5">
							<For each={Array.from({ length: 5 })}>
								{() => <StarIcon class="w-4 h-4" />}
							</For>
						</div>
					</div>
					<div class="flex-1 space-y-1.5">
						<For each={RATING_BARS}>
							{(bar) => (
								<div class="flex items-center gap-2">
									<span class="text-xs text-gray-500 w-4">{bar.stars}</span>
									<div class="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
										<div
											class="h-full bg-accent-500 rounded-full"
											style={{ width: bar.width }}
										/>
									</div>
								</div>
							)}
						</For>
					</div>
				</div>

				<div class="flex-1 space-y-6">
					<For each={REVIEWS}>{(review) => <ReviewCard review={review} />}</For>

					<Link
						to="/product/$productSlug"
						params={{ productSlug: "pro-studio-wireless-headphones" }}
						hash="reviews"
						class="inline-flex items-center gap-1 text-sm font-semibold text-brand-600 hover:text-brand-700 transition"
					>
						View all 243 reviews{" "}
						<svg
							class="w-4 h-4"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
							stroke-width="2"
						>
							<title>Arrow right</title>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								d="M17 8l4 4m0 0l-4 4m4-4H3"
							/>
						</svg>
					</Link>
				</div>
			</div>
		</section>
	);
};
