import { Link } from "@tanstack/solid-router";
import {
	MessageSquareMoreIcon,
	ShareIcon,
	ShieldCheckIcon,
	StarIcon,
	UserPlusIcon,
} from "lucide-solid";
export const StoreHero = () => {
	return (
		<section class="bg-white border-b border-gray-100">
			<div class="relative h-36 sm:h-44 lg:h-52 bg-linear-to-r from-brand-700 via-brand-800 to-brand-950 overflow-hidden">
				<div class="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48Y2lyY2xlIGN4PSIzMCIgY3k9IjMwIiByPSIyIiBmaWxsPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMDQpIi8+PC9zdmc+')] opacity-80"></div>
				<div class="absolute inset-0 bg-linear-to-t from-black/20 to-transparent"></div>
			</div>

			<div class="max-w-7xl mx-auto px-4">
				<div class="relative -mt-10 sm:-mt-12 mb-4">
					<div class="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl bg-linear-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-white text-2xl sm:text-3xl font-bold border-4 border-white shadow-lg">
						TV
					</div>
				</div>

				<div class="flex flex-col sm:flex-row sm:items-start gap-4 pb-6">
					<div class="flex-1 min-w-0">
						<div class="flex flex-wrap items-center gap-2">
							<h1 class="text-2xl font-extrabold text-gray-900">TechVault</h1>
							<span class="inline-flex items-center gap-1 px-2 py-0.5 bg-blue-50 text-blue-700 text-[11px] font-semibold rounded-full border border-blue-100">
								<ShieldCheckIcon class="w-3 h-3" />
								Verified Store
							</span>
						</div>
						<p class="text-sm text-gray-500 mt-1.5 max-w-xl">
							Premium electronics, gadgets & accessories. Curated selection of
							top-quality tech products with fast shipping and dedicated
							support.
						</p>
						<div class="flex flex-wrap items-center gap-x-4 gap-y-1 mt-3 text-sm text-gray-500">
							<div class="flex items-center gap-1">
								<StarIcon class="w-4 h-4 text-accent-500" />
								<span class="font-semibold text-gray-700">4.9</span>
								<span>(2,147 ratings)</span>
							</div>
							<span class="text-gray-300">|</span>
							<span>342 products</span>
							<span class="text-gray-300">|</span>
							<span>8.4k followers</span>
							<span class="text-gray-300 hidden sm:inline">|</span>
							<span class="hidden sm:inline">Joined Mar 2023</span>
						</div>
					</div>

					<div class="flex items-center gap-2 shrink-0">
						<button
							type="button"
							class="px-5 py-2.5 bg-brand-600 hover:bg-brand-700 text-white text-sm font-semibold rounded-xl transition shadow-sm flex items-center gap-2"
						>
							<UserPlusIcon class="w-4 h-4" />
							Follow
						</button>
						<Link
							to="/chat/$sellerId"
							params={{ sellerId: "123" }}
							class="px-4 py-2.5 bg-gray-100 hover:bg-gray-200 text-gray-700 text-sm font-semibold rounded-xl transition flex items-center gap-2"
						>
							<MessageSquareMoreIcon class="w-4 h-4" />
						</Link>
						<button
							class="p-2.5 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-xl transition"
							aria-label="Share"
							type="button"
						>
							<ShareIcon class="w-4 h-4" />
						</button>
					</div>
				</div>
			</div>
		</section>
	);
};
