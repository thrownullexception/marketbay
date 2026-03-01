import {
	FlaskConicalIcon,
	MonitorIcon,
	SpeakerIcon,
	Trash2Icon,
} from "lucide-solid";
import { For } from "solid-js";
import {
	ProductCard,
	type ProductCardData,
} from "@/screens/_components/product-card";
import { ScreenHeader } from "@/screens/_components/screen-header";
import { SectionCard } from "@/screens/_components/section-card";
import { Breadcrumb } from "@/ui/breadcrumb";
import { CartBenefits } from "./CartBenefits";
import { CartItem } from "./CartItem";
import { OrderSummary } from "./OrderSummary";
import { StoreGroupHeader } from "./StoreGroupHeader";

const SAVED_ITEMS: ProductCardData[] = [
	{
		storeName: "StyleHouse",
		name: "Cashmere Blend Oversize Sweater",
		rating: "4.6",
		ratingCount: "64",
		price: "$59",
		originalPrice: "$89",
		badge: "-33%",
	},
	{
		storeName: "FitGear Pro",
		name: "Resistance Band Set — Pro Series",
		rating: "4.7",
		ratingCount: "203",
		price: "$39.99",
		originalPrice: "$49.99",
		badge: "-20%",
	},
	{
		storeName: "BookNook",
		name: "The Art of Focus — 2026 Bestseller",
		rating: "4.8",
		ratingCount: "156",
		price: "$16.99",
	},
];

export const CartScreen = () => {
	return (
		<>
			<Breadcrumb
				items={[
					{ label: "Home", to: "/" },
					{ label: "Shopping Cart", to: "/cart" },
				]}
			/>

			<ScreenHeader title="Shopping Cart" description="3 items from 2 stores">
				<button
					type="button"
					class="hidden sm:inline-flex items-center gap-1.5 text-sm font-medium text-gray-400 hover:text-red-500 transition"
				>
					<Trash2Icon class="w-4 h-4" />
					Clear Cart
				</button>
			</ScreenHeader>

			<main class="max-w-7xl mx-auto px-4 py-8 lg:py-10">
				<div class="grid lg:grid-cols-3 gap-8">
					<div class="lg:col-span-2 space-y-6">
						<div class="bg-white rounded-2xl border border-gray-100 overflow-hidden">
							<StoreGroupHeader
								initials="TV"
								name="TechVault"
								storeUrl="store.html"
								gradientFrom="from-blue-500"
								gradientTo="to-indigo-600"
								verified
								shippingNote="Free shipping on this order"
							/>
							<CartItem
								href="product.html"
								imageGradient="from-blue-50 to-indigo-100"
								image={<SpeakerIcon class="w-12 h-12 text-brand-200" />}
								name="Pro Studio Wireless Headphones — Active Noise Cancelling"
								variant={
									<>
										Color: <span class="text-gray-600">Matte Black</span>
									</>
								}
								price="$59.99"
								originalPrice="$99.99"
								discount="-40% off"
								quantity={1}
							/>
							<CartItem
								href="#"
								imageGradient="from-slate-50 to-gray-100"
								image={<MonitorIcon class="w-12 h-12 text-gray-300" />}
								name={<>Ultra HD 27" Monitor — 4K IPS Display</>}
								variant={
									<>
										Size: <span class="text-gray-600">27 inch</span>
									</>
								}
								price="$299.00"
								originalPrice="$399.00"
								discount="-25% off"
								quantity={1}
								isLast
							/>
						</div>

						<div class="bg-white rounded-2xl border border-gray-100 overflow-hidden">
							<StoreGroupHeader
								initials="GN"
								name="GreenNest"
								storeUrl="#"
								gradientFrom="from-emerald-500"
								gradientTo="to-teal-600"
								verified
								shippingWarning="Add $25.01 more for free shipping"
							/>
							<CartItem
								href="#"
								imageGradient="from-emerald-50 to-green-100"
								image={<FlaskConicalIcon class="w-12 h-12 text-emerald-300" />}
								name="Vitamin C Serum — Natural Glow"
								variant={
									<>
										Size: <span class="text-gray-600">30ml</span>
									</>
								}
								price="$24.99"
								originalPrice="$34.99"
								discount="-28% off"
								quantity={1}
								isLast
							/>
						</div>

						<SectionCard title="Saved for Later">
							<div class="grid grid-cols-2 sm:grid-cols-3 gap-4">
								<For each={SAVED_ITEMS}>
									{(product) => <ProductCard product={product} />}
								</For>
							</div>
						</SectionCard>
					</div>

					<div class="lg:col-span-1">
						<OrderSummary />
						<CartBenefits />
					</div>
				</div>
			</main>
		</>
	);
};
