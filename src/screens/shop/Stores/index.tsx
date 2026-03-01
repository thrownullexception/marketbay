import { Breadcrumb } from "@/ui/breadcrumb";
import { Pagination } from "@/ui/pagination";
import { FeaturedStoreCard } from "./FeaturedStoreCard";
import { SellCTA } from "./SellCTA";
import { StoreListCard } from "./StoreListCard";
import { StoresHeader } from "./StoresHeader";
import { StoresToolbar } from "./StoresToolbar";

export const StoresScreen = () => {
	return (
		<>
			<Breadcrumb
				items={[
					{ label: "Home", to: "/" },
					{ label: "Browse Stores", to: "/stores" },
				]}
			/>
			<StoresHeader />
			<section class="py-8 bg-white border-b border-gray-100">
				<div class="max-w-7xl mx-auto px-4">
					<div class="flex items-center justify-between mb-5">
						<h2 class="text-lg font-bold text-gray-900">Featured Stores</h2>
						<span class="text-xs font-medium text-gray-400 uppercase tracking-wide">
							Staff Picks
						</span>
					</div>
					<div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
						<FeaturedStoreCard
							slug="todo"
							gradient="from-blue-600 to-indigo-800"
							initials="TV"
							name="TechVault"
							subtextColor="text-blue-200"
							description="Electronics &bull; Gadgets &bull; 342 products"
							rating="4.9"
							ratingCount="2.1k"
							ratingTextColor="text-blue-300"
							followers="8.4k"
							followersTextColor="text-blue-300"
						/>
						<FeaturedStoreCard
							slug="todo"
							gradient="from-rose-500 to-pink-700"
							initials="SH"
							name="StyleHouse"
							subtextColor="text-rose-200"
							description="Fashion &bull; Accessories &bull; 518 products"
							rating="4.8"
							ratingCount="1.8k"
							ratingTextColor="text-rose-300"
							followers="12.1k"
							followersTextColor="text-rose-300"
						/>
						<FeaturedStoreCard
							slug="todo"
							gradient="from-emerald-500 to-teal-700"
							initials="GN"
							name="GreenNest"
							subtextColor="text-emerald-200"
							description="Beauty &bull; Wellness &bull; 215 products"
							rating="4.9"
							ratingCount="956"
							ratingTextColor="text-emerald-300"
							followers="6.2k"
							followersTextColor="text-emerald-300"
						/>
					</div>
				</div>
			</section>

			<section class="py-8 bg-gray-50">
				<div class="max-w-7xl mx-auto px-4">
					<StoresToolbar />

					<p class="text-sm text-gray-500 mb-5">
						Showing <span class="font-semibold text-gray-700">1–12</span> of{" "}
						<span class="font-semibold text-gray-700">1,240</span> stores
					</p>

					<div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
						<StoreListCard
							href="store.html"
							bannerGradient="from-blue-500 to-indigo-600"
							avatarGradient="from-blue-500 to-indigo-600"
							initials="TV"
							name="TechVault"
							verified
							categories="Electronics &bull; Gadgets &bull; Accessories"
							description="Premium electronics and gadgets. Curated selection of top-quality tech products with fast shipping."
							rating="4.9"
							ratingCount="2.1k"
							productCount="342"
							followers="8.4k"
						/>
						<StoreListCard
							href="#"
							bannerGradient="from-rose-400 to-pink-600"
							avatarGradient="from-rose-500 to-pink-600"
							initials="SH"
							name="StyleHouse"
							verified
							categories="Fashion &bull; Shoes &bull; Accessories"
							description="Trendy fashion pieces for every season. From casual basics to statement looks at affordable prices."
							rating="4.8"
							ratingCount="1.8k"
							productCount="518"
							followers="12.1k"
						/>
						<StoreListCard
							href="#"
							bannerGradient="from-emerald-400 to-teal-600"
							avatarGradient="from-emerald-500 to-teal-600"
							initials="GN"
							name="GreenNest"
							verified
							categories="Beauty &bull; Skincare &bull; Wellness"
							description="Organic, cruelty-free beauty and wellness products. Natural ingredients for radiant skin and self-care."
							rating="4.9"
							ratingCount="956"
							productCount="215"
							followers="6.2k"
							following
						/>
						<StoreListCard
							href="#"
							bannerGradient="from-orange-400 to-amber-600"
							avatarGradient="from-orange-500 to-amber-600"
							initials="FG"
							name="FitGear Pro"
							categories="Sports &bull; Fitness &bull; Equipment"
							description="Professional fitness equipment and sportswear. From resistance bands to dumbbells for every workout."
							rating="4.7"
							ratingCount="743"
							productCount="189"
							followers="3.8k"
						/>
						<StoreListCard
							href="#"
							bannerGradient="from-violet-500 to-purple-700"
							avatarGradient="from-violet-500 to-purple-600"
							initials="BN"
							name="BookNook"
							verified
							categories="Books &bull; Bestsellers &bull; E-books"
							description="Curated book collections from fiction to business. Bestsellers, hidden gems, and exclusive editions."
							rating="4.8"
							ratingCount="1.1k"
							productCount="1,240"
							followers="5.6k"
						/>
						<StoreListCard
							href="#"
							bannerGradient="from-amber-400 to-yellow-600"
							avatarGradient="from-amber-500 to-yellow-600"
							initials="HH"
							name="HomeHaven"
							categories="Home &bull; Furniture &bull; Decor"
							description="Modern home furnishings and decor. Smart lighting, cozy bedding, and stylish storage solutions."
							rating="4.9"
							ratingCount="1.2k"
							productCount="298"
							followers="4.5k"
						/>
						<StoreListCard
							href="#"
							bannerGradient="from-purple-500 to-violet-700"
							avatarGradient="from-purple-500 to-violet-600"
							initials="UV"
							name="UrbanVogue"
							categories="Fashion &bull; Streetwear &bull; Sneakers"
							description="Urban streetwear and sneaker culture. Limited drops, exclusive collabs, and trending styles."
							rating="4.7"
							ratingCount="1.2k"
							productCount="410"
							followers="9.3k"
						/>
						<StoreListCard
							href="#"
							bannerGradient="from-gray-700 to-gray-900"
							avatarGradient="from-gray-700 to-gray-900"
							initials="GZ"
							name="GadgetZone"
							categories="Electronics &bull; Smart Home &bull; Drones"
							description="Cutting-edge gadgets and smart home devices. Drones, action cameras, and innovative tech accessories."
							rating="4.7"
							ratingCount="1.4k"
							productCount="276"
							followers="5.1k"
						/>
						<StoreListCard
							href="#"
							bannerGradient="from-amber-500 to-orange-600"
							avatarGradient="from-amber-500 to-orange-600"
							initials="TC"
							name="ThreadCraft"
							verified
							categories="Fashion &bull; Handmade &bull; Knitwear"
							description="Handcrafted knitwear and artisanal fashion. Each piece is made with care using sustainable materials."
							rating="4.9"
							ratingCount="860"
							productCount="145"
							followers="7.8k"
						/>
					</div>
					<Pagination />
				</div>
			</section>
			<SellCTA />
		</>
	);
};
