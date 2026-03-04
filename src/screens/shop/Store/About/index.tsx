import { ScreenSectionCard } from "@/screens/_components/screen-section-card";

export const ShopStoreAbout = () => {
	return (
		<ScreenSectionCard
			title="About TechVault"
			description="Learn more about who we are, what we do, and why thousands of customers trust us."
		>
			<div class="bg-white rounded-2xl border border-gray-100 p-6 sm:p-8">
				<h3 class="text-base font-bold text-gray-900 mb-3">Our Story</h3>
				<div class="space-y-3 text-sm text-gray-600 leading-relaxed">
					<p>
						TechVault started in 2023 with a simple mission: make premium
						technology accessible to everyone. What began as a small curated
						collection of audio gear has grown into a full-service electronics
						store trusted by thousands.
					</p>
					<p>
						We carefully source every product, working directly with
						manufacturers and authorized distributors to ensure authenticity and
						quality. From headphones to monitors, keyboards to accessories —
						every item in our catalog is hand-picked by our team.
					</p>
					<p>
						Customer experience is at the heart of everything we do. We offer
						fast shipping, a generous return policy, and a dedicated support
						team ready to help with any questions or concerns.
					</p>
				</div>
			</div>
		</ScreenSectionCard>
	);
};
