import { linkOptions } from "@tanstack/solid-router";
import { For } from "solid-js";
import { createShopQuery } from "@/shared/treaty";
import { Breadcrumb } from "@/ui/breadcrumb";
import { Container } from "@/ui/container";
import { Grid3 } from "@/ui/grid";
import { Pagination } from "@/ui/pagination";
import { ScreenSectionCard } from "@/ui/screen-section-card";
import { FeaturedStoreCard } from "./FeaturedStoreCard";
import { SellCTA } from "./SellCTA";
import { StoreListCard } from "./StoreListCard";
import { StoresHeader } from "./StoresHeader";
import { StoresToolbar } from "./StoresToolbar";

export const StoresScreen = () => {
	const storesResult = createShopQuery((t) => t.stores.get(), []);

	return (
		<>
			<Breadcrumb
				items={[
					{ label: "Home", link: linkOptions({ to: "/" }) },
					{ label: "Browse Stores", link: linkOptions({ to: "/stores" }) },
				]}
			/>
			<StoresHeader />
			<ScreenSectionCard
				title="Featured Stores"
				description="Follow talented independent sellers"
				alternate
			>
				<Grid3>
					{/* <FeaturedStoreCard
						slug="todo"
						gradient="from-blue-600 to-indigo-800"
						initials="TV"
						name="TechVault"
						subtextColor="text-blue-200"
						categories="Electronics &bull; Gadgets &bull; Accessories"
						description="Premium electronics and gadgets. Curated selection of top-quality tech products with fast shipping."
						rating="4.9"
						ratingCount="2.1k"
						ratingTextColor="text-blue-300"
						productCount="342"
						followers="8.4k"
						followersTextColor="text-blue-300"
					/>
					<FeaturedStoreCard
						slug="todo"
						gradient="from-rose-500 to-pink-700"
						initials="SH"
						name="StyleHouse"
						subtextColor="text-rose-200"
						categories="Fashion &bull; Shoes &bull; Accessories"
						description="Trendy fashion pieces for every season. From casual basics to statement looks at affordable prices."
						rating="4.8"
						ratingCount="1.8k"
						ratingTextColor="text-rose-300"
						productCount="518"
						followers="12.1k"
						followersTextColor="text-rose-300"
					/>
					<FeaturedStoreCard
						slug="todo"
						gradient="from-emerald-500 to-teal-700"
						initials="GN"
						name="GreenNest"
						subtextColor="text-emerald-200"
						categories="Beauty &bull; Skincare &bull; Wellness"
						description="Organic, cruelty-free beauty and wellness products. Natural ingredients for radiant skin and self-care."
						rating="4.9"
						ratingCount="956"
						ratingTextColor="text-emerald-300"
						productCount="215"
						followers="6.2k"
						followersTextColor="text-emerald-300"
					/> */}
				</Grid3>
			</ScreenSectionCard>

			<section class="py-8 border-t border-gray-100">
				<Container>
					<StoresToolbar />

					<p class="text-sm text-gray-500 mb-5">
						Showing <span class="font-semibold text-gray-700">1–12</span> of{" "}
						<span class="font-semibold text-gray-700">1,240</span> stores
					</p>

					<Grid3>
						<For each={storesResult.data}>
							{(store) => (
								<StoreListCard
									{...store}
								/>
							)}
						</For>
					</Grid3>
					<Pagination />
				</Container>
			</section>
			<SellCTA />
		</>
	);
};
