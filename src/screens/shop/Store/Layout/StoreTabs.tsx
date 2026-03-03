import { Link } from "@tanstack/solid-router";
import { Container } from "@/ui/layout";

export const StoreTabs = () => {
	return (
		<div class="bg-white border-b border-gray-100 sticky top-[57px] z-40">
			<Container>
				<div class="flex items-center gap-6 overflow-x-auto scrollbar-hide">
					<Link
						to="/store/$storeSlug"
						params={{ storeSlug: "techvault" }}
						class="tab-active whitespace-nowrap py-3 text-sm font-semibold border-b-2 transition"
					>
						Products
					</Link>
					<Link
						to="/store/$storeSlug/reviews"
						params={{ storeSlug: "techvault" }}
						class="whitespace-nowrap py-3 text-sm font-medium text-gray-400 border-b-2 border-transparent hover:text-gray-600 transition"
					>
						Reviews
					</Link>
					<Link
						to="/store/$storeSlug/about"
						params={{ storeSlug: "techvault" }}
						class="whitespace-nowrap py-3 text-sm font-medium text-gray-400 border-b-2 border-transparent hover:text-gray-600 transition"
					>
						About
					</Link>
					<Link
						to="/store/$storeSlug/policies"
						params={{ storeSlug: "techvault" }}
						class="whitespace-nowrap py-3 text-sm font-medium text-gray-400 border-b-2 border-transparent hover:text-gray-600 transition"
					>
						Policies
					</Link>
				</div>
			</Container>
		</div>
	);
};
