import {
	BookIcon,
	DumbbellIcon,
	FlaskConicalIcon,
	MonitorIcon,
	SpeakerIcon,
} from "lucide-solid";
import { Breadcrumb } from "@/ui/breadcrumb";
import { CartBenefits } from "./CartBenefits";
import { CartItem } from "./CartItem";
import { CartHeader } from "./Header";
import { OrderSummary } from "./OrderSummary";
import { SavedForLater } from "./SavedForLater";
import { SavedItem } from "./SavedItem";
import { StoreGroup } from "./StoreGroup";
import { StoreGroupHeader } from "./StoreGroupHeader";

export const CartScreen = () => {
	return (
		<>
			<Breadcrumb
				items={[
					{ label: "Home", to: "/" },
					{ label: "Shopping Cart", to: "/cart" },
				]}
			/>

			<main class="max-w-7xl mx-auto px-4 py-8 lg:py-10">
				<CartHeader />

				<div class="grid lg:grid-cols-3 gap-8">
					<div class="lg:col-span-2 space-y-6">
						<StoreGroup>
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
						</StoreGroup>

						<StoreGroup>
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
						</StoreGroup>

						<SavedForLater>
							<SavedItem
								href="#"
								imageGradient="from-pink-50 to-rose-100"
								image={<DumbbellIcon class="w-12 h-12 text-rose-300" />}
								storeName="StyleHouse"
								name="Cashmere Blend Oversize Sweater"
								price="$59"
								originalPrice="$89"
								discount="-33%"
							/>
							<SavedItem
								href="#"
								imageGradient="from-cyan-50 to-sky-100"
								image={<DumbbellIcon class="w-12 h-12 text-cyan-300" />}
								storeName="FitGear Pro"
								name="Resistance Band Set — Pro Series"
								price="$39.99"
								originalPrice="$49.99"
								discount="-20%"
							/>
							<SavedItem
								href="#"
								imageGradient="from-amber-50 to-orange-100"
								image={<BookIcon class="w-12 h-12 text-amber-300" />}
								storeName="BookNook"
								name="The Art of Focus — 2026 Bestseller"
								price="$16.99"
							/>
						</SavedForLater>
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
