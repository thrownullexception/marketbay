export const TrustBar = () => {
	const items = [
		"Free shipping over $50",
		"Secure checkout",
		"Buyer protection",
		"Easy returns",
	];

	return (
		<section class="py-5 bg-gray-50 border-y border-gray-100">
			<div class="max-w-7xl mx-auto px-4">
				<div class="flex flex-wrap items-center justify-center gap-8 lg:gap-12 text-sm text-gray-500">
					{items.map((item) => (
						<div class="flex items-center gap-2">
							<svg
								class="w-5 h-5 text-green-500"
								fill="currentColor"
								viewBox="0 0 20 20"
							>
								<path
									fill-rule="evenodd"
									d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
									clip-rule="evenodd"
								/>
							</svg>
							<span>{item}</span>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};
