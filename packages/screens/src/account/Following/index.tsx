import { AdminHeader } from "@/components/admin-header";
import { StoreListCard } from "@/screens/shop/Stores/StoreListCard";
import { Grid3 } from "@/ui/grid";
import { Pagination } from "@/ui/pagination";
// TODO: show stores updates
export const FollowingScreen = () => {
	return (
		<>
			<AdminHeader
				title="Stores you follow"
				description="Stay updated with the latest from your favourite stores"
			/>
			<Grid3>
				<StoreListCard
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
					following
				/>
				<StoreListCard
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
					following
				/>
				<StoreListCard
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
					following
				/>
				<StoreListCard
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
					following
				/>
			</Grid3>
			<Pagination />
		</>
	);
};
