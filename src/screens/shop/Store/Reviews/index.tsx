import { ScreenSectionCard } from "@/screens/_components/screen-section-card";
import { StarIcon } from "lucide-solid";
import { Pagination } from "@/ui/pagination";

const RATING_BARS = [
	{ label: "5", count: 1762, width: "82%" },
	{ label: "4", count: 257, width: "12%" },
	{ label: "3", count: 86, width: "4%" },
	{ label: "2", count: 21, width: "1%" },
	{ label: "1", count: 21, width: "1%" },
];

const CATEGORY_RATINGS = [
	{ label: "Product quality", score: 4.9 },
	{ label: "Shipping speed", score: 4.7 },
	{ label: "Communication", score: 4.9 },
	{ label: "Value for money", score: 4.6 },
];

const REVIEWS: ReviewCardProps[] = [
	{
		initials: "JM",
		initialsColor: "bg-brand-100 text-brand-600",
		name: "James M.",
		rating: 5,
		timeAgo: "2 weeks ago",
		body: "Incredible quality headphones for the price. Noise cancellation is top-notch and the build quality feels premium. Shipped fast, well packaged. Will definitely be buying from this store again!",
		product: "Pro Studio Wireless Headphones",
		helpful: 24,
	},
	{
		initials: "SL",
		initialsColor: "bg-emerald-100 text-emerald-600",
		name: "Sarah L.",
		rating: 5,
		timeAgo: "1 month ago",
		body: `The 4K monitor is stunning — colors are accurate and the IPS panel is gorgeous. Chat with the seller was super helpful, they recommended the right cable adapter too. A+`,
		product: `Ultra HD 27" Monitor`,
		helpful: 18,
	},
	{
		initials: "RK",
		initialsColor: "bg-amber-100 text-amber-600",
		name: "Ryan K.",
		rating: 4,
		timeAgo: "1 month ago",
		body: "Great keyboard, Cherry MX Browns feel amazing for both typing and gaming. Only reason for 4 stars is the keycaps could be a bit thicker. Otherwise fantastic value and fast delivery.",
		product: "Mechanical Keyboard — Cherry MX Brown",
		helpful: 12,
	},
	{
		initials: "AP",
		initialsColor: "bg-rose-100 text-rose-600",
		name: "Aisha P.",
		rating: 5,
		timeAgo: "2 months ago",
		body: "Love this bluetooth speaker! Took it to the beach and the waterproofing held up perfectly. Sound quality is surprisingly good for the size. Battery lasted the whole weekend.",
		product: "Portable Bluetooth Speaker — Waterproof",
		helpful: 9,
	},
	{
		initials: "DW",
		initialsColor: "bg-violet-100 text-violet-600",
		name: "David W.",
		rating: 5,
		timeAgo: "2 months ago",
		body: "The tablet stand is exactly what I needed for my home office. Solid aluminum build, smooth height adjustment, and it looks great on my desk. Arrived next day with express shipping.",
		product: "Tablet Stand — Adjustable Aluminum",
		helpful: 6,
	},
	{
		initials: "MT",
		initialsColor: "bg-cyan-100 text-cyan-600",
		name: "Maria T.",
		rating: 5,
		timeAgo: "3 months ago",
		body: "Ordered the MagSafe case and it fits perfectly. The frosted matte finish looks premium and the magnets are strong. Seller included a nice thank-you card too. Small touch, big impression!",
		product: "MagSafe Case — Frosted Matte Finish",
		helpful: 15,
	},
];

export const ShopStoreReviews = () => {
	return (
		<ScreenSectionCard
			title="Reviews"
			description="See what our customers are saying about TechVault."
		>
			<div class="space-y-8">
				<ReviewSummary />
				<div class="space-y-4">
					{REVIEWS.map((review) => (
						<ReviewCard {...review} />
					))}
				</div>
				<Pagination />
			</div>
		</ScreenSectionCard>
	);
};

const ReviewSummary = () => {
	return (
		<div class="bg-white rounded-2xl border border-gray-100 p-6 sm:p-8">
			<div class="flex flex-col sm:flex-row gap-8">
				<div class="flex items-center gap-6 sm:w-56 shrink-0">
					<div class="text-center">
						<div class="text-5xl font-extrabold text-gray-900">4.9</div>
						<div class="flex justify-center text-yellow-500 mt-1.5 gap-0.5">
							{Array.from({ length: 5 }).map(() => (
								<StarIcon class="w-4 h-4" fill="currentColor" />
							))}
						</div>
						<p class="text-xs text-gray-400 mt-1">2,147 ratings</p>
					</div>
				</div>

				<div class="flex-1 space-y-2 min-w-0">
					{RATING_BARS.map((bar) => (
						<div class="flex items-center gap-2.5">
							<div class="flex items-center gap-1 w-8 shrink-0 justify-end">
								<span class="text-sm text-gray-600">{bar.label}</span>
								<StarIcon class="w-3 h-3 text-yellow-500" fill="currentColor" />
							</div>
							<div class="flex-1 h-2.5 bg-gray-100 rounded-full overflow-hidden">
								<div
									class="h-full bg-yellow-500 rounded-full"
									style={`width:${bar.width}`}
								/>
							</div>
							<span class="text-xs text-gray-400 w-10 text-right tabular-nums">
								{bar.count.toLocaleString()}
							</span>
						</div>
					))}
				</div>

				<div class="sm:border-l sm:border-gray-100 sm:pl-8 space-y-3 sm:w-52 shrink-0">
					{CATEGORY_RATINGS.map((cat) => (
						<div class="flex items-center justify-between gap-3">
							<span class="text-sm text-gray-600">{cat.label}</span>
							<div class="flex items-center gap-1">
								<StarIcon class="w-3 h-3 text-yellow-500" fill="currentColor" />
								<span class="text-sm font-semibold text-gray-900">
									{cat.score}
								</span>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

interface ReviewCardProps {
	initials: string;
	initialsColor: string;
	name: string;
	rating: number;
	timeAgo: string;
	body: string;
	product: string;
	helpful: number;
}

const ReviewCard = (props: ReviewCardProps) => {
	return (
		<div class="bg-white rounded-2xl border border-gray-100 p-5 sm:p-6">
			<div class="flex items-start justify-between gap-4">
				<div class="flex items-center gap-3">
					<div
						class={`w-10 h-10 rounded-full ${props.initialsColor} flex items-center justify-center text-sm font-bold shrink-0`}
					>
						{props.initials}
					</div>
					<div>
						<p class="text-sm font-semibold text-gray-900">{props.name}</p>
						<div class="flex items-center gap-2 mt-0.5">
							<div class="flex text-yellow-500">
								{Array.from({ length: props.rating }).map(() => (
									<StarIcon class="w-3.5 h-3.5" fill="currentColor" />
								))}
								{Array.from({ length: 5 - props.rating }).map(() => (
									<StarIcon class="w-3.5 h-3.5 text-gray-200" fill="currentColor" />
								))}
							</div>
							<span class="text-xs text-gray-400">{props.timeAgo}</span>
						</div>
					</div>
				</div>
			</div>
			<p class="text-sm text-gray-600 leading-relaxed mt-3">{props.body}</p>
			<div class="flex items-center justify-between mt-4 pt-3 border-t border-gray-50">
				<p class="text-xs text-gray-400">
					Purchased:{" "}
					<span class="text-gray-600 font-medium">{props.product}</span>
				</p>
			</div>
		</div>
	);
};
