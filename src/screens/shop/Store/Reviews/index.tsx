import {
	type RatingBar,
	type Review,
	ReviewsList,
} from "@/screens/_components/reviews";
import { ScreenSectionCard } from "@/screens/_components/screen-section-card";

const RATING_BARS: RatingBar[] = [
	{ stars: 5, count: 1762, width: "82%" },
	{ stars: 4, count: 257, width: "12%" },
	{ stars: 3, count: 86, width: "4%" },
	{ stars: 2, count: 21, width: "1%" },
	{ stars: 1, count: 21, width: "1%" },
];

const REVIEWS: Review[] = [
	{
		initials: "JM",
		initialsColor: "bg-brand-100 text-brand-600",
		name: "James M.",
		rating: 5,
		timeAgo: "2 weeks ago",
		body: "Incredible quality headphones for the price. Noise cancellation is top-notch and the build quality feels premium. Shipped fast, well packaged. Will definitely be buying from this store again!",
		product: "Pro Studio Wireless Headphones",
	},
	{
		initials: "SL",
		initialsColor: "bg-emerald-100 text-emerald-600",
		name: "Sarah L.",
		rating: 5,
		timeAgo: "1 month ago",
		body: `The 4K monitor is stunning — colors are accurate and the IPS panel is gorgeous. Chat with the seller was super helpful, they recommended the right cable adapter too. A+`,
		product: `Ultra HD 27" Monitor`,
	},
	{
		initials: "RK",
		initialsColor: "bg-amber-100 text-amber-600",
		name: "Ryan K.",
		rating: 4,
		timeAgo: "1 month ago",
		body: "Great keyboard, Cherry MX Browns feel amazing for both typing and gaming. Only reason for 4 stars is the keycaps could be a bit thicker. Otherwise fantastic value and fast delivery.",
		product: "Mechanical Keyboard — Cherry MX Brown",
	},
	{
		initials: "AP",
		initialsColor: "bg-rose-100 text-rose-600",
		name: "Aisha P.",
		rating: 5,
		timeAgo: "2 months ago",
		body: "Love this bluetooth speaker! Took it to the beach and the waterproofing held up perfectly. Sound quality is surprisingly good for the size. Battery lasted the whole weekend.",
		product: "Portable Bluetooth Speaker — Waterproof",
	},
	{
		initials: "DW",
		initialsColor: "bg-violet-100 text-violet-600",
		name: "David W.",
		rating: 5,
		timeAgo: "2 months ago",
		body: "The tablet stand is exactly what I needed for my home office. Solid aluminum build, smooth height adjustment, and it looks great on my desk. Arrived next day with express shipping.",
		product: "Tablet Stand — Adjustable Aluminum",
	},
	{
		initials: "MT",
		initialsColor: "bg-cyan-100 text-cyan-600",
		name: "Maria T.",
		rating: 5,
		timeAgo: "3 months ago",
		body: "Ordered the MagSafe case and it fits perfectly. The frosted matte finish looks premium and the magnets are strong. Seller included a nice thank-you card too. Small touch, big impression!",
		product: "MagSafe Case — Frosted Matte Finish",
	},
];

export const ShopStoreReviews = () => {
	return (
		<ScreenSectionCard
			title="Reviews"
			description="See what our customers are saying about TechVault."
		>
			<ReviewsList
				overallRating={4.9}
				totalRatings="2,147 ratings"
				ratingBars={RATING_BARS}
				reviews={REVIEWS}
			/>
		</ScreenSectionCard>
	);
};
