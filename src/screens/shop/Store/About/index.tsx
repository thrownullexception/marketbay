import { linkOptions } from "@tanstack/solid-router";
import type { LucideIcon } from "lucide-solid";
import {
	AwardIcon,
	CalendarIcon,
	GlobeIcon,
	HeadsetIcon,
	MapPinIcon,
	PackageIcon,
	ShieldCheckIcon,
	TruckIcon,
	UsersIcon,
} from "lucide-solid";
import { LinkButton } from "@/ui/button";
import { StarIcon } from "@/ui/icons";
import { Container } from "@/ui/layout";

export const ShopStoreAbout = () => {
	return (
		<Container>
			<section class="space-y-8">
				<div>
					<h2 class="text-xl font-bold text-gray-900">About TechVault</h2>
					<p class="text-sm text-gray-500 mt-1 max-w-2xl">
						Learn more about who we are, what we do, and why thousands of
						customers trust us.
					</p>
				</div>

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
							manufacturers and authorized distributors to ensure authenticity
							and quality. From headphones to monitors, keyboards to accessories
							— every item in our catalog is hand-picked by our team.
						</p>
						<p>
							Customer experience is at the heart of everything we do. We offer
							fast shipping, a generous return policy, and a dedicated support
							team ready to help with any questions or concerns.
						</p>
					</div>
				</div>

				<div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
					<StatCard icon={PackageIcon} value="342" label="Products listed" />
					<StatCard icon={UsersIcon} value="8,400+" label="Followers" />
					<StatCard icon={AwardIcon} value="4.9" label="Average rating" />
					<StatCard icon={TruckIcon} value="12,500+" label="Orders shipped" />
				</div>

				<div class="grid md:grid-cols-2 gap-6">
					<div class="bg-white rounded-2xl border border-gray-100 p-6">
						<h3 class="text-base font-bold text-gray-900 mb-4">
							Store Details
						</h3>
						<dl class="space-y-3">
							<DetailRow
								Icon={CalendarIcon}
								label="Joined"
								value="March 2023"
							/>
							<DetailRow
								Icon={MapPinIcon}
								label="Location"
								value="San Francisco, CA"
							/>
							<DetailRow
								Icon={GlobeIcon}
								label="Ships to"
								value="United States & International"
							/>
							<DetailRow
								Icon={HeadsetIcon}
								label="Response time"
								value="Usually within 2 hours"
							/>
							<DetailRow
								Icon={ShieldCheckIcon}
								label="Seller status"
								value="Verified & Top Rated"
							/>
						</dl>
					</div>

					<div class="bg-white rounded-2xl border border-gray-100 p-6">
						<h3 class="text-base font-bold text-gray-900 mb-4">
							Customer Feedback
						</h3>
						<div class="flex items-center gap-4 mb-5">
							<div class="text-4xl font-extrabold text-gray-900">4.9</div>
							<div>
								<div class="flex text-accent-500">
									{Array.from({ length: 5 }).map(() => (
										<StarIcon class="w-4 h-4" />
									))}
								</div>
								<p class="text-xs text-gray-500 mt-0.5">
									Based on 2,147 ratings
								</p>
							</div>
						</div>
						<div class="space-y-3">
							<FeedbackBar label="Product quality" percentage={96} />
							<FeedbackBar label="Shipping speed" percentage={92} />
							<FeedbackBar label="Communication" percentage={98} />
							<FeedbackBar label="Value for money" percentage={89} />
						</div>
						<div class="mt-5 pt-5 border-t border-gray-100">
							<LinkButton
								label="Read all reviews"
								link={linkOptions({
									to: "/store/$storeSlug/reviews",
									params: { storeSlug: "techvault" },
								})}
								variant="default"
							/>
						</div>
					</div>
				</div>
			</section>
		</Container>
	);
};

const StatCard = (props: {
	icon: LucideIcon;
	value: string;
	label: string;
}) => {
	return (
		<div class="bg-white rounded-2xl border border-gray-100 p-5 text-center">
			<props.icon class="w-5 h-5 text-brand-600 mx-auto mb-2" />
			<div class="text-2xl font-extrabold text-gray-900">{props.value}</div>
			<p class="text-xs text-gray-500 mt-0.5">{props.label}</p>
		</div>
	);
};

const DetailRow = (props: {
	Icon: LucideIcon;
	label: string;
	value: string;
}) => {
	return (
		<div class="flex items-center gap-3">
			<props.Icon class="w-4 h-4 text-gray-400 shrink-0" />
			<dt class="text-sm text-gray-500 w-28 shrink-0">{props.label}</dt>
			<dd class="text-sm font-medium text-gray-900">{props.value}</dd>
		</div>
	);
};

const FeedbackBar = (props: { label: string; percentage: number }) => {
	return (
		<div class="flex items-center gap-3">
			<span class="text-sm text-gray-600 w-36 shrink-0">{props.label}</span>
			<div class="flex-1 h-2 bg-gray-100 rounded-full overflow-hidden">
				<div
					class="h-full bg-brand-500 rounded-full"
					style={`width:${props.percentage}%`}
				/>
			</div>
			<span class="text-xs font-semibold text-gray-500 w-8 text-right">
				{props.percentage}%
			</span>
		</div>
	);
};
