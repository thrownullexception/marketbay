export const StoreReviews = () => {
	return (
		<section class="border-t border-gray-100 bg-white py-10">
			<div class="max-w-7xl mx-auto px-4">
				<div class="flex items-end justify-between mb-6">
					<h2 class="text-xl font-bold text-gray-900">
						What buyers are saying
					</h2>
					<a
						href="#"
						class="text-sm font-semibold text-brand-600 hover:text-brand-700 transition hidden sm:inline-flex items-center gap-1"
					>
						All 2,147 Reviews <span>&rarr;</span>
					</a>
				</div>

				<div class="flex flex-col lg:flex-row gap-8 mb-8">
					<ReviewSummary />
					<div class="flex-1 grid sm:grid-cols-2 gap-4">
						<ReviewCard
							initials="JM"
							initialsColor="bg-brand-100 text-brand-600"
							name="James M."
							timeAgo="2 weeks ago"
							body="Incredible quality headphones for the price. Noise cancellation is top-notch and the build quality feels premium. Shipped fast, well packaged. Will buy again!"
							product="Pro Studio Wireless Headphones"
						/>
						<ReviewCard
							initials="SL"
							initialsColor="bg-emerald-100 text-emerald-600"
							name="Sarah L."
							timeAgo="1 month ago"
							body={`The 4K monitor is stunning — colors are accurate and the IPS panel is gorgeous. Chat with the seller was super helpful, they recommended the right cable adapter too. A+`}
							product={`Ultra HD 27" Monitor`}
						/>
					</div>
				</div>
			</div>
		</section>
	);
};

const ReviewSummary = () => {
	const starPath =
		"M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z";

	const bars = [
		{ label: "5", width: "82%" },
		{ label: "4", width: "12%" },
		{ label: "3", width: "4%" },
		{ label: "2", width: "1%" },
		{ label: "1", width: "1%" },
	];

	return (
		<div class="flex items-center gap-6 bg-gray-50 rounded-2xl p-6 lg:w-72 shrink-0">
			<div class="text-center">
				<div class="text-4xl font-extrabold text-gray-900">4.9</div>
				<div class="flex justify-center text-accent-500 mt-1">
					{Array.from({ length: 5 }).map(() => (
						<svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
							<path d={starPath} />
						</svg>
					))}
				</div>
				<p class="text-xs text-gray-400 mt-1">2,147 ratings</p>
			</div>
			<div class="flex-1 space-y-1.5">
				{bars.map((bar) => (
					<div class="flex items-center gap-2">
						<span class="text-xs text-gray-500 w-4">{bar.label}</span>
						<div class="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
							<div
								class="h-full bg-accent-500 rounded-full"
								style={`width:${bar.width}`}
							></div>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

interface ReviewCardProps {
	initials: string;
	initialsColor: string;
	name: string;
	timeAgo: string;
	body: string;
	product: string;
}

const ReviewCard = (props: ReviewCardProps) => {
	const starPath =
		"M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z";

	return (
		<div class="bg-gray-50 rounded-xl p-5">
			<div class="flex items-center gap-3 mb-3">
				<div
					class={`w-8 h-8 rounded-full ${props.initialsColor} flex items-center justify-center text-xs font-bold`}
				>
					{props.initials}
				</div>
				<div>
					<p class="text-sm font-semibold text-gray-900">{props.name}</p>
					<div class="flex items-center gap-1">
						<div class="flex text-accent-500">
							{Array.from({ length: 5 }).map(() => (
								<svg
									class="w-3 h-3"
									fill="currentColor"
									viewBox="0 0 20 20"
								>
									<path d={starPath} />
								</svg>
							))}
						</div>
						<span class="text-[11px] text-gray-400">{props.timeAgo}</span>
					</div>
				</div>
			</div>
			<p class="text-sm text-gray-600 leading-relaxed">{props.body}</p>
			<p class="text-xs text-gray-400 mt-2">Purchased: {props.product}</p>
		</div>
	);
};
