import { type RatingBar, type Review, ReviewsList } from "@/ui/reviews";
import { ScreenSectionCard } from "@/ui/screen-section-card";

const REVIEWS: Review[] = [
	{
		initials: "JM",
		initialsColor: "bg-brand-100 text-brand-600",
		name: "James M.",
		rating: 5,
		timeAgo: "2 weeks ago",
		verified: true,
		body: "Incredible quality for the price. The noise cancellation is top-notch — completely blocks out office chatter and subway noise. Build quality feels premium, not plastic-y at all. Battery easily lasts 3 days with moderate use. The quick charge is a lifesaver too. Highly recommend.",
		variant: "Color: Matte Black",
	},
	{
		initials: "SL",
		initialsColor: "bg-emerald-100 text-emerald-600",
		name: "Sarah L.",
		rating: 4,
		timeAgo: "1 month ago",
		verified: true,
		body: "Really comfortable for long work-from-home sessions. The cushions don't make my ears sweat like my old pair. Sound quality is excellent for the price. Only minor note: the Bluetooth multipoint switching could be slightly faster, but it works. I chatted with the seller beforehand and they were super helpful.",
		variant: "Color: Pearl White",
	},
];

const RATING_BARS: RatingBar[] = [
	{ stars: 5, width: "85%" },
	{ stars: 4, width: "10%" },
	{ stars: 3, width: "3%" },
	{ stars: 2, width: "1%" },
	{ stars: 1, width: "1%" },
];

export const ProductReviews = () => {
	return (
		<ScreenSectionCard
			title="Customer Reviews"
			description="243 reviews for this product"
			alternate
		>
			<ReviewsList
				overallRating={4.9}
				totalRatings="243 ratings"
				ratingBars={RATING_BARS}
				reviews={REVIEWS}
			/>
		</ScreenSectionCard>
	);
};
